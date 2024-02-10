import { useEffect, useRef } from "react";
import useModal from "../../Modal/useModal";
import useActiveInput from "./useActiveInput";
import { slugify } from "../../../../../utils/slugify";
import { Select } from "antd";

export default function LocationOption({ setLocationId, locationLt }) {
  const ref = useRef();
  const { isOpenModal } = useModal();
  const key = 0;
  const { activeIndex, setActiveIndex } = useActiveInput();
  const active = activeIndex == key && isOpenModal;

  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();
    }
  }, [active]);

  const handleFilter = (inputValue, option) => {
    let label = slugify(option.label.toLowerCase());
    let input = slugify(inputValue.toLowerCase());
    return label.indexOf(input);
  };

  const handleOnClick = ({ target }) => {
    if (
      target.classList.contains("ant-select-item-option-content") ||
      target.classList.contains("ant-select-item")
    ) {
      setActiveIndex(1);
      ref.current.blur();
    } else {
      setActiveIndex(key);
      ref.current.focus();
    }
  };
  return (
    <div
      className={`rounded-full w-full h-full flex flex-col sb-location pl-5 pt-2 pb-1 ${
        active && "active"
      }`}
      onClick={handleOnClick}>
      <span className="text-sm font-medium">Địa điểm</span>
      <Select
        ref={ref}
        open={active}
        className="pb-1"
        dropdownAlign={{ offset: [-10, 15] }}
        placeholder="Tìm kiếm điểm đến"
        suffixIcon={null}
        bordered={false}
        showSearch
        allowClear
        optionFilterProp="label"
        filterOption={handleFilter}
        options={locationLt?.map((l) => ({
          value: l.id,
          label: l.tenViTri.trim() + ", " + l.tinhThanh.trim(),
        }))}
        onChange={(city) => {
          setLocationId(city);
        }}
      />
    </div>
  );
}
