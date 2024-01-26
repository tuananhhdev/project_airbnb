import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../services/Api";
import {
  getDetailRoom,
  getDetailsRoomAction,
} from "../../redux/slices/roomSlice";
export default function RoomDetail(props) {
  // let { listRoom } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  useEffect(() => {
    const actionThunk = getDetailRoom();
    dispatch(actionThunk);
  },[]);
  const [room, setRoom] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosClient
      .getRoomDetails(id)
      .then((res) => {
        console.log(res);
        setRoom(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="h-28"></div>
          <div className="container mx-auto px-20">
            {room.slice(0, 12).map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <p>
                      <span className="font-semibold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900">
                        {/* {roomDetail?.name} */}
                        {item.tenPhong}
                      </span>
                      <div className="mt-5">
                        <img src={item.hinhAnh} alt="" />
                      </div>
                    </p>
                  </div>
                  {/* ảnh căn hộ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                    <div className="rounded-l-xl rounded-r-xl sm:rounded-r-none overflow-hidden">
                      <img
                        //   src={roomDetail?.image}
                        className="w-full object-contain rounded-l-xl overflow-hidden"
                        alt=""
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                    <div className="hidden sm:grid sm:grid-cols-2 gap-2 ">
                      <div>
                        {/* <img src={roomDetail?.image} className="w-full h-full" alt="" /> */}
                      </div>
                      <div className="hidden md:block rounded-tr-xl overflow-hidden">
                        <img
                          // src={roomDetail?.image}
                          className="w-full h-full rounded-tr-xl overflow-hidden"
                          alt=""
                        />
                      </div>
                      <div className="rounded-r-xl overf low-hidden md:rounded-none">
                        {/* <img src={roomDetail?.image} className="w-full h-full" alt="" /> */}
                      </div>
                      <div className="hidden md:block rounded-br-xl overflow-hidden">
                        <img
                          // src={roomDetail?.image}
                          className="w-full h-full rounded-br-xl overflow-hidden"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex sm:flex-row flex-col mt-10  pb-5">
                    <div className="w-full sm:w-1/2 lg:w-3/5">
                      {/* căn hộ */}
                      <div className="flex flex-wrap justify-between items-center pb-5 border-b">
                        <div>
                          <h1 className="font-semibold text-lg sm:text-2xl text-gray-800">
                            Toàn bộ căn hộ. Chủ nhà Sungwon
                          </h1>
                          <span className="text-sm font-normal flex tracking-widest text-gray-700 ">
                            {item.khach} khách
                            {/* <span>{roomDetailDetail?.guests} khách . </span> */}
                            <ul className="flex list-disc">
                              <li className="mx-1 ml-6">
                                {item.phongNgu} phòng ngủ
                              </li>
                              <li className="mx-1 ml-6">
                                {item.giuong}
                                giường
                              </li>
                              <li className="mx-1 ml-6">
                                {item.phongTam}
                                phòng tắm
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div className="w-12 h-12  relative">
                          <div className="absolute bottom-0 -right-1 text-2xl">
                            <svg
                              viewBox="0 0 14 24"
                              role="presentation"
                              aria-hidden="true"
                              focusable="false"
                              style={{
                                height: "1em",
                                width: "1em",
                                display: "block",
                                fill: "currentcolor",
                              }}>
                              <path
                                d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                                fill="#fff"
                              />
                              <path
                                d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                                fill="#ffb400"
                              />
                              <path
                                d="m12 9.5-5 3.75-5-3.75v-7.5z"
                                fill="#ff5a5f"
                              />
                              <path
                                d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                                fill="#484848"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* thông tin căn hộ */}
                      <div className="mt-5 pb-5 border-b">
                        <div className="flex w-full">
                          <div className="pt-2">
                            <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style={{
                                display: "inline-block",
                                height: 24,
                                width: 24,
                                fill: "currentcolor",
                              }}>
                              <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800 text-base sm:text-lg ">
                              Sungwon là Chủ nhà siêu cấp
                            </h3>
                            <p className="tracking-wider text-gray-500">
                              Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm,
                              được đánh giá cao và là những người cam kết mang
                              lại quãng thời gian ở tuyệt vời cho khách.
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <div className="pt-2">
                            <span>
                              <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                  display: "inline-block",
                                  height: 24,
                                  width: 24,
                                  fill: "currentcolor",
                                }}>
                                <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                              </svg>
                            </span>
                          </div>
                          <div className="ml-4">
                            <h3 className="font-semibold text-gray-800 text-base sm:text-lg ">
                              Địa điểm tuyệt vời
                            </h3>
                            <p className="tracking-wider text-gray-500">
                              90% khách gần đây đã xếp hạng 5 sao cho vị trí
                              này.
                            </p>
                          </div>
                        </div>
                        <div className="flex mt-5">
                          <div className="pt-2">
                            <span>
                              <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                  display: "inline-block",
                                  height: 24,
                                  width: 24,
                                  fill: "currentcolor",
                                }}>
                                <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z" />
                              </svg>
                            </span>
                          </div>
                          <h3 className="ml-4 font-semibold text-gray-800  text-base sm:text-lg">
                            Miễn phí hủy trong 48 giờ.
                          </h3>
                        </div>
                      </div>

                      {/* Nơi này có những gì cho bạn */}
                      <div className="mt-5">
                        <div>
                          <h2 className="font-semibold text-gray-800 text-2xl pb-4">
                            Tiện nghi
                          </h2>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="mb-2">
                            <i class="fa-solid fa-utensils text-lg"></i>
                            <span className="text-lg ml-3">Bếp</span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-solid fa-tv text-lg"></i>
                            <span className="text-lg ml-3 truncate">
                              TV với truyền hình cáp tiêu chuẩn
                            </span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-regular fa-snowflake text-lg"></i>
                            <span className="text-lg ml-3">
                              Điều hòa nhiệt độ
                            </span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-solid fa-fire text-lg"></i>
                            <span className="text-lg ml-3">
                              Lò sưởi trong nhà
                            </span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-solid fa-square-parking text-lg"></i>
                            <span className="text-lg ml-3">
                              Bãi đỗ xe thu phí nằm ngoài khuôn viên
                            </span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-solid fa-wifi text-lg"></i>
                            <span className="text-lg ml-3">Wifi</span>
                          </div>
                          <div className="mb-2">
                            <i class="fa-solid fa-elevator text-lg"></i>
                            <span className="text-lg ml-3">Thang máy</span>
                          </div>
                          <div className="flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              aria-hidden="true"
                              //   role="presentation"
                              focusable="false"
                              style={{
                                height: "24px",
                                width: "24px",
                                fill: "currentcolor",
                              }}
                              className="text-lg">
                              <path d="M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5 5 0 0 1-4 4.9v4.29A9.04 9.04 0 0 1 23.95 22a8.94 8.94 0 0 1 3.74.81l.31.15v2.33A6.96 6.96 0 0 0 23.95 24a6.88 6.88 0 0 0-6.93 5.87l-.02.15v.1a1 1 0 0 1-.88.87L16 31a1 1 0 0 1-.97-.77l-.02-.12A6.95 6.95 0 0 0 7.97 24 6.96 6.96 0 0 0 4 25.23v-2.31a9.16 9.16 0 0 1 11 2.3V20.9a5 5 0 0 1-4-4.68V16h-.22a5 5 0 0 1 0-10H11v-.22A5 5 0 0 1 16 1zm2.86 14.1a4.98 4.98 0 0 1-5.72 0l-.07.23a3 3 0 1 0 5.85 0zM11 8a3 3 0 1 0 .67 5.93l.23-.07A4.98 4.98 0 0 1 11 11c0-1.06.33-2.05.9-2.86l-.23-.07A3.01 3.01 0 0 0 11 8zm10 0c-.23 0-.45.03-.67.07l-.23.07c.57.8.9 1.8.9 2.86a4.98 4.98 0 0 1-.9 2.86l.23.07A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.93 3.67l.07.23a4.98 4.98 0 0 1 5.72 0l.07-.23A3 3 0 0 0 16 3z"></path>
                            </svg>
                            <span className="text-lg ml-3">
                              Sân và ban công
                            </span>
                          </div>
                          <div className="flex">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/ios/50/fridge.png"
                              alt="fridge"
                              className="text-lg"
                            />
                            <span className="text-lg ml-3">Tủ lạnh</span>
                          </div>
                          <div>
                            <i class="fa-regular fa-calendar text-lg"></i>
                            <span className="text-lg ml-3">
                              Cho phép ở dài hạn
                            </span>
                          </div>
                        </div>
                        {/* // render convenients */}
                        <div className="grid grid-cols-2"></div>

                        <div className="mt-5">
                          <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider mt-3">
                            Hiển thị tất cả 24 tiện nghi
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/5">
                      <div className="sticky top-28">
                        {/* <FormGetBooking /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* đánh giá */}
            {/* <ReviewRoom /> */}
          </div>
        </div>
      </div>
    </>
  );
}
