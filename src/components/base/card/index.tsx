import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  border-radius: var(--spacing-1);
  border: 2px solid var(--base-low);
  padding: var(--spacing-3);
  background-color: var(--base-high);

  transition: transform 0.3s ease 0.2s, box-shadow 0.3s ease 0.2s;

  :hover {
    transition-delay: 0s;
    transform: translateY(-4px);
    box-shadow: var(--elevation-1);
  }
`;
