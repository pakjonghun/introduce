import { URLSearchParams } from "url";
import { BASE_URL } from "./constants";

interface FetchProps {
  endPoint: string;
  params?: any;
}

export const makeUrl = ({ endPoint, params = {} }: FetchProps) => {
  const paramsObj = new URLSearchParams();
  const keys = Object.keys(params);

  if (!keys.length) return `${BASE_URL}/${endPoint}`;

  keys.forEach((key) => {
    paramsObj.append(key, params[key]);
  });

  return `${BASE_URL}/${endPoint}?${paramsObj.toString()}`;
};

export const getFetch = async (payload: FetchProps) => {
  return fetch(makeUrl(payload)).then((res) => res.json());
};
