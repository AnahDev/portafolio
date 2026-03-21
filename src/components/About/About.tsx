'use client'

import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { getAbout } from '@/data/portfolio'

import styles from './About.module.css'

const About = () => {
    const { language } = useLanguage();
    const aboutData = getAbout(language);

    return (
        <div className={`${styles.about} center`}>

            {/* ==============================================
                BLOQUE 1: HEADER (Flexbox L/R)
                ============================================== */}
            <div className={styles.about__header}>

                {/* --- LADO IZQUIERDO: Imagen --- */}
                <div className={styles.about__pictureContainer}>
                    {aboutData.picture && (
                        <Image
                            src={aboutData.picture}
                            alt={aboutData.name || 'Profile picture'}
                            width={220}
                            height={220}
                            className={styles.about__picture}
                            priority
                        />
                    )}


                    {/* ==============================================
                BLOQUE 2: CONTACTO (Abajo y Centrado)
                ============================================== */}
                    <div className={`${styles.about__contact} center`}>
                        {aboutData.resume && (
                            <a href={aboutData.resume}
                                target="_blank"
                                rel="noopener noreferrer">
                                <span className='btn btn--outline'
                                >Resume</span>
                            </a>
                        )}
                        {aboutData.social && (
                            <>
                                {aboutData.social.github && (
                                    <a href={aboutData.social.github}
                                        aria-label='github'
                                        className='link link--icon'
                                        target='_blank'
                                        rel="noopener noreferrer">
                                        <Github />
                                    </a>
                                )}
                                {aboutData.social.linkedin && (
                                    <a href={aboutData.social.linkedin}
                                        aria-label='linkedin'
                                        className='link link--icon'
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <Linkedin />
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                </div> {/* El contenedor de la imagen se cierra aquí */}



                {/* --- LADO DERECHO: Textos --- */}
                <div className={styles.about__intro}>
                    {aboutData.name && (
                        <h1>
                            {aboutData.text} <span className={styles.about__name}>{aboutData.name}.</span>
                        </h1>
                    )}
                    {aboutData.role && <h2 className={styles.about__role}>{aboutData.role}.</h2>}
                    <p className={styles.about__desc}>{aboutData.description}</p>
                </div>

            </div>

        </div>
    )
}

export default About