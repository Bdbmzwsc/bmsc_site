import { Avatar } from "@mui/material"
import config from "../../config"
import styles from '../../styles/Home.module.css'
import Facestyles from './Face.module.css'

export default function Face(){
    return (
        <div className={styles.container}>
          {/*  <Avatar alt="bmsc" src={config.avatar} sx={{marginLeft: '23%',width: '50%', height: '50%'}}/>*/} 
            <div className={Facestyles.facediv}>
            <img alt="bmsc" className={Facestyles.face} src={config.avatar} />
            </div>
            <h1 className={styles.title}>{config.name}</h1>
            <p className={styles.description}>{config.des}</p>
        </div>
    )
};