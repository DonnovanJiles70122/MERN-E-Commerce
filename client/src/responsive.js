import { css } from "styled-components";

export const cell = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};
