import { useEffect, useState } from "react";
import { Loader } from "components";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=mand-filler"
      );

      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (isLoading) return <Loader />;
  if (hasError) return <div>Erreur au fetch</div>;

  return <div>{data}</div>;
};

export default Fetch;
