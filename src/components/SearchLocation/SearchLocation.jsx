import React from "react";
import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
const SearchLocation = () => {
  const setting = {
    color: "gray",
  };
  return (
    <div className="flex">
      {/* <form>
        <div className="relative">
          <div className="absolute  flex items-center ps-3 pointer-events-none"></div>
          <div>
            <label
              htmlFor="defaultSearch"
              className="absolute ms-10 text-black font-semibold text-lg">
              Địa điểm
            </label>
            <input
              type="search"
              id="default-search"
              className="block  p-4 ps-10   pt-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bạn sắp đi đâu ?"
            />
          </div>
          <div>
            <label htmlFor="" className="">Nhận phòng</label>

            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Thêm ngày"
              />
            </div>
          </div>
          <a href="/">
            <i
              class="fa-solid fa-magnifying-glass absolute end-2.5 bottom-5  text-white bg-pink-600 w-12 h-12  flex justify-center align-middle rounded-full "
              style={{
                lineHeight: "48px",
              }}></i>
          </a>
        </div>
      </form> */}
      <form action="">
        <div>
          <label htmlFor="">Địa điểm</label> <br />
          <input type="text" name="" id="" placeholder="Bạn sắp đi đâu ?" />
        </div>
        <div>
          <label htmlFor="">Nhận phòng</label> <br />
          <input datepicker type="text" placeholder="Thêm ngày" />
        </div>
        <div>
          <label htmlFor="">Trả phòng</label> <br />
          <input datepicker type="text" name="" id="" placeholder="Thêm ngày" />
        </div>
        <label htmlFor="">Khách</label> <br />
        <Select
          {...setting}
          showSearch
          placeholder="Thêm khách"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              value: "người lớn",
              label: "Người lớn",
            },
            {
              value: "trẻ em",
              label: "Trẻ em",
            },
            {
              value: "trẻ sơ sinh",
              label: "Trẻ sơ sinh",
            },
            {
              value: "thú nuôi",
              label: "Thú nuôi",
            },
          ]}
        />
        <div>
          <a href="/">
            <i
              class="fa-solid fa-magnifying-glass  end-2.5 bottom-5  text-white bg-pink-600 w-12 h-12  flex justify-center align-middle rounded-full "
              style={{
                lineHeight: "48px",
              }}></i>
          </a>
        </div>
      </form>
    </div>
  );
};

export default SearchLocation;
