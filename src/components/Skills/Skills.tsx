'use client'

import { skills } from '@/data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
    if (!skills.length) return null

    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">Skills</h2>
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