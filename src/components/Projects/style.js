import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: fit-content;

  h3 {
    font-weight: 600;
    color: #3F3F46;
  }

  #project-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 0.375rem;
    max-width: 28.5rem;
    border: 1px solid #E5E7EB;
    border-radius: 0.5rem;

    #image-span {
      height: 208px;

      .react-loading-skeleton {
        height: 100%;
      }

      img {
        width: 100%;
      }
    }

    h4 {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    #keyword-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      div {
        background-color: #D6E4FF;
        color: #5A85FF;
        border-radius: 999px;
        padding: 0.25rem 0.375rem 0.25rem 0.375rem;
        font-size: small;
        font-weight: 600;
      }

      a svg {
        color: #5A85FF;
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    p {
      font-size: small;
      line-height: 1.5rem;
    }
  }
`;

export const ProjectCardIdeaContainer = styled.div`
  #project-card-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;

    h4 {
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
          opacity: 0.8;
        }

        div {
          border: 1px solid #E5E7EB;
          width: 11rem;
          border-radius: 8px;
          padding: .25rem;
          color: #3F3F46;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          h5 {
            font-weight: 600;
            font-size: small;
          }
        }
      }

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: flex-start;
  }
`;
