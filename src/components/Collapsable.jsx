import React from "react";
import { useState } from "react";

const Collapsable = ({ title, children, styleClass }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      {" "}
      <button onClick={toggle} className={styleClass}>
        {title}
      </button>
      {open && <div className="toggle">{children}</div>}
    </div>
  );
};

export default Collapsable;
