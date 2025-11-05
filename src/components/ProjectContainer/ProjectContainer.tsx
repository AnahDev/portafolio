'use client'

import { Github, ExternalLink } from 'lucide-react'
import { Project } from '@/types/portfolio.types'
import styles from './ProjectContainer.module.css'

interface ProjectContainerProps {
    project: Project
}

export default function ProjectContainer({ project }: ProjectContainerProps) {
    return (
        <div className={styles.project}>
            {project.image && (
                <img
                    src={
                        project.image.startsWith('http')
                            ? project.image
                            : `/images/${project.image}`
                    }
                    alt={`${project.name} screenshot`}
                    style={{ width: '100%', objectFit: 'cover' }}
                />
            )}

            <h3>{project.name}</h3>

            <p className={styles.project__description}>{project.description}</p>

            {project.stack && (
                <ul className={styles.project__stack}>
                    {project.stack.map((item, index) => (
                        <li key={`${project.name}-${item}-${index}`} className={styles.project__stack_item}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {project.sourceCode && (

                <a href={project.sourceCode}
                    aria-label="source code"
                    className="link link--icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github size={20} />
                </a>
            )}

            {project.livePreview && (

                <a href={project.livePreview}
                    aria-label="live preview"
                    className="link link--icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink size={20} />
                </a>
            )
            }

        </div >
    )
}