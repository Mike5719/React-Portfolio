import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="profile-footer">
      <a href="https://github.com/Mike5719" target='_blank'> <FaGithub /> </a>
      <a href="https://linkedin.com" target='_blank'> <FaLinkedin /> </a>
      <a href="https://twitter.com" target='_blank'> <FaTwitter /> </a>
    </footer>
  );
};