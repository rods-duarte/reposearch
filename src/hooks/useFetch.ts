import { useEffect, useState } from 'react';
import { baseAPI } from '../api';

interface FetchResult<T> {
  data?: T;
  loading: boolean;
  error: boolean;
}

export default function useFetch<T>(
  url: string,
  abort = false,
): FetchResult<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (abort) {
    return { data: undefined, loading, error };
  }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const res = await baseAPI.get(url);

        setData(res.data);
      } catch (error) {
        setError(true);
        console.log(url);
        console.log(error);
      }
    };
    void fetchData();
    setLoading(false);
  }, [url]);

  return { data, loading, error };
}
