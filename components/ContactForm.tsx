import React, { FormEvent } from 'react';

const ContactForm: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Thank you for your interest! This is a demo form.');
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px',
        background: 'transparent',
        border: '1px solid #111',
        fontFamily: 'inherit',
        fontSize: '16px',
        color: '#111',
        marginBottom: '20px',
        outline: 'none'
    };

    const labelStyle: React.CSSProperties = {
        display: 'block',
        marginBottom: '8px',
        fontFamily: 'Dottix, monospace',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    return (
        <section id="contact-form" style={{ padding: '80px 40px', borderTop: '1px solid #111' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 className="heading-font" style={{ fontSize: '40px', marginBottom: '40px', textAlign: 'center' }}>
                    START YOUR CONVERGENCE
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
                    <div>
                        <label style={labelStyle}>Name *</label>
                        <input type="text" required style={inputStyle} placeholder="ENTER YOUR NAME" />
                    </div>

                    <div>
                        <label style={labelStyle}>Email *</label>
                        <input type="email" required style={inputStyle} placeholder="ENTER YOUR EMAIL" />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={labelStyle}>Business Website</label>
                            <input type="url" style={inputStyle} placeholder="HTTPS://" />
                        </div>
                        <div>
                            <label style={labelStyle}>LinkedIn Page</label>
                            <input type="url" style={inputStyle} placeholder="HTTPS://" />
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Brief Description of Business</label>
                        <textarea
                            rows={5}
                            style={{ ...inputStyle, resize: 'vertical' }}
                            placeholder="TELL US ABOUT YOUR OPERATIONS..."
                        ></textarea>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button
                            type="submit"
                            style={{
                                background: '#111',
                                color: '#fff',
                                padding: '16px 40px',
                                border: 'none',
                                fontFamily: 'Dottix, monospace',
                                fontSize: '18px',
                                cursor: 'pointer',
                                textTransform: 'uppercase'
                            }}
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
