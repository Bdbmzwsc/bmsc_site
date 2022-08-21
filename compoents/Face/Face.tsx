import { Avatar } from "@mui/material"
import config from "../../config"
import styles from '../../styles/Home.module.css'

export default function Face(){
    return (
        <div className={styles.container}>
            <Avatar alt="bmsc" src={config.avatar} sx={{marginLeft: '23%',width: '50%', height: '50%'}}/>
            <h1 className={styles.title}>{config.name}</h1>
            <p className={styles.description}>{config.des}</p>
        </div>
    )
};