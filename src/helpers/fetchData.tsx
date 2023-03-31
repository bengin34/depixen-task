import axios from "axios";

import { collection, addDoc,getDocs, setDoc, doc } from "firebase/firestore";

import { database } from "./firebaseConfig";

const BASE_URL = "http://0.0.0.0:8000/users";

interface Response {
  title: string;
  description: string;
  imageurl: string;
}

export const postData = async (info:Response) => {
    const { data } = await axios.post(BASE_URL, info);
   await setDoc(doc(database, "imageUrl","images"), {imageUrl: info.imageurl })
   console.log(info.imageurl)
    return data;
  };


  export const getData = async () => {
    const {data} = await axios.get(BASE_URL)
    console.log(data)
    const {title, description} = data[data.length - 1]
    return ( {title, description}  )
  }

export const getImage = async () => {
  let image = await getDocs(collection(database, "imageUrl"));
  console.log(image)
  return (image)
}


