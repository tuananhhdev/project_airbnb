import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../../../../redux/slices/activeSlice";

export default function useActiveInput() {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.active.index);
  return {
    activeIndex,
    setActiveIndex: (index) => {
      dispatch(setActiveIndex(index));
    },
  };
}
