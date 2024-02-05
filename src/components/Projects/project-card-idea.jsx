import nextLogo from "../../assets/next-js-seeklogo.svg";
import { ProjectCardIdeaContainer } from "./style";

export default function ProjectCardIdea() {
  const ideas = [
    {
      img: (
        <img
          src={nextLogo}
          alt="Logo do nextjs"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      title: "Projeto secreto",
      date: "04/02/2024",
      repositoryLink: "",
    },
  ];

  return (
    <ProjectCardIdeaContainer>
      <div id="project-card-box">
        <h4>💡 Algumas idéias...</h4>
        <div>
          {ideas.map((idea) => {
            return (
              <a
                key={idea.title}
                href={idea.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  key={idea.title}
                >
                  <span>{idea.img}</span>
                  <h5>
                    {idea.title}
                  </h5>
                  <time className="dark:text-black">{idea.date}</time>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </ProjectCardIdeaContainer>
  );
}
