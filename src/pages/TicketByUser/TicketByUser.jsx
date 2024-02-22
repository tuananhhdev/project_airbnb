import React from "react";
import { userLocalStorage } from "../../utils/Local";
import Profile from "./Properties/Profile";
import { useSelector } from "react-redux";
import BookRoomByUser from "./Properties/BookRoomByUser";
import { MODAL_NAME, useModal } from "../../hook/useModal";

export default function TicketByUser() {
  const { user } = useSelector((state) => state?.auth?.user || {});
  const modal = useModal();
  const handleUpdate = () => {
    modal.open(MODAL_NAME.EDIT_PROFILE);
  };
  const handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
  };

  // if (!user?.id) return null;
  return (
    <div className="container mx-auto">
      <div className="h-32"></div>
      <div className="flex flex-wrap py-4 md:py-6">
        <div className="w-full md:w-1/3">
          <Profile />
        </div>
        <div className="w-full md:w-2/3">
          <div className="md:py-0 py-4 px-0 lg:px-10">
            {/* <h1>Phòng đã thuê</h1> */}
            <BookRoomByUser user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
