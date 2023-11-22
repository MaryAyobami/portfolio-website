import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/blessedwithjoy_" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/MaryAyobami" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/mary-ayobami-8a85141b0/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
