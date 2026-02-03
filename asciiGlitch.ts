/**
 * ASCII Glitch Ripple Hover Effect
 * Ported from Bastien Cornier's implementation
 * https://codepen.io/erevan/pen/MYKBjdZ
 */

interface AsciiShiftOptions {
    dur?: number;
    chars?: string;
    preserveSpaces?: boolean;
    spread?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const WAVE_THRESH = 3;
const CHAR_MULT = 3;
const ANIM_STEP = 40;
const WAVE_BUF = 5;

// Default character set from the original CodePen
const DEFAULT_CHARS = '.,·-─~+:;=*π""┐┌┘┴┬╗╔╝╚╬╠╣╩╦║░▒▓█▄▀▌▐■!?&#$@0123456789*';

export const createASCIIShift = (el: HTMLElement, opts: AsciiShiftOptions = {}) => {
    const origTxt = el.textContent || '';
    const origChars = origTxt.split("");
    let isAnim = false;
    let cursorPos = 0;
    let waves: { startPos: number; startTime: number; id: number }[] = [];
    let animId: number | null = null;
    let isHover = false;
    let origW: number | null = null;

    const cfg = {
        dur: 600,
        chars: DEFAULT_CHARS,
        preserveSpaces: true,
        spread: 0.3,
        ...opts
    };

    const updateCursorPos = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const len = origTxt.length;
        // Calculate cursor position relative to character count
        const pos = Math.round((x / rect.width) * len);
        cursorPos = Math.max(0, Math.min(pos, len - 1));
    };

    const startWave = () => {
        waves.push({ startPos: cursorPos, startTime: Date.now(), id: Math.random() });
        if (!isAnim) start();
    };

    const cleanupWaves = (t: number) => {
        waves = waves.filter((w) => t - w.startTime < cfg.dur);
    };

    const calcWaveEffect = (charIdx: number, t: number) => {
        let shouldAnim = false;
        let resultChar = origChars[charIdx];
        for (const w of waves) {
            const age = t - w.startTime;
            const prog = Math.min(age / cfg.dur, 1);
            const dist = Math.abs(charIdx - w.startPos);

            // Calculate max distance for wave propagation
            const maxDist = Math.max(w.startPos, origChars.length - w.startPos - 1);
            const rad = (prog * (maxDist + WAVE_BUF)) / cfg.spread;

            if (dist <= rad) {
                shouldAnim = true;
                const intens = Math.max(0, rad - dist);
                if (intens <= WAVE_THRESH && intens > 0) {
                    const charIdx = (dist * CHAR_MULT + Math.floor(age / ANIM_STEP)) % cfg.chars.length;
                    resultChar = cfg.chars[charIdx];
                }
            }
        }
        return { shouldAnim, char: resultChar };
    };

    const genScrambledTxt = (t: number) =>
        origChars.map((char, i) => {
            if (cfg.preserveSpaces && char === " ") return " ";
            const res = calcWaveEffect(i, t);
            return res.shouldAnim ? res.char : char;
        }).join("");

    const stop = () => {
        el.textContent = origTxt;
        el.classList.remove("as");
        if (origW !== null) {
            el.style.width = "";
            origW = null;
        }
        isAnim = false;
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
    };

    const start = () => {
        if (isAnim) return;

        // Lock width to prevent layout shifts during glitch
        if (origW === null) {
            origW = el.getBoundingClientRect().width;
            el.style.width = `${origW}px`;
        }

        isAnim = true;
        el.classList.add("as");

        const animate = () => {
            const t = Date.now();
            cleanupWaves(t);
            if (waves.length === 0) {
                stop();
                return;
            }
            el.textContent = genScrambledTxt(t);
            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);
    };

    const onMouseEnter = (e: MouseEvent) => {
        isHover = true;
        updateCursorPos(e);
        startWave();
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isHover) {
            const old = cursorPos;
            updateCursorPos(e);
            if (cursorPos !== old) startWave();
        }
    };

    const onMouseLeave = () => {
        isHover = false;
    };

    // Bind events
    el.addEventListener("mouseenter", onMouseEnter as EventListener);
    el.addEventListener("mousemove", onMouseMove as EventListener);
    el.addEventListener("mouseleave", onMouseLeave);

    // Return cleanup function
    return {
        destroy: () => {
            stop();
            el.removeEventListener("mouseenter", onMouseEnter as EventListener);
            el.removeEventListener("mousemove", onMouseMove as EventListener);
            el.removeEventListener("mouseleave", onMouseLeave);
        }
    };
};
