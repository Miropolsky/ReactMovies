import styles from './Header.module.scss'

export default function Header() {
    return (
        <div>
            <nav className={`green darken-1 ${styles.nav}`}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">React movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Repo</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}