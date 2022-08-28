import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkHtml from 'remark-html';
import { remark } from 'remark';
import hljs from 'highlight.js';

const postdic=path.join(process.cwd(),'posts');

export interface Post{
    title: string,
    date: string,
    des: string,
    backimg: string
};

export function getStaticPosts(){
    const filename: string[]=fs.readdirSync(postdic);
    const allpostsdata=filename.map((fn)=>{
        const id=fn.replace(/\.md$/,'');
        console.log(`${id}`);
        const fullpath=path.join(postdic,fn);
        const content=fs.readFileSync(fullpath);
        const matterres=matter(content);
        return {
            id,
            ...(matterres.data as Post)
        }

    });
    allpostsdata.sort((a,b) =>{
        if(a.date>b.date) return -1;
        else if(a.date<b.date) return 1;
        else return 0;

    })
    return allpostsdata;
};

export function getAllPostsId(){
    const filename: string[]=fs.readdirSync(postdic);
    return filename.map((fn)=>{
    //    const t=fn.replace(/\.md$/,'');
      //  console.log(t);
        return{
            params:{
                id: fn.replace(/\.md$/,'')
            }
        }
    })
}

export async function getPostData(id: string){
    const fullpath: string=path.join(postdic,id+'.md');
    const content=fs.readFileSync(fullpath);
    const matterres=matter(content);
    const processcontent=await remark()
    .use(remarkHtml)
    .process(matterres.content)
    let html=processcontent.toString();
   // console.log(html);
   //  html=hljs.highlightAuto(html).value;
    // console.log(html);
    return{
        id,
        html,
        ...(matterres.data as Post)
    }

}