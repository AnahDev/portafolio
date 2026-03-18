'use client'

import { Github, Linkedin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { getAbout } from '@/data/portfolio'
// import { about } from '@/data/portfolio'

import styles from './About.module.css'

const About = () => {
    // const { name, role, description, resume, social, picture } = about

    const { language } = useLanguage();
    const aboutData = getAbout(language);



    return (
        <div className={`${styles.about} center`}>
            <div className={styles.about__header}>
                {aboutData.picture && (
                    <img
                        src={
                            aboutData.picture.startsWith('http')
                                ? aboutData.picture
                                : `/images/${aboutData.picture}`
                        }
                        alt={aboutData.name || 'Profile picture'}
                        className={styles.about__picture}
                    />
                )}
                <div className={styles.about__intro}>
                    {aboutData.name && (
                        <h1>
                            {aboutData.text} <span className={styles.about__name}>{aboutData.name}.</span>
                        </h1>
                    )}
                    {aboutData.role && <h2 className={styles.about__role}>{aboutData.role}.</h2>}
                    <p className={styles.about__desc}>{aboutData.description && aboutData.description}</p>
                </div>
            </div>
            <div className={`${styles.about__contact} center`}>
                {aboutData.resume && (
                    <a href={aboutData.resume}>
                        <span className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}
                {aboutData.social && (
                    <>
                        {aboutData.social.github && (
                            <a
                                href={aboutData.social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <Github />
                            </a>
                        )}
                        {aboutData.social.linkedin && (
                            <a
                                href={aboutData.social.linkedin}
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