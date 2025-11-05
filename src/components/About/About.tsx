import { Github, Linkedin } from 'lucide-react'
import { about } from '@/data/portfolio'
import styles from './About.module.css'

const About = () => {
    const { name, role, description, resume, social, picture } = about

    return (
        <div className={`${styles.about} center`}>
            <div className={styles.about__header}>
                {picture && (
                    <img
                        src={
                            picture.startsWith('http')
                                ? picture
                                : `/images/${picture}`
                        }
                        alt={name || 'Profile picture'}
                        className={styles.about__picture}
                    />
                )}
                <div className={styles.about__intro}>
                    {name && (
                        <h1>
                            Hi, I am <span className={styles.about__name}>{name}.</span>
                        </h1>
                    )}
                    {role && <h2 className={styles.about__role}>A {role}.</h2>}
                    <p className={styles.about__desc}>{description && description}</p>
                </div>
            </div>
            <div className={`${styles.about__contact} center`}>
                {resume && (
                    <a href={resume}>
                        <span className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}
                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <Github />
                            </a>
                        )}
                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <Linkedin />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About