import React, { useEffect, useRef } from "react";
import useModal from "./useModal";
import { useDispatch } from "react-redux";
import { setActiveIndex } from "../../../../redux/slices/activeSlice";

export default function Modal() {
  const { isOpenModal, closeModal } = useModal();
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    const handleCloseModal = () => {
      closeModal();
      dispatch(setActiveIndex(null));
    };
    if (isOpenModal) {
      document.addEventListener("click", handleClick);
      document.addEventListener("click", handleCloseModal);
    }
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleCloseModal);
    };
  }, [isOpenModal]);
  return (
    isOpenModal && (
      <div
        ref={ref}
        className="w-screen h-screen fixed top-0 left-0 bg-neutral-500 opacity-50 z-20"></div>
    )
  );
}
