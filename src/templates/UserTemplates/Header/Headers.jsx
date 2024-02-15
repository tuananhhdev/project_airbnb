import React, { useEffect, useState, useRef } from "react";
import useModal from "./Modal/useModal";
import { useWindowWidth } from "@react-hook/window-size";
import useActiveInput from "./SearchBar/SearchOption/useActiveInput";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import NormalSearchbar from "./SearchBar/NormalSearchBar";
import ExpandSearchbar from "./SearchBar/ExpandSearchBar";

export default function Headers({ searchBar }) {
  const { isOpenModal } = useModal();
  const expandSearchBar = isOpenModal;
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth >= 640;

  const ref1 = useRef();
  const ref2 = useRef();
  const { setActiveIndex } = useActiveInput();
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === ref1.current || ref2.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };
    if (expandSearchBar && !isMobile) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [expandSearchBar]);
  const renderSeachBar = () => {
    if (isMobile) {
      return <NormalSearchbar />;
    } else if (searchBar && !expandSearchBar) {
      return <NormalSearchbar />;
    } else if (searchBar && expandSearchBar) {
      return <ExpandSearchbar />;
    }
  };
  const height = searchBar && expandSearchBar ? 16 : 0;
  return (
    <div
      className="flex justify-between h-fit flex-wrap py-5 space-y-2"
      ref={ref1}>
      <div className="flex items-center justify-between w-full" ref={ref2}>
        <div className="logo w-fit xl:w-1/3 hidden lg:block">
          <Logo />
        </div>
        <div className="search-bar w-fit mx-auto">{renderSeachBar()}</div>
        <div className="nav items-center justify-end w-1/3 hidden lg:flex">
          <NavBar />
        </div>
      </div>
      <div
        className={`w-full max-w-5xl mx-auto bg-white transition-all h-${height}`}>
        <SearchBar />
      </div>
    </div>
  );
}
