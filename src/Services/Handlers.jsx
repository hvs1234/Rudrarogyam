import { useDispatch } from "react-redux";
import { setPath } from "./Slice";
import { useCallback } from "react";

const Handlers = () => {
  const dispatch = useDispatch();

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  return {
    handleOnClick,
  };
};

export default Handlers;
