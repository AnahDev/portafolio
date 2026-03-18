'use client'

import { skills } from '@/data/portfolio'
import { useLanguage } from '@/context/LanguageContext'
import { getProjects } from '@/data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
    const { t, language, toggleLanguage } = useLanguage()

    if (!skills.length) return null

    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">{t('skills', 'navbar')}</h2>
            <ul className={styles.skills__list}>
                {skills.map((skill, index) => (
                    <li key={`${skill}-${index}`} className={`${styles.skills__list_item} btn btn--plain`}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}   