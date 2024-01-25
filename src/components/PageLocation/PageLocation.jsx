// import React, { useEffect, useState } from "react";
// import { axiosClient } from "../../services/modules/locationApi";

// const PageLocation = () => {
//   const [page, setPage] = useState([]);
//   useEffect(() => {
//     axiosClient
//       .getPageLocation()
//       .then((res) => {
//         console.log(res);
//         setPage(res.data.content);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div>
//       {page.map((page, index) => {
//         return (
//           <div key={index} className="grid grid-cols-4">
//             <div>
//               <img src={page.hinhAnh} alt="" />
//               <div className="flex">
//                 <p>{page.tinhThanh}</p>
//                 <p>{page.quocGia}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PageLocation;
