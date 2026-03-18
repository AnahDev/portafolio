'use client'

import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { useLanguage } from '@/context/LanguageContext'
import { getProjects } from '@/data/portfolio'
import styles from './Projects.module.css'
// import { projects } from '../../data/portfolio';

export default function Projects() {
    const { t, language, toggleLanguage } = useLanguage()
    const aboutData = getProjects(language);


    if (!aboutData.length) return null

    return (
        <section id="projects" className="section projects">
            <h2 className="section__title"> {t('projects', 'navbar')}</h2>
            <div className={styles.projects__grid}>
                {aboutData.map((project, index) => (
                    <ProjectContainer key={`${project.name}-${index}`} project={project} />
                ))}
            </div>
        </section>
    )
}