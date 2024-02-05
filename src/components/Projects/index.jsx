import devNationApresGIF from "../../assets/previewsocialdev.gif";
import restaurantSystApresGIF from "../../assets/sistemas-pizzaria.gif";
import nextBlogApresGIF from "../../assets/nextblogapresentation.gif";

import { PlusCircle } from "lucide-react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ProjectContainer } from "./style";

export default function ProjectCard() {
  const my_projects = [
    {
      img: (
        <img
          src={devNationApresGIF}
          alt="Projeto 1 apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "Projeto 1",
      keyWords: [
        {
          name: "ReactJS",
        },
        {
          name: "Javascript",
        },
        {
          name: "Firebase",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis quaerat, illo atque, quas aspernatur eveniet earum totam obcaecati perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "",
    },
    {
      img: (
        <img
          src={restaurantSystApresGIF}
          alt="Projeto 2 apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "Projeto 2",
      keyWords: [
        {
          name: "Next12",
        },
        {
          name: "Typescript",
        },
        {
          name: "Node",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis quaerat, illo atque, quas aspernatur eveniet earum totam obcaecati perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis quaerat, illo atque, quas aspernatur eveniet earum totam obcaecati perferendis.",
      link: "",
    },
    {
      img: (
        <img
          src={nextBlogApresGIF}
          alt="Projeto 3 apresentação"
          className="object-contain rounded-lg shadow-lg"
        />
      ),
      title: "Projeto 3",
      keyWords: [
        {
          name: "Next13",
        },
        {
          name: "Javascript",
        },
        {
          name: "Tailwind",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum pariatur omnis a dignissimos velit assumenda atque quasi! Corporis laboriosam, reiciendis quaerat, illo atque, quas aspernatur eveniet earum totam.",
      link: "",
    },
  ];

  return (
    <ProjectContainer>
      <h3>✨ Melhores projetos</h3>

      {my_projects.map((project) => {
        return (
          <div id="project-box" key={project.title}>
            <span id="image-span">
              {!project.img ? <Skeleton /> : project.img}
            </span>
            <h4>{project.title}</h4>
            <div id="keyword-container">
              {project.keyWords.map((keyword) => {
                return (
                  <div key={keyword.name}>
                    <p>{keyword.name}</p>
                  </div>
                );
              })}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ver repositório de ${project.title}`}
              >
                <PlusCircle />
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        );
      })}
    </ProjectContainer>
  );
}
