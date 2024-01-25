// import React from "react";
// import {
//   Box,
//   Divider,
//   FormControl,
//   FormLabel,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// const SearchLocation = () => {
//   const SearchBarMobile = () => {
//     const navigate = useNavigate();
//     return (
//       <Box
//         className="search-bar-mobile"
//         sx={{ display: { xs: "block", sm: "none" } }}>
//         <IconButton
//           className="search-bar__search-btn"
//           onClick={handleOpenModal}>
//           <SearchIcon />
//         </IconButton>
//         <div className="search-bar__content" onClick={handleOpenModal}>
//           <h3 className="search-bar__title">Where to?</h3>
//           <ul className="search-bar__text-wrapper">
//             {searchTabsMobile.map((item, index) => (
//               <li className="search-bar__text" key={index}>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <IconButton
//           className="search-bar__filter-btn"
//           onClick={handleOpenModal}>
//           <TuneIcon />
//         </IconButton>
//       </Box>
//     );
//   };
//   return (
//     <div className="home-page__search-bar">
//       {/* Search for PC + Tablet starts */}
//       <Box
//         className="search-bar-pc-tablet search-bar__form"
//         component="form"
//         sx={{ display: { xs: "none", sm: "flex" } }}
//         onSubmit={handleSubmit}>
//         <Box className="search-bar__input-wrapper" sx={{ flex: 1.2 }}>
//           <FormControl className="search-bar__input-control search-bar__input-control--where">
//             <FormLabel className="search-bar__input-label">Where</FormLabel>
//             <TextField
//               className="search-bar__input"
//               placeholder="Search destinations"
//               variant="outlined"
//               value={searchData}
//               onChange={(e) => setSearchData(e.target.value)}
//               onClick={() => setIsActiveSearchResult(true)}
//             />
//           </FormControl>
//           {isActiveSearchResult && (
//             <div
//               className="search-bar__result-list"
//               onClick={() => setIsActiveSearchResult(true)}>
//               {renderPosition(
//                 resultList,
//                 filteredValues,
//                 setFilteredValues,
//                 setSearchData,
//                 setIsActiveSearchResult
//               )}
//             </div>
//           )}
//         </Box>
//         <Divider
//           className="search-bar__divider"
//           orientation="vertical"
//           variant="middle"
//           flexItem
//         />
//         <Box className="search-bar__input-wrapper" sx={{ flex: 1 }}>
//           <FormControl
//             className="search-bar__input-control search-bar__input-control--where"
//             onClick={() => setIsActiveSearchResult(false)}>
//             <FormLabel className="search-bar__input-label">Check in</FormLabel>
//             <DesktopDatePicker
//               value={checkInTime}
//               onChange={(newValue) => {
//                 setCheckInTime(newValue);
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   className="search-bar__input search-bar__input--date-picker"
//                   {...params}
//                 />
//               )}
//               sx={datePickerStyle}
//             />
//           </FormControl>
//         </Box>
//         <Divider
//           className="search-bar__divider"
//           orientation="vertical"
//           variant="middle"
//           flexItem
//         />
//         <Box className="search-bar__input-wrapper" sx={{ flex: 1 }}>
//           <FormControl
//             className="search-bar__input-control search-bar__input-control--where"
//             onClick={() => setIsActiveSearchResult(false)}>
//             <FormLabel className="search-bar__input-label">Check out</FormLabel>
//             <DesktopDatePicker
//               value={checkOutTime}
//               onChange={(newValue) => {
//                 setCheckOutTime(newValue);
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   className="search-bar__input search-bar__input--date-picker"
//                   {...params}
//                 />
//               )}
//               sx={datePickerStyle}
//             />
//           </FormControl>
//         </Box>
//         <Divider
//           className="search-bar__divider"
//           orientation="vertical"
//           variant="middle"
//           flexItem
//         />
//         <Box
//           className="search-bar__input-wrapper search-bar__input-wrapper--last"
//           sx={{ flex: 1.2 }}>
//           <FormControl
//             className="search-bar__input-control search-bar__input-control--where"
//             ia-describedby={id}
//             onClick={handleClick}>
//             <FormLabel className="search-bar__input-label">Who</FormLabel>
//             <Typography className="search-bar__input-placeholder">
//               Add guests
//             </Typography>
//           </FormControl>
//           <GuestInputField
//             id={id}
//             open={open}
//             anchorEl={anchorEl}
//             guestNumber={guestNumber}
//             setGuestNumber={setGuestNumber}
//             onHandleTotalGuest={calculateTotalGuest}
//           />
//           <SubmitBtn
//             className="seacrh-bar__form-btn"
//             startIcon={<Search />}
//             variant="contained"></SubmitBtn>
//         </Box>
//       </Box>
//       {/* Search for PC + Tablet ends */}

//       <SearchBarMobile />
//       <SearchModalMobile
//         onOpen={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         guestNumber={guestNumber}
//         setGuestNumber={setGuestNumber}
//         searchData={searchData}
//         setSearchData={setSearchData}
//         resultList={resultList}
//         setResultList={setResultList}
//         filteredValues={filteredValues}
//         setFilteredValues={setFilteredValues}
//         isActiveSearchResult={isActiveSearchResult}
//         setIsActiveSearchResult={setIsActiveSearchResult}
//         onHandleTotalGuest={calculateTotalGuest}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default SearchLocation;
