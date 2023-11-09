import { useEffect, useState } from "react";

function useApi(callback) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    callback()
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [callback]);

  return { data, loading, error, setData };
}

export default useApi;
