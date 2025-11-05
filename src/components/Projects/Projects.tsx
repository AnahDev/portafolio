'use client'

import { projects } from '@/data/portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import styles from './Projects.module.css'

export default function Projects() {
    if (!projects.length) return null

    return (
        <section id="projects" className="section projects">
            <h2 className="section__title">Projects</h2>
            <div className={styles.projects__grid}>
                {projects.map((project, index) => (
                    <ProjectContainer key={`${project.name}-${index}`} project={project} />
                ))}
            </div>
        </section>
    )
}