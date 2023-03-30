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



// import axios from "axios";
// import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
// import { database } from "../firebaseConfig";

// const BASE_URL = "http://0.0.0.0:8000/users";

// interface Response {
//   title: string;
//   description: string;
//   image: string;
// }

// export const postData = async (info:Response) => {
//   const { data } = await axios.post(BASE_URL, info);
//   await addDoc(collection(database, "images"), { imageUrl: info.image });
//   return data;
// };

// export const getData = async () => {
//   const { data } = await axios.get(BASE_URL);
//   console.log(data);
//   return data;
// };

// export const getImage = async () => {
//   const imageQuery = query(collection(database, "images"), orderBy("createdAt", "desc"));
//   const querySnapshot = await getDocs(imageQuery);
//   if (querySnapshot.docs.length > 0) {
//     const lastImage = querySnapshot.docs[0].data().imageUrl;
//     console.log(lastImage);
//     return lastImage;
//   } else {
//     console.log("No images found");
//     return null;
//   }
// };