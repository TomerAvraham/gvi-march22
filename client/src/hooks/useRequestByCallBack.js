import { useState, useEffect } from "react";

export default function useRequestByCallBack(callback) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchDataAsync = async () => {
    setIsLoading(true);
    try {
      const response = await callback();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAsync();
  }, []);

  return [data, isLoading, error];
}
