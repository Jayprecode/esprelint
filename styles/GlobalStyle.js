/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import { createGlobalStyle, css } from "styled-components";

const FontToken = css`


/* -------------------------------------------------------------------------- */
/*            Calculation based on a root font-size of 16 pixel               */
/* -------------------------------------------------------------------------- */

/* X-Large devices (large desktops, more than 767px) */
@media (min-width: 767px) {
    --font-xxx-sm: 1rem; /** 16px */
    --font-xx-sm: 1.333rem; /** 21.328px */
    --font-x-sm: 1.777rem; /** 28.43px */
    --font-sm: 2.369rem; /** 37.897px */
	--font-md: 3.157rem; /** 50.517px */
	--font-x-md: 4.209rem; /** 67.339px */
	--font-xx-md: 5.61rem; /** 89.763px */
	--font-lg: 7.478rem; /** 119.654px */
	--font-x-lg: 9.969rem; /** 159.499px */
	--font-xx-lg: 13.288em; /** 212.612px */
}

/* Large devices (desktops, less than 767px) */
@media (max-width: 767px) {
    --font-xxx-sm: 0.75rem; /** 12.003px */
    --font-xx-sm: 1rem; /** 16px */
    --font-x-sm: 1.333rem; /** 21.328px */
    --font-sm: 1.777rem; /** 28.43px */
	--font-md: 2.369rem; /** 37.897px */
	--font-x-md: 3.157rem; /** 50.517px */
	--font-xx-md: 4.209rem; /** 67.339px */
	--font-lg: 5.61rem; /** 89.763px */
	--font-x-lg: 7.478rem; /** 119.654px */
	--font-xx-lg: 9.969rem; /** 159.499px */
}
/* Medium devices (tablets, less than 360px) */
@media (max-width: 360px) {
    --font-xxx-sm: 0.563em; /** 9.005px */
    --font-xx-sm: 0.75rem; /** 12.003px */
    --font-x-sm: 1rem; /** 16px */
    --font-sm: 1.333rem; /** 21.328px */
    --font-md: 1.777rem; /** 28.43px */
    --font-x-md: 2.369rem; /** 37.897px */
    --font-xx-md: 3.157rem; /** 50.517px */
    --font-lg: 4.209rem; /** 67.339px */
    --font-x-lg: 5.61rem; /** 89.763px */
    --font-xx-lg: 7.478rem; /** 119.654px */
}
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --c-black: ;
    --c-black1: ;
    --c-black2: ;
    --c-black3: ;
    --c-black-russian: ;
    --c-white: ;
    --c-blue: ;
    --c-player-blue: ;
    --c-fb-blue: ;
    --c-mild-grey: ;
    --c-mild-grey2: ;
    --c-bunker: ;
    --c-ebony: ;
    --c-deep-red: ;
    --sidebar-width: ;
    --header-height: ;
    ${FontToken}
  }

  @font-face {
    font-family: "NeurialGrotesk-Light";
    src: url(/assets/fonts/NeurialGrotesk-Light.otf) format('opentype');
    font-weight: 300;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(18px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  html,body {
    overflow-x: hidden !important;
    background-color: var(--c-black1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    color: var(--c-white);
    max-width: 100% !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .animated {
    position: relative;
    animation-fill-mode: both;
    animation-duration: 0.8s;
  }
  
  .fadeInUp {
    animation-name: fadeInUp;
  }

  .object-fit-cover {
    object-fit: cover;
  }

  .object-position-center {
    object-position: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .spacer-bottom {
    margin-bottom: 3rem;
  }
  .scrollbar-track-x,
  .scrollbar-thumb-x {
    height: 5px !important;
  }

  .scrollbar-track-y,
  .scrollbar-thumb-y {
    width: 5px !important;
  }

  .scroll-content:hover ~ .scrollbar-track {
    opacity: 1;
  }

  .no-pointer-events {
    pointer-events: none;
  }
`;

const theme = {};

export default GlobalStyle;
export { theme };
