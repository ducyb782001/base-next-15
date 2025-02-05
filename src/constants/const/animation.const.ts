export const MENU_ANIMATE = {
  enter: {
    opacity: 1,
    rotateX: 0,
    y: -5,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.2,
      delay: 0.05,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const DROPDOWN_ANIMATE = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.2,
      delay: 0.05,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

export const EXPAND_COLLAPSE_VARIENT = {
  open: { opacity: 1, height: "auto" },
  collapsed: {
    opacity: 0,
    height: 0,
  },
};
