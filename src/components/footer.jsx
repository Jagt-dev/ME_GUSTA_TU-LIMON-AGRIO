import React from 'react';

const footerStyle = {
  marginTop: '5rem',
  padding: '1rem',
  textAlign: 'center',
}

function Footer() {
  return (
    <footer className="footer" style={footerStyle}>
      <p>&copy; 2026 - Sistema de Citas TI</p>
    </footer>
  );
}

export default Footer;
