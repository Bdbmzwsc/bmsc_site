import { getAllPostsId,getPostData,Post } from "../../lib/posts";
import { NextPage } from "next";
import { GetStaticPaths,GetStaticProps } from "next";
import styles from '../../styles/Post.module.css';
import 'highlight.js/styles/github-dark.css';
import hljs from "highlight.js";
import { useEffect } from "react";
import Head from "next/head";
//import 'gitalk/dist/gitalk.css'
//import Gitalk from 'gitalk'
//import dynamic from "next/dynamic";
//import { config } from '../../config/ghoauth';

const PostPage: NextPage=({postData}: any) =>{
    useEffect(()=>{hljs.highlightAll()})
 /*   const GitalkComponent=dynamic(
        import('gitalk/dist/gitalk-component'),
        {ssr: false}
    );*/
    const admi: string[]=['Bdbmzwsc'];
    return( 
        
        <div>

            
            <Head>
                <title>{postData.title}</title>

            </Head>
            <img alt="backimg" src={postData.backimg} className={styles.backimg}/>
    <div className={styles.container}>
         
            <div className={styles.main}>
           
                <div className={styles.des}>
               
                <h1 className={styles.title}>{postData.title}
                </h1>
                <div className={styles.date}>{postData.date}</div>
                </div>
                <div className={styles.des}>
                
                <div className={styles.md} dangerouslySetInnerHTML={{__html: postData.html}}/>

                </div>
                </div>
    </div></div>)
}
export default PostPage
export const getStaticProps: GetStaticProps=async ({params})=>{
    const postData=await getPostData(params?.id as string);
    return{
        props: {
            postData
        }
    }
}

export const getStaticPaths: GetStaticPaths=async()=>{
    const paths=getAllPostsId();
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}