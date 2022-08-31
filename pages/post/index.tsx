import { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Face from '../../compoents/Face';
import { getStaticPosts } from '../../lib/posts';
import Postcard from '../../compoents/Postcard';
import Button from '../../compoents/Button';
import Link from 'next/link';
//import { Post } from '../../lib/post';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
const Post: NextPage=( {allpostsdata}: any )=>{
    return (
        <div className={styles.main}>
            {allpostsdata.map(({id,title,date,des,backimg}: any)=> {
                return(
                    


                                
                
            
            
            <main className={styles.grid}>
                <Postcard id={id} title={title} date={date} des={des} backimg={backimg}/>
            </main>
            )})}
        </div>
    )
}
export const getStaticProps: GetStaticProps=()=>{
    const allpostsdata=getStaticPosts();
    return {
        props: {
            allpostsdata
        }
    }
}
export default Post