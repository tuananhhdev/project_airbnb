import React from "react";
import useModal from "../../../Modal/useModal";
import useActiveInput from "../useActiveInput";
import moment from "moment";
import { Input } from "antd";

export default function DateInput({ date, dateInfo, title, indexKey }) {
  const { isOpenModal, openModal } = useModal();
  const activePickerIndex = dateInfo == "startDate" ? 0 : 1;
  const { activeIndex, setActiveIndex } = useActiveInput();
  const active = activeIndex == indexKey && isOpenModal ? "active" : "";
  return (
    <div
      className={`relative w-1/2 z-10 sb-date rounded-full px-5 py-2 text-sm ${active} flex flex-col`}
      onClick={() => {
        setActiveIndex(indexKey);
        openModal();
      }}>
      <p className="font-medium text-sm sm:text-base">{title}</p>
      <Input
        className="w-full h-full top-0 left-0 pl-0 pt-1 pb-[1px]"
        readOnly
        bordered={false}
        placeholder="DD/MM/YYYY"
        value={
          date && date[activePickerIndex]
            ? moment(new Date(date[activePickerIndex])).format("DD/MM/YYYY")
            : null
        }
      />
    </div>
  );
}
