import styled from "styled-components";

export const HeaderStyles = styled.header`
  width: 100%;
  height: fit-content;
  padding: 1.2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
  background: white;

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  li {
    cursor: pointer;
    font-size: 0.89rem;
    font-weight: 600;
    list-style: none;
    
    a {
      color: #0D0D0D;
      text-decoration: none;
    }
  }
`;
