import { HeroContainer, HeroSection, HomeFooter, MainContainer } from "./styles/home-style";

import githubLogo from "./assets/github.svg";
import inLogo from "./assets/linkedin.svg";
import igLogo from "./assets/instagram.svg";

import ProjectCard from "./components/Projects";
import ProjectCardIdea from "./components/Projects/project-card-idea";

function Home() {
  const heroSection = [
    {
      img: (
        <img
          src="https://github.com/marcusvinicius0.png"
          width={80}
          height={80}
          alt="Marcus Vinícius Avatar"
          className="rounded-full object-contain"
        />
      ),
      name: "Fulano de tal",
      role: "Desenvolvedor Frontend",
      about: {
        intro:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis quaerat, illo atque, quas aspernatur eveniet earum totam obcaecati perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur.! ",
        main: "💡 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis.",
        final: "Quer saber mais sobre minha experiência profissional?",
      },
      availableForWork: false,
    },
  ];

  const contactLinks = [
    {
      img: (
        <img
          src={githubLogo}
          width={40}
          height={40}
          alt="Github Logo"
          className="object-contain"
        />
      ),
      name: "Github",
      author: "fulanodetal",
      link: "",
    },
    {
      img: (
        <img
          src={inLogo}
          width={40}
          height={40}
          alt="Linkedin Logo"
          className="object-contain"
        />
      ),
      name: "Linkedin",
      author: "fulanodetal",
      link: "",
    },
    {
      img: (
        <img
          src={igLogo}
          width={40}
          height={40}
          alt="Instagram Logo"
          className="object-contain"
        />
      ),
      name: "Instagram",
      author: "@fulanodetal",
      link: "",
    },
  ];

  return (
    <>
      <MainContainer>
        <HeroSection>
          {heroSection.map((hero) => {
            return (
              <HeroContainer key={hero.name}>
                <div>
                  {hero.img}
                  <h1>{hero.name}</h1>
                  <h5>{hero.role}</h5>
                  <p>{hero.about.intro}</p>
                  <p>{hero.about.main}</p>
                </div>
              </HeroContainer>
            );
          })}
        </HeroSection>

        <section>
          <ProjectCard />
          <article>
            <ProjectCardIdea />
          </article>
        </section>
      </MainContainer>
      <HomeFooter id="links">
        <section>
          <h4>🔗 Links de contato</h4>
          <div>
            {contactLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div id="link-box">
                    <span>{link.img}</span>
                    <h4>{link.name}</h4>
                    <small>{link.author}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </HomeFooter>
    </>
  );
}

export default Home;
