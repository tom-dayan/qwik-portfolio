import { component$ } from '@builder.io/qwik';
import { LuGithub } from "@qwikest/icons/lucide";
import { LuLinkedin } from "@qwikest/icons/lucide";

// import { Box, Typography, Link } from '@mui/material';
import './styles/Footer.scss';

export const Footer = component$(() => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: 3,
        backgroundColor: '#333',
        color: 'white',
        marginTop: 4,
      }}
      class="footer-container"
    >
      <div class="social-icons" style={{ marginBottom: 2 }}>
        <a href="https://github.com/tom-dayan" target="_blank" rel="noreferrer">
          <LuGithub font-size="large" />
        </a>
        <a href="https://www.linkedin.com/in/tom-dayan/" target="_blank" rel="noreferrer">
          <LuLinkedin font-size="large" />
        </a>
      </div>
      <p class="footer-text">
        &copy; {new Date().getFullYear()} Tom Dayan. All rights reserved.
      </p>
      <p class="footer-text" style={{ marginTop: 1 }}>
        Built with{' '}
        <a
          href="https://qwik.dev/"
          target="_blank"
          rel="noopener noreferrer"
        //   color="inherit"
        //   underline="hover"
        >
          Qwik
        </a>
        .
      </p>
    </footer>
  );
});
