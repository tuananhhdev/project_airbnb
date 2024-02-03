import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import RenderRoom from "./RenderRoom";
import Map from "./Map";
import { getRoomByLocation } from "../../redux/slices/roomSlice";

const RoomLocation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomByLocation(id))
  }, [id]);
  return (
    <div className="container mx-auto">
      <div className="h-28"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RenderRoom />
        <Map />
      </div>
    </div>
  );
};

export default RoomLocation;
