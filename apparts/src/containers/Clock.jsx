import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const interval = () => {
    setDate(new Date());
  };

  useEffect(() => {
    // componentDidMount only comme array vide ligne 18
    setInterval(interval, 1000);

    return () => {
      // componentWillUnmount
      clearInterval(interval);
    };
  }, []);

  return <h2>{date.toLocaleTimeString()}</h2>;
};

export default Clock;
