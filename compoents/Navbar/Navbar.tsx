import styles from './Navbar.module.css';
import React from 'react';
interface indnaConfig {
    ind: string,
    nam: string
}
export default function Navbar({title,config}: any){
    const [iscli,Setiscli]=React.useState(false);
    return(
    <div className={styles.Navbar}>
        <button className={styles.navbarto}
        onClick={() => Setiscli(!iscli)}
        >
123
        </button>
        <div className={styles.title}>{title}</div>
        <div className={styles.navbarhi}>
        {config.map((nameindex: indnaConfig)=>{
            return <div className={styles.indexbtn}>
                <a href={nameindex.ind}>{nameindex.nam}</a>
                </div>
        })}
        </div>
        {iscli && (
            <div className={`${styles.navbarmo} ${!iscli && styles.navbarmohi}`}>
                     {config.map((nameindex: indnaConfig)=>{
            return <div className={styles.indexbtn}>
                <a onClick={()=>Setiscli(false)} href={nameindex.ind}>{nameindex.nam}</a>
                </div>
        })}
            </div>
        )

        }
    </div>)
}