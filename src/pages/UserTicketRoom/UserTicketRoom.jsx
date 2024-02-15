import React from "react";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const UserTicketRoom = () => {
  
  return <div>UserTicketRoom</div>;
};

export default UserTicketRoom;
