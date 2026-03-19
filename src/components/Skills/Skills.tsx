'use client'

import { skills } from '@/data/portfolio'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Skills.module.css'

// 1. IMPORTAMOS LOS ICONOS EXACTOS DE TUS TECNOLOGÍAS
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si';

// 2. CREAMOS EL MAPA (Afuera del componente para mejor rendimiento)
// Las claves ('HTML', etc.) deben coincidir EXACTAMENTE con las de tu portfolio.ts
const skillIcons: { [key: string]: JSX.Element } = {
    'HTML': <FaHtml5 size={22} color="#E34F26" />,
    'CSS': <FaCss3Alt size={22} color="#1572B6" />,
    'TypeScript': <SiTypescript size={20} color="#3178C6" />,
    'React': <FaReact size={22} color="#61DAFB" />,
    'Laravel': <FaLaravel size={22} color="#FF2D20" />,
    'NextJs': <SiNextdotjs size={22} />, // Next.js no le pongo color para que adapte al tema oscuro/claro
    'Python': <FaPython size={22} color="#3776AB" />,
    'PostgreSQL': <SiPostgresql size={22} color="#336791" />,
    'Git': <FaGitAlt size={22} color="#F05032" />,
};

export default function Skills() {
    const { t } = useLanguage()

    if (!skills.length) return null

    return (
        <section className="section skills" id="skills">
            {/* Tu título traducido dinámicamente */}
            <h2 className="section__title">{t('skills', 'navbar')}</h2>

            <ul className={styles.skills__list}>
                {skills.map((skill, index) => {
                    // 3. BUSCAMOS EL ICONO CORRESPONDIENTE AL SKILL ACTUAL
                    const Icon = skillIcons[skill];

                    return (
                        <li
                            key={`${skill}-${index}`}
                            className={`${styles.skills_list_item} btn btn--plain`}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px' }} // CSS en línea para alinear icono y texto
                        >
                            {/* Si el icono existe en nuestro mapa, lo renderizamos */}
                            {Icon && <span>{Icon}</span>}

                            {/* Mantenemos el texto para mejor UX/SEO */}
                            <span>{skill}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}