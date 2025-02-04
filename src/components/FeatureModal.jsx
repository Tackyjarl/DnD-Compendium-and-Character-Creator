import React, { useEffect } from "react";

function FeatureModal({
  isOpen,
  closeActiveModal,
  titleText,
  featureDescriptionInfo,
  spellcastingData,
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

  //   console.log(featureDescriptionInfo.desc);
  //   console.log(spellcastingData.info?.map((item) => item.desc));

  const featuresDescription = featureDescriptionInfo?.desc?.map((item) => (
    <li key={item}>{item}</li>
  ));

  const spellcastingDescription = spellcastingData?.info?.map((item, index) => (
    <li key={index}>{item.desc}</li>
  ));
  //   console.log(spellcastingDescription);

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
            <h4>{spellcastingDescription}</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureModal;
