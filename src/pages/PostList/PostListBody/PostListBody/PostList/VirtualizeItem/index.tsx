import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

export interface VirtualizeItemProps {
  children: React.ReactNode;
  offset?: number;
}

const VirtualizedItem: FC<VirtualizeItemProps> = ({ children, offset = 0 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [itemRef, setItemRef] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (itemRef) {
      const options = {
        root: null,
        rootMargin: `${offset}px 0px ${offset}px 0px`,
        threshold: 0,
      };

      const cb: IntersectionObserverCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (typeof window !== undefined && window.requestIdleCallback) {
          window.requestIdleCallback(() => setIsVisible(isIntersecting), {
            timeout: 300,
          });
        } else {
          setIsVisible(isIntersecting);
        }
      };

      const observer: IntersectionObserver = new IntersectionObserver(
        cb,
        options
      );
      observer.observe(itemRef);
    }
  }, [itemRef, offset]);

  return (
    <div ref={setItemRef}>
      {isVisible ? <>{children}</> : <VirtualizeItem />}
    </div>
  );
};
export default VirtualizedItem;

const VirtualizeItem = styled.div`
  height: ${({ theme }) => theme.values.postHeight};
`;
