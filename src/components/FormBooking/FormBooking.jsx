import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { booking } from "../../redux/slices/roomSlice";
import Swal from "sweetalert2";
import moment from "moment";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { message, notification } from "antd";
const FormBooking = () => {
  const { roomDetails } = useSelector((state) => state.room);
  const { user } = useSelector((state) => state.auth);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guest, setGuest] = useState(0);
  const [inputFocus, setInputFocus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const openDatePicker = () => {
    setInputFocus(true);
  };
  const closeDatePicker = () => {
    setInputFocus(false);
  };

  const selectionRange = {
    startDate: checkInDate,
    endDate: checkOutDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setCheckInDate(ranges.selection.startDate);
    setCheckOutDate(ranges.selection.endDate);
  };

  const options = {
    rangeColors: ["#e0565b"],
    ranges: [selectionRange],
    minDate: new Date(),
    onChange: handleSelect,
  };

  const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     roomId: roomDetails?.id,
  //     checkIn: checkInDate,
  //     checkOut: checkOutDate,
  //   };
  //   if (user) {
  //     Swal.fire({
  //       icon: "warning",
  //       text: "Bạn có chắc chắn đặt phòng không!",
  //       confirmButtonText: "Đồng Ý!",
  //       confirmButtonColor: "#3085d6",
  //       showCancelButton: true,
  //       cancelButtonText: "Hủy",
  //       cancelButtonColor: "#d33",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         dispatch(booking(data))
  //           .unwrap()
  //           .then((result) => {
  //             if (result.userDetail) {
  //               Swal.fire({
  //                 title: "Đặt phòng thành công",
  //               });
  //             } else {
  //               Swal.fire({
  //                 title: "Đặt phòng thất bại",
  //               });
  //             }
  //           });
  //       }
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: "warning",
  //       text: "Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục",
  //       confirmButtonText: "Đồng Ý!",
  //       confirmButtonColor: "green",
  //       showCancelButton: true,
  //       cancelButtonColor: "#d33",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/login");
  //       }
  //     });
  //   }
  // };

  const handleBooking = () => {
    if (!user) {
      notification.warning({ message: "Vui lòng đăng nhập để đặt phòng" });
    } else {
      message.success("Đặt phòng thành công");
    }
    return;
  };

  return (
    <div className="bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
      <div className="relative w-full">
        {/* info */}
        <div className="hidden md:flex justify-between items-center mb-4">
          <div>
            <span>$ </span>
            <span className="text-xl font-semibold">
              {roomDetails?.giaTien}
            </span>
            <span className="text-base"> đêm</span>
          </div>
          <div>
            <span className="text-sm font-normal">
              <i className="fa fa-star"></i> {randomNumber(1, 5)}
              sao
            </span>{" "}
            <span className="underline text-sm font-normal tracking-widest mx-1">
              {randomNumber(50, 100)} đánh giá
            </span>
          </div>
        </div>
        {/* form đặt phòng */}
        <div className="flex flex-col border border-solid border-gray-400 rounded-md">
          <div
            className="flex w-full border-b border-solid border-gray-400"
            onClick={openDatePicker}>
            <div className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100">
              <div className="text-xs uppercase font-semibold">Nhận phòng</div>
              <div className="m-1">
                {moment(checkInDate).format("DD-MM-YYYY")}
              </div>
            </div>
            <div className=" rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100">
              <div className="text-xs uppercase font-semibold">Trả phòng</div>
              <div className="m-1">
                {moment(checkOutDate).format("DD-MM-YYYY")}
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="uppercase text-xs font-semibold">Khách</div>
            <div className="flex justify-between items-center m-1">
              <button
                className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer"
                disabled={guest <= 0}
                onClick={() => setGuest(guest - 1)}>
                -
              </button>
              <div>{guest} khách</div>
              <button
                className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer"
                onClick={() => setGuest(guest + 1)}>
                +
              </button>
            </div>
          </div>
        </div>

        {/* đặt phòng */}
        <button
          type="submit"
          onClick={handleBooking}
          className="w-full py-3  mt-3 rounded-lg text-white text-lg font-semibold"
          style={{
            background:
              "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%",
          }}>
          Đặt phòng
        </button>
        <div className="text-center font-normal text-gray-400 my-2">
          <span>Bạn vẫn chưa bị trừ tiền</span>
        </div>
        <div className="border-b py-2">
          <div className="flex justify-between py-1 text-base">
            <div className="underline text-gray-600">
              $ {roomDetails?.giaTien} x{" "}
              {get_day_of_time(checkInDate, checkOutDate)} đêm
            </div>
            <div>
              <span>
                {roomDetails?.giaTien
                  ? roomDetails?.giaTien *
                    get_day_of_time(checkInDate, checkOutDate)
                  : ""}
              </span>{" "}
              $
            </div>
          </div>
          <div className="flex justify-between py-1 text-base">
            <div className="underline text-gray-600">Phí dịch vụ</div>
            <div>
              <span>0</span> $
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-lg font-semibold pt-3">
          <div>Tổng trước thuế</div>
          <div>
            {roomDetails?.giaTien
              ? roomDetails?.giaTien *
                get_day_of_time(checkInDate, checkOutDate)
              : ""}{" "}
            $
          </div>
        </div>

        {/* form daterangepicker */}
        {inputFocus ? (
          <div className="absolute top-0 right-0 border shadow-xl p-2 bg-white rounded-xl">
            <div className="flex justify-between items-center p-3">
              <div>
                <div>
                  <div className="text-2xl font-semibold text-gray-800">
                    {get_day_of_time(checkInDate, checkOutDate)} đêm
                  </div>
                  <div className="text-gray-400">
                    {moment(checkInDate).format("DD-MM-YYYY")} đến{" "}
                    {moment(checkOutDate).format("DD-MM-YYYY")}
                  </div>
                </div>
              </div>
              <button
                onClick={closeDatePicker}
                className="bg-gray-100 text-red-600 hover:bg-red-100 duration-200 px-2 py-3 rounded-2xl">
                Close
              </button>
            </div>
            <DateRangePicker {...options} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormBooking;
