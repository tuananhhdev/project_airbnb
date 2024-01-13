import React from "react";
import Footer from "../../templates/UserTemplates/Footer";
import Header from "../../templates/UserTemplates/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-4xl mb-10 font-semibold text-center">
              Đăng ký
            </h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black-400 me-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name
                id
                placeholder="Vui lòng nhập tài khoản"
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-envelope text-black text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name
                id
                placeholder="Vui lòng nhập E-mail"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-phone text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name
                id
                placeholder="Vui lòng nhập E-mail"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <i class="fa-solid fa-lock text-xl me-3"></i>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name
                id
                placeholder="Vui lòng nhập mật khẩu"
              />
            </div>
            <div className="checkbox-wrapper-28 ms-3 mt-3">
              <input
                id="tmp-28"
                type="checkbox"
                className="promoted-input-checkbox"
              />
              <svg>
                <use xlinkHref="#checkmark-28" />
              </svg>
              <label className="text-xl" htmlFor="tmp-28">
                Remember me
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}>
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    fill="none"
                    d="M22.9 3.7l-15.2 16.6-6.6-7.1"></path>
                </symbol>
              </svg>
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-10 py-2 rounded-2xl text-white text-xl font-semibold mb-3 hover:bg-indigo-800 duration-500">
              Hoàn thành
            </button>
          </form>
        </div>
      </div>
      <div>
        <a
          href="/"
          className="fixed  right-10 bottom-10  transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <i class="fa-solid fa-arrow-left text-black text-2xl "></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
