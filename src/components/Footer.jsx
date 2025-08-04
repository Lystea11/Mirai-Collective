import React from 'react';
import { X, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="social-icons">
        <a href="#" aria-label="Twitter">
          <X size={20} />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#" aria-label="Facebook">
          <Facebook size={20} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mirai Collective. All Rights Reserved.</p>
    </footer>
  );
}