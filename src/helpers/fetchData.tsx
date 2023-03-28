import axios from "axios";

const BASE_URL = "http://localhost:3000/fact";
const postData = async (title: string, description: string, image: string) => {
    const {data} = await axios(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { title, description, image },
    });
    
    return data;
  };
  

export default postData




// const putStockData = async (url, info) => {
//     dispatch(fetchStart());
//     try {
//         await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
//         toastSuccessNotify(`${url} successfuly updated`);
//         getStockData(url);
//     } catch (error) {
//         console.log(error);
//         dispatch(fetchFail());
//         toastErrorNotify(`${url} can not be updated`);
//     }
//     };
