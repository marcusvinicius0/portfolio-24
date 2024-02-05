import styled from "styled-components";

export const SeparatorLine = styled.hr`
  margin-top: 5rem;
  border: 1px solid rgba(209, 213, 219, 0.2);
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 0.5rem 0 2rem 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    p {
      font-weight: 400;
      font-size: small;
      letter-spacing: 0.025em;
      text-align: center;
      width: fit-content;
      color: #3F3F46;

      a {
        color: #5A85FF;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
`;
