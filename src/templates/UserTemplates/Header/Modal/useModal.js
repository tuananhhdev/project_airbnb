import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../redux/slices/modalSlice";

export default function useModal() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.modal.open);
  return {
    isOpenModal,
    openModal: () => {
      dispatch(openModal(true));
    },
    closeModal: () => {
      dispatch(openModal(false));
    },
  };
}
