import React, { useEffect } from "react";

function ProfileModal({ isOpen, closeActiveModal }) {
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
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>
        <h2>
          This feature is not yet available! Please check back in the future.
        </h2>
      </div>
    </div>
  );
}

export default ProfileModal;
