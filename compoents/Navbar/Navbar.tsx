import styles from './Navbar.module.css';
interface indnaConfig {
    ind: string,
    nam: string
}
export default function Navbar({title,config}: any){
    return(<div className={styles.Navbar}>
        <div className={styles.title}>{title}</div>
        {config.map((nameindex: indnaConfig)=>{
            return <div className={styles.indexbtn}><a href={nameindex.ind}>{nameindex.nam}</a></div>
        })}
    </div>)
}