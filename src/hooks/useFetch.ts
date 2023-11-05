import { useEffect, useState } from 'react';
import { baseAPI } from '../api';

interface FetchResult<T> {
  data?: T;
  loading: boolean;
  error: boolean;
}

export default function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const res = await baseAPI.get(url);
        setData(res.data.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    void fetchData();
    setLoading(false);
  }, [url]);

  return { data, loading, error };
}
