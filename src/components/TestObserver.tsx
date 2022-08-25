import { useEffect } from "react";
import { useRecoilValue } from "recoil";

interface props {
  node: any;
  onChange: any;
}

export const RecoilObserver: React.FC<props> = ({ node, onChange }) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};
