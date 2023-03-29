import axios from "axios";

import { collection, addDoc,getDocs } from "firebase/firestore";

import { database } from "../firebaseConfig";

const BASE_URL = "http://0.0.0.0:8000/users";

interface Response {
  title: string;
  description: string;
  image: string;
}

export const postData = async (info:Response) => {
    const { data } = await axios.post(BASE_URL, info);
   await addDoc(collection(database, "imageUrl"), {imageUrl: info.image })
    return data;
  };


  export const getData = async () => {
    const {data} = await axios.get(BASE_URL)
    console.log(data)
    return ( data  )
  }

export const getImage = async () => {
  let image = await getDocs(collection(database, "imageUrl"));
  console.log(image)
  return (image)
}