import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDevice from "../../../../hook/useDevice";
import useModal from "../Modal/useModal";
import useActiveInput from "./SearchOption/useActiveInput";
import { useDispatch, useSelector } from "react-redux";
import { locationAPI } from "../../../../services/LocationServ";
import { setLocationList } from "../../../../redux/slices/locationSlices";
import { slugify } from "../../../../utils/slugify";
import LocationOption from "./SearchOption/LocationOption";
import PeopleOption from "./SearchOption/PeopleOption";
import DateOption from "./SearchOption/DateOption/DateOption";

export default function SearchBar() {
  const navigate = useNavigate();
  const isMobile = useDevice();
  const [locationId, setLocationId] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(0);
  const { isOpenModal, closeModal } = useModal();
  const { activeIndex, setActiveIndex } = useActiveInput();
  const locationLt = useSelector((s) => s.location.list);
  const dispatch = useDispatch();
  const transitionEffect = isOpenModal
    ? "h-16 opacity-100"
    : "h-0 opacity-0 hidden";
  const bgColor = activeIndex == null ? "bg-white" : "bg-[#e7e7e7]";
  const zIndex = isOpenModal && "relative z-30";

  useEffect(() => {
    if (!locationLt) {
      locationAPI
        .getListLocation()
        .then((res) => {
          let list = res.data.content.map((item) => {
            return {
              ...item,
              slugTenViTri: slugify(item.tenViTri),
            };
          });
          dispatch(setLocationList(list));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleSubmit = () => {
    const input = {
      locationId,
      dateStart: date[0],
      dateEnd: date[1],
    };
    if (locationId) {
      setActiveIndex(null);
      closeModal();
      navigate(`/room-location/${locationId.id}`);
    }
  };

  return (
    <div
      className={`border-2 rounded-full flex items-center transition-all ${transitionEffect} ${zIndex} ${bgColor}`}>
      {(!isMobile || activeIndex == 0) && (
        <div className="relative rounded-full h-full w-full sm:w-1/4 cursor-pointer">
          <LocationOption
            setLocationId={setLocationId}
            locationLt={locationLt}
          />
        </div>
      )}
      {(!isMobile || activeIndex == 1 || activeIndex == 2) && (
        <div className="rounded-full h-full w-full sm:w-1/2 relative flex flex-wrap sb-date-container">
          <DateOption date={date} setDate={setDate} singleCalendar={isMobile} />
        </div>
      )}
      {(!isMobile || activeIndex == 3) && (
        <div className="rounded-full h-full w-full sm:w-1/4 block cursor-pointer">
          <PeopleOption
            people={people}
            setPeople={setPeople}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
