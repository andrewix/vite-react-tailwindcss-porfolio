import React from 'react';
import { Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "COVID 19 Data Exploration",
      description: "In this project, we utilize SQL Server to analyze worldwide COVID-19 data",
      image: "/Covid-19.png",
      technologies: ["Joins", "CTEs", "Temporary Tables", "Window Functions", "Aggregate Functions", "Creating Views"],
      links: {
        github: "https://github.com/drewIscoding/DataAnalystProjects/blob/main/Amazon%20Webscrapper%20Project/AmazonWebscrapper.ipynb"
      }
    },
    {
      title: "Movie Correlation",
      description: "In this project, we examine the factors that influence the gross revenue of films.",
      image: "/Movies.jpg",
      technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib"],
      links: {
        github: "https://github.com/drewIscoding/DataAnalystProjects/blob/main/Covid%2019%20-%20Data%20Exploration%20Project/COVID-%2019%20Data%20Exploration.sql"
      }
    },
    {
      title: "Amazon Web Scraper",
      description: "We are collecting pricing data for various products from Amazon as part of this project.",
      image: "/Amazon.jpg",
      technologies: ["Python", "BeautifulSoup", "requests", "time", "datetime", "smtplib"],
      links: {
        github: "https://github.com/drewIscoding/DataAnalystProjects/blob/main/Movies%20Correlation%20Project/Movie%20Correlation%20Project.ipynb"
      }
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center text-gray-800">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg border transition-transform duration-200 hover:scale-105"
              style={{ borderColor: '#007BFF' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-blue-500 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 mt-auto">
                  <a
                    href={project.links.github}
                    className="flex items-center justify-center px-4 py-2 rounded-full border-2 transition-all duration-200 border-blue-500 text-blue-500"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
