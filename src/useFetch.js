import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get(url, { signal: abortController.signal })
      .then((response) => {
        if (response.statusText !== "OK") {
          throw Error("Could not fetch the data for the resource");
        } else {
          setData(response.data);
          setIsPending(false);
          setError(null);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
