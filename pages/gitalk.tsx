import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import dynamic from "next/dynamic";
import { config } from '../ghoauth';
import { NextPage } from 'next';
import Head from 'next/head';
const Gita: NextPage=()=>{
    const GitalkComponent=dynamic(
        import('gitalk/dist/gitalk-component'),
        {ssr: false}
      );
      const admi: string[]=['Bdbmzwsc'];
    return <div>
            <Head>
                <title>Gitalk Test Page</title>
            </Head>


            <GitalkComponent 
            options={{
            clientID: config.clientId,
             clientSecret:  config.clientsecret,
             repo: 'bmsc_site',      // The repository of store comments,
             owner: 'Bdbmzwsc',
             admin: admi,
             id: 'Chat',
             title: 'Chat',   // Ensure uniqueness and length less than 50
             distractionFreeMode: false,  // Facebook-like distraction free mode
             label: 'Gitalk',
             proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
            }}
             />
    </div>
}
export default Gita;