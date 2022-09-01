import { useEffect } from "react";
import { useState } from "react";
import { FROM_DEV_DATE } from "./constant";
const useGetTotalDevDate = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const diff = Date.now() - new Date(FROM_DEV_DATE).getTime();
    const totalDate = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDate(totalDate);
  }, []);

  return date;
};

export default useGetTotalDevDate;
