# CLAUDE.md — Auto-Routing Instructions

## Core Directive

For EVERY request, before responding or writing code, run through the routing table below and activate the appropriate skills, MCP tools, and agents. The user should never have to specify which skill or tool to use — figure it out from context.

## Routing Process

On each new request:

1. **Classify the task** — What type of work is this? (build, debug, review, deploy, research, brainstorm, etc.)
2. **Check the routing table** — Match the task type to the required capabilities
3. **Load MCP tools** — Use `ToolSearch` to load any needed MCP tools BEFORE calling them
4. **Invoke skills** — Use the `Skill` tool for matching skills
5. **Dispatch agents** — Spawn specialized agents when parallel or deep work is needed

Do NOT ask the user which tools to use. Decide and act.

---

## Routing Table

### Building Features / New Functionality
**Trigger:** User asks to build, create, add, or implement something new
**Route:**
1. Invoke `superpowers:brainstorming` first — always brainstorm before creative work
2. Invoke `superpowers:writing-plans` for multi-step tasks
3. Invoke `frontend-design:frontend-design` if it involves UI/visual components
4. Invoke `superpowers:test-driven-development` before writing implementation code
5. Use `ToolSearch` to load `mcp__plugin_context7_context7__resolve-library-id` + `query-docs` if you need library documentation
6. Use Claude Preview tools (`preview_start`, `preview_screenshot`, etc.) to verify UI changes visually
7. Invoke `superpowers:verification-before-completion` before claiming done

### Debugging / Fixing Bugs
**Trigger:** User reports a bug, error, test failure, or unexpected behavior
**Route:**
1. Invoke `superpowers:systematic-debugging` — follow its methodology
2. Use Claude Preview tools to reproduce browser-visible issues
3. Load Playwright tools via `ToolSearch` for complex browser interaction testing
4. Use `preview_console_logs` and `preview_network` to check for runtime errors
5. Invoke `superpowers:verification-before-completion` after fixing

### Code Review
**Trigger:** User asks to review code, PR, or completed work
**Route:**
1. Invoke `superpowers:requesting-code-review` when finishing your own work
2. Invoke `superpowers:receiving-code-review` when processing review feedback
3. Dispatch `feature-dev:code-reviewer` agent for deep automated review
4. Use `simplify` skill to check for reuse, quality, and efficiency

### Database / Backend Work
**Trigger:** User mentions database, tables, SQL, migrations, edge functions, Supabase, or backend APIs
**Route:**
1. Load Supabase tools via `ToolSearch` (query: `+supabase`)
2. Key tools: `execute_sql`, `apply_migration`, `list_tables`, `deploy_edge_function`, `generate_typescript_types`
3. Use `search_docs` to check Supabase documentation when unsure about features
4. Always use `list_tables` to understand the schema before writing queries

### Deployment
**Trigger:** User mentions deploy, publish, go live, Netlify, hosting, or production
**Route:**
1. Load Netlify tools via `ToolSearch` (query: `+netlify`)
2. Use `get-netlify-coding-context` for Netlify-specific development patterns
3. Use `netlify-deploy-services-updater` (`deploy-site`) for deployments
4. Use `netlify-project-services-updater` for environment variables and project config
5. Invoke `superpowers:finishing-a-development-branch` when implementation is complete

### Email
**Trigger:** User mentions email, Gmail, drafts, or sending messages
**Route:**
1. Load Gmail tools via `ToolSearch` (query: `+gmail`)
2. Key tools: `gmail_search_messages`, `gmail_read_thread`, `gmail_create_draft`
3. Always search before composing to check for existing threads

### Bug Reporting / Jam
**Trigger:** User mentions Jam, bug reports, screen recordings, or shares a Jam URL
**Route:**
1. Load Jam tools via `ToolSearch` (query: `jam`)
2. Use `search` or `getDetails` to pull Jam data
3. Use `getConsoleLogs`, `getNetworkRequests`, `getUserEvents` to analyze the bug
4. Use `analyzeVideo` for video-based Jams

### Browser Testing & Verification
**Trigger:** User wants to test in a browser, verify UI, or interact with a web page
**Route:**
- **For dev server preview (your own code):** Use Claude Preview tools (`preview_start`, `preview_screenshot`, `preview_snapshot`, `preview_click`, `preview_fill`)
- **For external sites or complex multi-page flows:** Load Playwright via `ToolSearch` (query: `+playwright`)
- **For authenticated sessions or existing Chrome tabs:** Load Chrome DevTools via `ToolSearch` (query: `+chrome use_browser`)
- Always take screenshots after interactions to verify results

