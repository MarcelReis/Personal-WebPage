import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background-color: var(--base-high);
  display: flex;
  height: 48px;
  justify-content: center;
  border-top: 1px var(--base-low) solid;

  a {
    --base: var(--contrast);
    --base-low: var(--contrast-low);
  }
`;

export const Button = styled.a`
  width: 47px;
  height: 47px;
  padding: 8px;
  margin: 0 16px;
  color: var(--base);
  font-size: 0px;

  transition: color 0.2s ease, transform 0.2s ease;

  :hover {
    color: var(--base-low);
    transform: scale(1.05) translateY(-8px);
  }
`;
