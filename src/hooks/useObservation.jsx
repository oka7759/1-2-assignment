import { useEffect, useRef, useContext } from 'react';
import { ListContext } from '../context/ListContext';

const option = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5,
};

const useObservation = (ref, isLoading) => {
  const { page, setNextPage } = useContext(ListContext);
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoading) {
        setNextPage();
      }
    });
  };
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return ref;
};

export default useObservation;
