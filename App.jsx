import React, { StrictMode } from "react";
import { render } from "react-dom";
import ecsstatic from "ecsstatic";

const styles = ecsstatic.css`
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    overflow: hidden;
    background-color: #000;
  }
  .container-loader {
    width: 300px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: perspective(500px) rotateX(60deg);
  }
  @media (max-width: 1111px) {
    .container-loader {
      zoom: 0.7;
    }
  }
  .aro {
    position: absolute;
    inset: calc(var(--s) * 10px);
    box-shadow: inset 0 0 80px #0ff8;
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
    animation: up_and_down 3s infinite ease-in-out both;
  }
  .aro:nth-child(1) { animation-delay: calc(0 * -0.1s); }
  .aro:nth-child(2) { animation-delay: calc(1 * -0.1s); }
  .aro:nth-child(3) { animation-delay: calc(2 * -0.1s); }
  .aro:nth-child(4) { animation-delay: calc(3 * -0.1s); }
  .aro:nth-child(5) { animation-delay: calc(4 * -0.1s); }
  .aro:nth-child(6) { animation-delay: calc(5 * -0.1s); }
  .aro:nth-child(7) { animation-delay: calc(6 * -0.1s); }
  .aro:nth-child(8) { animation-delay: calc(7 * -0.1s); }
  .aro:nth-child(9) { animation-delay: calc(8 * -0.1s); }
  .aro:nth-child(10) { animation-delay: calc(9 * -0.1s); }
  .aro:nth-child(11) { animation-delay: calc(10 * -0.1s); }
  .aro:nth-child(12) { animation-delay: calc(11 * -0.1s); }
  .aro:nth-child(13) { animation-delay: calc(12 * -0.1s); }
  .aro:nth-child(14) { animation-delay: calc(13 * -0.1s); }
  .aro:nth-child(15) { animation-delay: calc(14 * -0.1s); }

  @keyframes up_and_down {
    0%, 100% {
      transform: translateZ(-100px) rotate(0deg);
    }
    50% {
      transform: translateZ(100px) rotate(90deg);
    }
  }
`;

function App() {
  return (
    <aside className={styles["container-loader"]}>
      {[...Array(15)].map((_, i) => (
        <div key={i} className={styles.aro} style={{ "--s": i }} />
      ))}
    </aside>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

export default App;
