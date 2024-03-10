import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-icons">
      <a href="https://github.com/Mike5719" target='_blank'> <FaGithub /> </a>
      <a href="https://linkedin.com" target='_blank'> <FaLinkedin /> </a>
    </footer>
  );
};