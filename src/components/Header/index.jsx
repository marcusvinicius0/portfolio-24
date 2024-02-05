import { HeaderStyles } from "./style";

export default function Header() {
  return (
    <HeaderStyles>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#inicio">Projetos</a>
          </li>
          <li>
            <a href="#links">Links</a>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}
