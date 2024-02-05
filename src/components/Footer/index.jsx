import { FooterContainer, SeparatorLine } from "./style";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <SeparatorLine />
      <FooterContainer>
        <div>
          <p>
            Feito com 💖 por{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Fulano de tal
            </a>
          </p>
          <p>
            © {currentYear}
          </p>
        </div>
      </FooterContainer>
    </>
  );
}
