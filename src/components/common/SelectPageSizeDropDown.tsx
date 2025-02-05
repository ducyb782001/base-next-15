import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { MENU_ANIMATE } from "@/constants/const/animation.const";

function SelectPageSizeDropDown({ setPageSize, pageSize, listPageSize }) {
  const pageSizeNode = useRef(null);
  const [isOpenPagesize, toggleOpen] = useState(false);

  const toggleOpenMenuPagesize = () => {
    toggleOpen(!isOpenPagesize);
  };

  const handleClickOutsidePagesize = (e) => {
    // @ts-ignore
    if (pageSizeNode.current?.contains(e.target)) {
      return;
    }
    toggleOpen(false);
  };

  useEffect(() => {
    if (isOpenPagesize) {
      document.addEventListener("mousedown", handleClickOutsidePagesize);
    } else {
      document.removeEventListener("mousedown", handleClickOutsidePagesize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePagesize);
    };
  }, [isOpenPagesize]);

  return (
    <motion.div className="relative">
      <div
        ref={pageSizeNode}
        onClick={toggleOpenMenuPagesize}
        className="flex items-center justify-between h-8 gap-1 px-2 border rounded cursor-pointer border-gray/20 bg-textWhite hover:border-primary"
      >
        <div className="flex items-center gap-1 min-w-[74px]">
          <p className="text-sm text-textBlack font-semibold">{pageSize}</p>
        </div>
        <div className={`${isOpenPagesize && "rotate-180"} smooth-transform`}>
          <ArrowDownIcon />
        </div>
      </div>

      <motion.div
        initial="exit"
        animate={isOpenPagesize ? "enter" : "exit"}
        variants={MENU_ANIMATE}
        className={`absolute right-0 bottom-[100%] w-full`}
        style={{
          borderRadius: 5,
          backgroundColor: "transparent",
          transformOrigin: "50% -30px",
          zIndex: 10,
        }}
      >
        <div className="z-50 flex flex-col w-full min-w-full gap-3 py-3 mb-1 border rounded-lg shadow-md smooth-transform bg-textWhite border-gray/20">
          {listPageSize
            .sort((a, b) => b - a)
            .map((i, index) => (
              <div
                onClick={() => setPageSize(i)}
                key={index}
                className="w-full px-4 py-2 text-textBlack cursor-pointer bg-opacity-20 hover:bg-primary/10 hover:text-primary smooth-transform font-semibold"
              >
                {i}
              </div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SelectPageSizeDropDown;
