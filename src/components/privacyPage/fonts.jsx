import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

      /* 'Euclid Circular B', sans-serif */
      @font-face {
        font-family: 'Euclid Circular B', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: @import url('https://fonts.cdnfonts.com/css/euclid-circular-b') format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
);
