// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var ms="";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { name,msgn }=req.query;
    ms=ms+name+": "+msgn+"\n";
    if(ms.length>100) {ms="";res.end("string>100 clear all string");}
  res.end(ms)
}
