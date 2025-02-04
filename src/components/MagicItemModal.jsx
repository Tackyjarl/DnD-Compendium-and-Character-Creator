import React, { useEffect } from "react";

function MagicItemModal({ isOpen, closeActiveModal, specificMagicItemData }) {
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
        {specificMagicItemData.name == undefined && <h2>Loading...</h2>}
        {specificMagicItemData.name !== undefined && (
          <div>
            <h2 className="modal__title">{specificMagicItemData.name}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <div>
              {specificMagicItemData.desc?.map((desc) => (
                <h4 key={desc}>{desc}</h4>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MagicItemModal;
