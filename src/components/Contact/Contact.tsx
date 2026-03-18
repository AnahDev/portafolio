'use client'

import { contact } from '@/data/portfolio'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Contact.module.css'

export const Contact = () => {
    const { t, language, toggleLanguage } = useLanguage()

    if (!contact.email) return null

    return (
        <section
            className={`section center ${styles.contact}`}
            id="contact"
        >
            <h2 className="section__title">{t('contact', 'navbar')}</h2>
            <a href={`mailto:${contact.email}`}>
                <span className="btn btn--outline">
                    Email me
                </span>
            </a>
        </section>
    )
}