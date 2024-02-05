import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
  }
`;

export const HeroSection = styled.section`
  @media (min-width: 1280px) {
    position: sticky;
    top: 7rem;
    height: 250px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: .75rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    max-width: 450px;

    img {
      border-radius: 999px;
      object-fit: contain;
    }

    h1 {
      font-weight: 600;
      color: #3F3F46;
    }

    h5 {
      font-weight: 500;
      letter-spacing: 0.05em;
      background-color: rgba(214, 228, 255, 0.1);
      padding: 0.375rem;
      border-radius: 0.375rem;
      color: #5A85FF;
      text-transform: uppercase;
      font-size: 0.875rem;
    }

    p {
      font-size: 0.875rem;
      text-align: center;
      line-height: 1.5rem;

      @media (min-width: 1280px) {
        text-align: left;
      }
    }

    @media (min-width: 1280px) {
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  @media (min-width: 1280px) {
    padding: 0rem;
  }
`;

export const HomeFooter = styled.footer`
  margin-top: 4rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2 {
      font-weight: 600;
      color: #3F3F46;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a {
        text-decoration: none;

        &:hover {
          opacity: .8;
        }

        #link-box {
          border: 1px solid #E5E7EB;
          width: 11rem;
          border-radius: 8px;
          padding: .25rem;
          color: #3F3F46;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .25rem;

          h4 {
            font-weight: 600;
            font-size: small;
          }
        }
      }

      @media(min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`;