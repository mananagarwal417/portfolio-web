import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <div className='min-h-screen bg-black text-white font-mono px-32 pt-28 space-y-10'>
      <section className='px-10 items-center'>
        <h2 className='text-4xl font-bold mb-4'>My Projects</h2>
        <p className='text-lg leading-relaxed mb-8'>Here are some of the projects I've worked on:</p>
        {/* Project cards will go here */}
        <ProjectCard 
          title="Portfolio"
          description="A personal portfolio website."
          tech={['React', 'JavaScript']}
          link="https://example.com/project1"
        />
      </section>
      <section>
      </section>
    </div>
  )
}

export default Project
