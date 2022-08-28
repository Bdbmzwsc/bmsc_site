import styles from './Postcard.module.css'
import Link from 'next/link'
export default function Postcard({ backimg,title,des,date,id }: any) {
    return (
        <div>
            <Link href={`/post/${id}`}>
            <div className={styles.postcard}>
                <div className={styles.divf}>
                <img alt='backimg' src={backimg}/>
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <small>{date}</small>
                    <p>{des}</p>
                </div>
                
            </div>
            </Link>
        </div>
    )
}