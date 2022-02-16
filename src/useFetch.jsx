import { useState, useEffect } from "react";

const useFecth = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create abort controller
    const abortCont = new AbortController();

    // Just for development - delete setTimeout when publish to production
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          // Make custom error message
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFecth;
