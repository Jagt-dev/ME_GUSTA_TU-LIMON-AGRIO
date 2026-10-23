import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <h1
                style={{
                    color: '#d6e2f3',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontFamily: 'sans-serif, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    margin: '2rem 0 0 0',
                    textShadow: '0 2px 4px rgba(30, 58, 95, 0.2)',
                    textAlign: 'center',
                }}
            >
                Citas TI para TI
            </h1>
        </header>
    );
}

export default Header;
