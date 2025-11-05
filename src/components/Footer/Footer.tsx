import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/rjshkhr/cleanfolio"
                className="link footer__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <strong>2025</strong>
            </a>
        </footer >
    )
}