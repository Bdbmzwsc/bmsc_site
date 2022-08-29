import styles from './Button.module.css';
export default function Button({content}: any){
    return <div>
        <button className={styles.button}>{content}</button>
    </div>
}