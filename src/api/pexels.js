import axios from 'axios';
import { pexelsKey } from './key';

const config = {
        headers: {'Authorization':  pexelsKey}
   };

export async function getImages(url){
    const result = await axios.get(url,
    config
    );
    return result.data;
}