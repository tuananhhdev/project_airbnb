import { useDispatch } from "react-redux";
import { clearModal, setModal } from "../redux/slices/modalSlice";
// import { clearModal, setModal } from "../redux/slices/modalSlice";

export const MODAL_NAME = {
  EDIT_PROFILE: "EDIT_PROFILE",
};

export const useModal = () => {
  const dispatch = useDispatch();
  return {
    open: (modalName) => {
      dispatch(setModal({ modal: modalName }));
    },
    close: () => {
      dispatch(clearModal({ modal: "" }));
    },
  };
};
