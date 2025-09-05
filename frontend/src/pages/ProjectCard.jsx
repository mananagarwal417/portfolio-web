import React from "react";

function ProjectCard(props) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 space-y-4 w-1/3 hover:scale-105 transition-transform">
      <div className="space-y-4 text-white text-center flex flex-col">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            <code>{props.title}</code>
          </h2>
          <p className="text-lg leading-relaxed">
            <code>{props.description}</code>
          </p>
          <p className="flex flex-wrap justify-center gap-2">
            {props.tech.map((element) => (
              <span
                key={element}
                className="inline-block border border-gray-700 text-xs px-2 py-1 rounded-md"
              >
                <code>{element}</code>
              </span>
            ))}
          </p>
        </div>
        <div>
          <a
            href={props.link}
            target="_blank"
            className="inline-block  bg-cyan-500  text-black px-6 py-3 rounded-lg font-mono font-bold 
          hover:scale-105 transition-transform hover:bg-cyan-400"
          >
            <code>View Project</code>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
