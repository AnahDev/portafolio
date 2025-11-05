'use client'

import { header } from '@/data/portfolio'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.css'

export default function Header() {
    const { homepage, title } = header

    return (
        <header className={`${styles.header} center`}>
            <h3>
                {homepage ? (
                    <a href={homepage} className="link">
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar />
        </header>
    )
}