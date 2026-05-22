import { useEffect, useRef } from "react";

const useOutsideClick = function (close) {
  const Ref = useRef();
  useEffect(() => {
    const handleClick = function (e) {
      if (Ref.current && !Ref.current.contains(e.target)) close();
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  return { Ref };
};

export default useOutsideClick;
