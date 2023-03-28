import axios from "axios";

const BASE_URL = "http://localhost:3000/fact";

interface Fact {
  title: string;
  description: string;
  image: string;
}

  const postData = async (fact: Fact) => {
    const { data } = await axios.post(BASE_URL, fact);
    return data;
  };
  
  export default postData;


