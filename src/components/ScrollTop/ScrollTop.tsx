'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './ScrollTop.module.css'

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return isVisible ? (
        <div className={styles.scroll_top}>
            <a href="#top" aria-label="scroll to top">
                <ArrowUp size={32} />
            </a>
        </div>
    ) : null
}