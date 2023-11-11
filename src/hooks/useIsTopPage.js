import { useState, useEffect, useCallback } from "react";

const useIsTopPage = () => {
  const [isTopPage, setIsTopPage] = useState(true);

  const checkOnTop = useCallback(() => {
    if (window.scrollY === 0 && !isTopPage) {
      setIsTopPage(true);
    } else if (window.scrollY !== 0 && isTopPage) {
      setIsTopPage(false);
    }
  }, [isTopPage]);

  useEffect(() => {
    setIsTopPage(window.scrollY === 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkOnTop);

    return () => {
      window.removeEventListener("scroll", checkOnTop);
    };
  }, [checkOnTop]);

  return {
    isTopPage,
  };
};

export default useIsTopPage;
