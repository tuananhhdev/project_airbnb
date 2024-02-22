import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";
import { useSelector } from "react-redux";
import "./Header.css";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { locationAPI } from "../../../services/LocationServ";
import { userLocalStorage } from "../../../utils/Local";
const Header = () => {
  const { pathname } = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [isFocusLocation, setIsFocusLocation] = useState(false);
  const [isFocusCheckIn, setIsFocusCheckIn] = useState(false);
  const [isFocusCheckOut, setIsFocusCheckOut] = useState(false);
  const [isFocusGuest, setIsFocusGuest] = useState(false);

  const loginMenu = useRef(null);
  const formShow = useRef(null);

  const handleLoginMenuClickOutSide = () => {
    setShowLogin(false);
  };
  const handleFormClickOutSide = () => {
    setShowForm(false);
  };
  useOnClickOutside(loginMenu, handleLoginMenuClickOutSide);
  useOnClickOutside(formShow, handleFormClickOutSide);

  const { user } = useSelector((state) => state.auth);
  const locationInput = useCallback(
    (inputElement) => {
      if (showForm && inputElement) {
        inputElement.focus();
      }
    },
    [showForm]
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: { value: "", label: "" },
      checkIn: "",
      checkOut: "",
      guest: 0,
    },

    mode: "onTouched",
  });

  const navigate = useNavigate();

  const handleLogOut = () => {
    userLocalStorage.remove();
    window.location.reload();
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 100;

      if (scrollPosition > offset) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onSubmit = (values) => {
    if (values.location?.value !== "") {
      navigate(`/room-by-city/${values.location?.value}`, {
        state: {
          location: values.location,
          checkIn: values.checkIn,
          checkOut: values.checkOut,
          guest: values.guest,
        },
      });
      window.location.reload();
    } else navigate("*");
  };

  const [viTri, setViTri] = useState([]);
  useEffect(() => {
    locationAPI
      .getListLocation()
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        setViTri(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  const renderList = () => {
    return viTri.map((location) => ({
      value: location.id,
      label: location.tinhThanh,
    }));
  };

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 text-white   duration-500 bg-black">
        <div className="container mx-auto px-2 sm:px-10 py-5 flex flex-wrap justify-between items-center">
          {/* logo  */}
          <NavLink
            to=""
            className="hidden sm:flex flex-wrap items-center   z-20"
            style={{ flex: "25%", color: "#F43F5E" }}>
            <div className="hidden md:block">
              <svg
                width={102}
                height={32}
                fill="currentcolor"
                style={{ display: "block" }}>
                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
              </svg>
            </div>
            <div className="block md:hidden">
              <svg width={30} height={32} fill="currentcolor" className="block">
                <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
              </svg>
            </div>
          </NavLink>

          <div
            className="flex flex-wrap justify-center items-center relative z-20 text-black font-semibold"
            style={{ flex: "45%", marginRight: "70px" }}>
            <div className={cn("flex flex-wrap justify-center items-center")}>
              <NavLink
                className="mx-2 text-white hover:text-gray-500 duration-200"
                to="">
                Chỗ ở
              </NavLink>
              <NavLink
                className="mx-2 text-white hover:text-gray-500 duration-500"
                to="">
                Trải nghiệm
              </NavLink>
              <NavLink className="mx-2 text-white hover:text-gray-500 duration-500">
                Trải nghiệm trực tuyến
              </NavLink>
            </div>
            <div
              className={cn(
                "absolute flex flex-wrap px-3 py-1.5 rounded-full shadow-lg  bg-white justify-center items-center cursor-pointer z-20",
                showForm ? "hidden" : "",
                pathname.startsWith("/personal-info") ? "hidden" : ""
              )}
              onClick={() => {
                setShowForm(true);
              }}>
              <div className="font-medium border-r pr-2">Địa điểm bất kỳ</div>
              <div className="font-medium border-r pr-2 pl-2">tuần bất kỳ</div>
              <div className="font-medium pr-2 pl-2">Thêm khách</div>
              <div className="inline-flex w-8 h-8 justify-center items-center bg-rose-500 rounded-full text-white">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    fill: "none",
                    height: "12px",
                    width: "12px",
                    stroke: "currentcolor",
                    strokeWidth: "5.33333",
                    overflow: "visible",
                  }}>
                  <g fill="none">
                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "absolute top-0 left-0 w-screen transition-all duration-300 pb-3 z-10",
              showForm ? " shadow-lg" : ""
            )}
            style={{ paddingTop: "4.4rem" }}
            ref={formShow}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-wrap justify-center items-center">
              <div
                className={cn(
                  "flex flex-wrap justify-center items-center relative bg-white transition-all duration-300 rounded-full",
                  isFocusLocation ||
                    isFocusCheckIn ||
                    isFocusCheckOut ||
                    isFocusGuest
                    ? "bg-gray-200"
                    : "",
                  showForm ? "h-16 rounded-full border " : "h-0 overflow-hidden"
                )}>
                <div
                  className={cn(
                    "px-5 py-2 hover:bg-gray-300 rounded-full h-full flex flex-wrap justify-center items-center",
                    isFocusLocation
                      ? "border bg-white hover:bg-white shadow-lg"
                      : ""
                  )}>
                  <label
                    htmlFor="checkInDate"
                    className="block text-sm font-medium text-black mr-2">
                    Địa điểm
                  </label>
                  <Controller
                    name="location"
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={renderList()}
                        className="w-48 text-black bg-transparent outline-none select_location"
                        ref={locationInput}
                        onFocus={() => setIsFocusLocation(true)}
                        onBlur={() => setIsFocusLocation(false)}
                        placeholder="Tìm kiếm điểm đến"
                        noOptionsMessage={() => {
                          "Không tìm thấy địa điểm!";
                        }}
                      />
                    )}
                    control={control}
                  />
                </div>

                <div
                  className={cn(
                    "hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full",
                    isFocusCheckIn
                      ? "border bg-white hover:bg-white shadow-lg"
                      : ""
                  )}>
                  <label
                    htmlFor="checkInDate"
                    className="block text-sm font-medium text-black">
                    Nhận phòng
                  </label>
                  <input
                    {...register("checkIn")}
                    type="date"
                    id="checkInDate"
                    className="bg-transparent text-gray-500 outline-none"
                    placeholder="Thêm ngày"
                    onFocus={() => setIsFocusCheckIn(true)}
                    onBlur={() => setIsFocusCheckIn(false)}
                  />
                </div>
                <div
                  className={cn(
                    "hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full",
                    isFocusCheckOut
                      ? "border bg-white hover:bg-white shadow-lg"
                      : ""
                  )}>
                  <label
                    htmlFor="checkOutDate"
                    className="block text-sm font-medium text-black">
                    Trả phòng
                  </label>
                  <input
                    {...register("checkOut")}
                    type="date"
                    id="checkOutDate"
                    className="bg-transparent outline-none"
                    placeholder="Thêm ngày"
                    onFocus={() => setIsFocusCheckOut(true)}
                    onBlur={() => setIsFocusCheckOut(false)}
                  />
                </div>
                <div
                  className={cn(
                    "hidden sm:block py-2 pl-7 pr-5 hover:bg-gray-300 rounded-full overflow-hidden h-full",
                    isFocusGuest
                      ? "border bg-white hover:bg-white shadow-lg"
                      : ""
                  )}>
                  <label
                    htmlFor="guest"
                    className="block text-sm font-medium text-black">
                    Khách
                  </label>
                  <input
                    {...register("guest")}
                    type="number"
                    id="guest"
                    className="bg-transparent outline-none"
                    onFocus={() => setIsFocusGuest(true)}
                    onBlur={() => setIsFocusGuest(false)}
                    placeholder="Thêm khách"
                  />
                </div>
                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 absolute right-0">
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>

          <div
            className="hidden sm:block flex-initial col-end-6 z-20"
            style={{ flex: "25%" }}>
            <div className="relative flex items-center justify-end">
              <div className="mr-4 flex items-center z-10">
                <a
                  className="inline-block rounded-full py-2 px-3 hover:text-gray-300 duration-500"
                  href="#">
                  <div className="hidden relative lg:flex cursor-pointer items-center whitespace-nowrap ">
                    <span className="text-lg font-normal">
                      Trở thành chủ nhà
                    </span>
                  </div>
                </a>
                <div className="hidden relative lg:block">
                  <button
                    type="button"
                    className="relative inline-block rounded-full py-2 px-3 hover:text-gray-400 duration-500">
                    <div className="flex h-5 items-center">
                      <div className="_xpkakx">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style={{
                            display: "block",
                            height: 16,
                            width: 16,
                            fill: "currentcolor",
                          }}>
                          <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="block z-10" ref={loginMenu}>
                <div className="relative inline">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-full border px-2 hover:shadow-lg"
                    onClick={() => {
                      setShowLogin(!showLogin);
                    }}>
                    <div className="pl-1">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          fill: "none",
                          height: 16,
                          width: 16,
                          stroke: "currentcolor",
                          strokeWidth: 3,
                          overflow: "visible",
                        }}>
                        <g fill="none" fillRule="nonzero">
                          <path d="m2 16h28" />
                          <path d="m2 24h28" />
                          <path d="m2 8h28" />
                        </g>
                      </svg>
                    </div>
                    <div className="block h-10 w-12 pl-4">
                      {user ? (
                        <div className="w-full h-full flex justify-center items-center">
                          <img
                            src={user?.avatar}
                            alt=""
                            className="w-7 h-7 rounded-full"
                          />
                        </div>
                      ) : (
                        <i
                          class="fa-solid fa-user w-full h-full flex justify-center items-center"
                          style={{
                            transform: "translateY(-4px)",
                          }}></i>
                      )}
                    </div>
                  </button>

                  <div
                    className={
                      showLogin
                        ? "absolute right-0 z-50 rounded-md shadow flex flex-col mt-4 w-56 bg-white text-black"
                        : "hidden"
                    }>
                    {localStorage.getItem("user") ? (
                      <div className="flex flex-col border-b-2 font-semibold ">
                        <NavLink
                          className="hover:bg-gray-100 pl-5 py-2 transition-all duration-200"
                          to="">
                          Tin nhắn
                        </NavLink>
                        <NavLink
                          className="hover:bg-gray-100 pl-5 py-2 transition-all duration-200"
                          to={`/tickets-by-user/${user?._id}`}>
                          Chuyến đi
                        </NavLink>
                        <NavLink
                          className="hover:bg-gray-100 pl-5 py-2 transition-all duration-200"
                          to={`/personal-info/${user?._id}`}>
                          Thông tin cá nhân
                        </NavLink>
                      </div>
                    ) : (
                      <div className="font-medium flex flex-col border-b-2">
                        <NavLink
                          className="hover:text-gray-500 pl-5 py-2 transition-all duration-200"
                          to="/register">
                          Đăng ký
                        </NavLink>
                        <NavLink
                          className="hover:text-gray-500 pl-5 py-2 transition-all duration-200"
                          to="/login">
                          Đăng nhập
                        </NavLink>
                      </div>
                    )}

                    <div className="font-normal flex flex-col">
                      <NavLink
                        className="hover:text-gray-500 pl-5 py-2 transition-all duration-200 font-semibold "
                        to="">
                        Cho thuê nhà
                      </NavLink>
                      <NavLink
                        className="hover:text-gray-500 pl-5 py-2 transition-all duration-200 font-medium"
                        to="">
                        Tổ chức trải nghiệm
                      </NavLink>
                      <NavLink
                        className="hover:text-gray-500 pl-5 py-2 transition-all duration-200 font-medium"
                        to="">
                        Trợ giúp
                      </NavLink>
                    </div>

                    {localStorage.getItem("user") ? (
                      <div className="font-medium flex flex-col border-t-2">
                        <div
                          className="hover:bg-gray-100 pl-5 py-2 transition-all duration-200 cursor-pointer"
                          onClick={handleLogOut}>
                          Đăng xuất
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
