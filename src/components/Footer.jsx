import React from 'react';
import { X, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms & Conditions</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-icons">
        <a href="#twitter" aria-label="Twitter">
          <X size={20} />
        </a>
        <a href="#linkedin" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="#facebook" aria-label="Facebook">
          <Facebook size={20} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Mirai Collective. All Rights Reserved.</p>
    </footer>
  );
}