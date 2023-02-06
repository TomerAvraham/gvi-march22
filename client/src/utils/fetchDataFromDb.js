import axios from "axios";

export default async function fetchData (url){
    try {
      const {data: response} = await axios.get(url);
      return response
    } catch (error) {
      console.error(error.message);
    }
  }