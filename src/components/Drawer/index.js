import React, { useEffect } from "react";

import "./drawer.scss";
import close from '../../assets/close.png'

function Drawer({ isOpen, children, closeDrawer, className = "" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <div className={`container_drawer ${isOpen ? "open" : ""}`}>
      <div className={"overlay"} onClick={closeDrawer} />

      <div className={`${className} sidebar ${isOpen ? "open" : ""}`}>
        <div className={"header"}>
          <button className={"closeButton"} onClick={closeDrawer}>
            <img src={close}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
