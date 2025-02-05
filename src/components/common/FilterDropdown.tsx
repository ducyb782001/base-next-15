import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DROPDOWN_ANIMATE } from "@/constants/const/animation.const";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import PrimaryInput from "./PrimaryInput";
import { search } from "@/libs/search";
import SearchIcon from "../icons/SearchIcon";

function FilterDropDown({
  title = "",
  listDropdown,
  showing,
  setShowing,
  textDefault = "",
  className = "",
  required = false,
  type = "",
  searchItem = false,
  classNameBtn = "",
  isShowClearFilter = true,
}) {
  const node = useRef(null);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const listResult = search(searchInput, listDropdown);

  const toggleOpenMenu = () => {
    if (listDropdown?.length > 0) {
      setIsToggleOpen(!isToggleOpen);
    }
  };

  const handleClickOutside = (e) => {
    // @ts-ignore
    if (node.current?.contains(e.target) || e.target.closest(".search-input")) {
      return;
    }
    setIsToggleOpen(false);
  };

  useEffect(() => {
    if (isToggleOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggleOpen]);

  return (
    <motion.div className={`relative text-black w-full ${className}`}>
      <div>
        {title && (
          <div className="mb-2 font-semibold text-xs text-textBlack">
            {title} {required && <span className="text-red-500">*</span>}
          </div>
        )}
        <button
          ref={node}
          onClick={toggleOpenMenu}
          className={`w-full text-sm flex items-center justify-between gap-2 px-2 py-3 rounded-lg outline-none h-10 text-black border border-transparent bg-bgGray smooth-transform ${
            listDropdown === undefined ? "cursor-not-allowed" : " "
          } ${classNameBtn}`}
        >
          <div className="flex items-center gap-2">
            <p className="text-[#000000] uppercase-firstletter text-sm font-semibold">
              {showing?.name || showing?.title || textDefault}
            </p>
          </div>
          <ArrowDownIcon />
        </button>
      </div>

      <motion.div
        initial="exit"
        animate={isToggleOpen ? "enter" : "exit"}
        variants={DROPDOWN_ANIMATE}
        className={`absolute right-0 w-full shadow-md`}
        style={{
          borderRadius: 5,
          backgroundColor: "#ECF1F4",
          transformOrigin: "50% -30px",
          zIndex: 1,
        }}
      >
        <div
          id="list-dropdown"
          className="smooth-transform z-50 flex w-full flex-col gap-3 rounded-xl bg-textWhite p-3"
        >
          {(searchItem || isShowClearFilter) && (
            <div
              className={`flex items-center gap-2 ${
                searchItem ? "justify-between" : "justify-end"
              }`}
            >
              {searchItem && (
                <div className="flex items-center gap-3 px-1">
                  <PrimaryInput
                    accessoriesLeft={<SearchIcon />}
                    placeholder="Search"
                    className="w-full search-input"
                    classNameInput="10"
                    classNameAccessoriesLeft="!top-2"
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    value={searchInput || ""}
                  />
                </div>
              )}
              {/* {isShowClearFilter && (
                <TButton
                  accessoriesLeft={<XIcon />}
                  type={ButtonType.CLEAR}
                  className="!h-8"
                  onClick={() => {
                    setSearchInput("");
                    setShowing(null);
                  }}
                >
                  Clear
                </TButton>
              )} */}
            </div>
          )}
          <div className="flex flex-col gap-1 overflow-y-auto scrollbar::-webkit-scrollbar-thumb max-h-[220px]">
            {listResult?.map((i, index) => (
              <DropDownItem
                key={index}
                data={i}
                setShowing={setShowing}
                showing={showing}
                toggleOpen={setIsToggleOpen}
                type={type}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FilterDropDown;

function DropDownItem({ data, showing, setShowing, toggleOpen, type }) {
  const isSelected = showing === data;

  return (
    <button
      onClick={() => {
        setShowing(data);
        toggleOpen(false);
      }}
      className={`flex items-center justify-between gap-2 w-full pr-3 p-2 font-semibold cursor-pointer bg-bgGray smooth-transform text-textBlack rounded-lg hover:bg-primary/20 text-sm ${
        isSelected && "bg-primary/30"
      }`}
    >
      {data?.name || data?.username || data?.key || data?.status || data?.title}
      {isSelected && <span>✓</span>}
    </button>
  );
}
