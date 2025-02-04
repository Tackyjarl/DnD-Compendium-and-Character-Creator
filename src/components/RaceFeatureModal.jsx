import React, { useEffect } from "react";
import { draconicAncestryTable } from "../utils/constants/constants";

function RaceFeatureModal({
  isOpen,
  closeActiveModal,
  titleText,
  featureDescriptionInfo,
}) {
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

  const featuresDescription = featureDescriptionInfo?.desc?.map((item) => (
    <li key={item}>{item}</li>
  ));

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
        {featuresDescription == undefined && <h2>Loading...</h2>}
        {featuresDescription !== undefined && (
          <div>
            <h2 className="modal__title">{titleText}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <h4>{featuresDescription}</h4>
            {/* The Draconic Ancestry feature is the only feature that requires extra text. 
        If any additional features require them, this will be updated */}
            <table
              style={{
                display:
                  featureDescriptionInfo?.name == "Draconic Ancestry"
                    ? "block"
                    : "none",
              }}
            >
              <thead>
                <tr>
                  <th>Dragon Color</th>
                  <th>Damage Type</th>
                  <th>Breath Weapon</th>
                </tr>
              </thead>
              <tbody>
                {draconicAncestryTable.map((item) => (
                  <tr key={item.color}>
                    <td>{item.color}</td>
                    <td>{item.damage_type}</td>
                    <td>{item.breath}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default RaceFeatureModal;