### Research / Documentation
**Trigger:** User asks about a library, API, or needs current information
**Route:**
1. Load Context7 via `ToolSearch` (query: `+context7`) for library/framework docs
2. Use `WebSearch` for current information, recent changes, or general questions
3. Use `WebFetch` to pull and analyze specific URLs
4. Dispatch `Explore` agent for deep codebase exploration
5. Invoke `episodic-memory:search-conversations` to check if this was discussed in a past session

### Planning & Architecture
**Trigger:** User has a complex multi-step task, wants to plan, or asks "how should we..."
**Route:**
1. Invoke `superpowers:brainstorming` first
2. Invoke `superpowers:writing-plans` to create the plan
3. Dispatch `Plan` agent or `feature-dev:code-architect` agent for architecture design
4. Use `superpowers:dispatching-parallel-agents` or `superpowers:subagent-driven-development` for execution

### Writing & Documentation
**Trigger:** User asks to write docs, README, commit messages, PR descriptions, or any prose
**Route:**
1. Invoke `elements-of-style:writing-clearly-and-concisely` for quality prose

### Skill / Plugin Development
**Trigger:** User wants to create, modify, or test skills or plugins
**Route:**
1. Invoke `skill-creator:skill-creator` for creating/improving skills
2. Invoke `superpowers-developing-for-claude-code:developing-claude-code-plugins` for plugin work
3. Invoke `superpowers:writing-skills` for skill-specific guidance

### Scheduled / Automated Tasks
**Trigger:** User wants something to run on a schedule or be automated
**Route:**
1. Load Scheduled Tasks via `ToolSearch` (query: `+scheduled`)
2. Use `create_scheduled_task` for recurring or one-time tasks
3. Invoke `claude-code-setup:claude-automation-recommender` for recommending hooks and automations

### Working with Claude API / SDK
**Trigger:** Code imports `anthropic`, `@anthropic-ai/sdk`, `claude_agent_sdk`, or user asks about Claude API
**Route:**
1. Invoke `claude-developer-platform` skill

---

## Agent Dispatch Guide

Use agents when work can be parallelized or needs deep exploration:

| Agent | When to Use |
|-------|-------------|
| `Explore` | Codebase exploration, finding files/patterns, understanding architecture |
| `Plan` | Architecture planning, design decisions |
| `feature-dev:code-reviewer` | Reviewing code for bugs, security, quality |
| `feature-dev:code-explorer` | Deep analysis of existing features |
| `feature-dev:code-architect` | Designing feature architectures |
| `superpowers:code-reviewer` | Reviewing completed work against plan |
| `episodic-memory:search-conversations` | Searching past conversation history |
| `superpowers-chrome:browser-user` | Browser automation and analysis |

When facing 2+ independent tasks, invoke `superpowers:dispatching-parallel-agents` and launch agents in parallel.

---

## MCP Tool Loading Reference

MCP tools must be loaded via `ToolSearch` before use. Quick reference:

| Need | ToolSearch Query |
|------|-----------------|
| Supabase (database) | `+supabase` |
| Netlify (deploy) | `+netlify` |
| Gmail (email) | `+gmail` |
| Playwright (browser) | `+playwright` |
| Chrome DevTools | `+chrome use_browser` |
| Context7 (docs) | `+context7` |
| Claude Preview | `+preview` |
| Scheduled Tasks | `+scheduled` |
| Jam (bugs) | `jam` |
| Trivago (travel) | `+trivago` |
| MCP Registry | `+mcp-registry` |

---

## Always-On Behaviors

These apply to every interaction regardless of task type:

- **Memory check:** At the start of complex tasks, check episodic memory for relevant past conversations
- **Verification:** Always invoke `superpowers:verification-before-completion` before claiming work is done
- **Preview:** After any UI change, use Claude Preview tools to visually verify
- **Context7:** When working with any library/framework, check Context7 for current docs
- **Brainstorming:** Before any creative or design work, invoke `superpowers:brainstorming`

---

## Project Info

- **Stack:** React + TypeScript + Vite
- **Package manager:** npm
- **Dev server:** `npm run dev` (Vite)
