import { useState } from "react";

const useFetching = (collback) => {
  const [isloading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const fetching = async () => {
    try {
      setIsLoading(true);
      await collback();
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isloading, err];
};

export default useFetching;
