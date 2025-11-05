'use client'

import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '@/contexts/theme'
import { projects, skills, contact } from '@/data/portfolio'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const { themeName, toggleTheme } = useTheme()
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className="center nav">
            <ul
                style={{ display: showNavList ? 'flex' : undefined }}
                className={styles.nav__list}
            >
                <li className={`${styles.nav__listItem} link link--nav`} >
                    <Link href={"/projects"}>
                        Projects

                    </Link>

                </li>

                <li className={`${styles.nav__listItem} link link--nav`} >
                    <Link href={"/skills"}>
                        Skills

                    </Link>

                </li>
                <li className={`${styles.nav__listItem} link link--nav`} >
                    <Link href={"/contact"}>
                        Contact

                    </Link>

                </li>


            </ul>

            <button
                type="button"
                onClick={toggleTheme}
                className={`btn btn--icon ${styles.nav__theme}`}
                aria-label="toggle theme"
            >
                {themeName === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
                type="button"
                onClick={toggleNavList}
                className={`btn btn--icon ${styles.nav__hamburger}`}
                aria-label="toggle navigation"
            >
                {showNavList ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav >
    )
}

/*
  {projects.length ? (
                    <li className={styles.nav__listItem}>
                        {/* usar Link, componenente especiall en next , se usa en vez de "a",  tambien img ->  <Image/> , leer }


                        <Link
                            href="#projects"
                            onClick={toggleNavList}
                            className="link link--nav"
                        >
                            Projects
                        </Link>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className={styles.nav__listItem}>
                        <a
                            href="#skills"
                            onClick={toggleNavList}
                            className="link link--nav"
                        >
                            Skills
                        </a>
                    </li>
                ) : null}


                {contact.email ? (
                    <li className={styles.nav__listItem}>
                        <a
                            href="#contact"
                            onClick={toggleNavList}
                            className="link link--nav"
                        >
                            Contact
                        </a>
                    </li>
                ) : null}

*/