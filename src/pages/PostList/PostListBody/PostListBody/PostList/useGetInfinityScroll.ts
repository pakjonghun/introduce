import { pageState } from "../../../../../recoil/postlist/atom";
import { useState, useEffect, useCallback } from "react";
import { useSetRecoilState } from "recoil";

interface InfinityOption {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface props {
  options?: InfinityOption;
  isLast: boolean;
}

const initialOptions = { root: null, rootMargin: "0px", threshold: 0 };

const useInfinityScroll = ({ isLast, options = initialOptions }: props) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const setPage = useSetRecoilState(pageState);

  const setRef = useCallback((element: HTMLDivElement) => {
    setTarget(element);
  }, []);

  useEffect(() => {
    if (!target || isLast) return;
    const onScroll: IntersectionObserverCallback = (extras) => {
      if (extras[0].isIntersecting) {
        setPage((pre) => pre + 1);
        observer.unobserve(extras[0].target);
      }
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      onScroll,
      options
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [options, target, isLast, setPage]);

  return setRef;
};

export default useInfinityScroll;
