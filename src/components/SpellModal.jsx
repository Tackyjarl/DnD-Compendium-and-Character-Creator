import React, { useEffect } from "react";

function SpellModal({ isOpen, closeActiveModal, specificSpellData }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // console.log("escape");
        closeActiveModal();
      }
    };

    if (!isOpen) return;

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // console.log("opened");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // console.log("closed");
    };
  }),
    [isOpen, closeActiveModal];

  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
      onClick={closeActiveModal}
    >
      <div
        className="modal__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {" "}
        {specificSpellData.name == undefined && <h2>Loading...</h2>}
        {specificSpellData.name !== undefined && (
          <div>
            <h2 className="modal__title">{specificSpellData.name}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <h4>{specificSpellData.desc}</h4>
            <li className="spell-card" style={{ listStyle: "none" }}>
              {specificSpellData.level > 0 &&
                `Level ${specificSpellData.level} `}
              {specificSpellData.school?.name}
              {specificSpellData.level === 0 && " cantrip"}
              {specificSpellData.ritual == true ? " (ritual)" : ""}
              <div className="stats">
                <h4>
                  Casting Time:
                  <small> {specificSpellData.casting_time}</small>
                </h4>
                <h4>
                  Range:
                  <small> {specificSpellData.range}</small>
                </h4>
                <h4>
                  Components:
                  <small> {specificSpellData.components?.join(", ")}</small>
                </h4>
                <h4>
                  Duration:
                  <small>
                    {specificSpellData.concentration == true
                      ? " Concentration: "
                      : ""}
                    {specificSpellData.duration}
                  </small>
                </h4>
              </div>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpellModal;
