import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <div className="min-h-screen bg-black text-white font-mono px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-16 sm:pt-20 md:pt-28 space-y-10">
      <section className="px-2 sm:px-4 md:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          My Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          Here are some of the projects I've worked on:
        </p>

        {/* Project cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <ProjectCard
            title="Portfolio"
            description="A personal portfolio website."
            tech={['React', 'JavaScript']}
            link="https://example.com/project1"
          />

          {/* Add more ProjectCard components here */}
        </div>
      </section>
    </div>
  )
}

export default Project
