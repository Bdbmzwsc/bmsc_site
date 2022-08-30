import styles from './Navbar.module.css';
export default function Navbar({title}: any){
    return(<div className={styles.Navbar}>
        <div className={styles.title}>{title}</div>
    </div>)
}