import React, { useState, useEffect } from "react";
import { getRacialFeatures } from "../utils/D&DApi";
import Collapsable from "./Collapsable";

function RaceModal({
  isOpen,
  closeActiveModal,
  specificRaceData,
  handleRaceFeatureButtonClick,
}) {
  const [racialFeatureTitle, setRacialFeatureTitle] = useState("");
  const [racialFeatureDescription, setRacialFeatureDescription] = useState("");

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

  // console.log(specificRaceData);
  // console.log(specificRaceData?.traits);

  //   console.log(specificRaceData.ability_bonuses[0].ability_score.name);

  const abilityScoreText = specificRaceData?.ability_bonuses?.map((ability) => (
    <li key={ability.ability_score.name}>
      Your {ability.ability_score.name} score increases by {ability.bonus}
    </li>
  ));

  const handleRacialFeatureClick = () => {
    handleRaceFeatureButtonClick(racialFeatureTitle, racialFeatureDescription);
    getRacialFeatures(racialFeatureDescription).then((res) => {
      handleRaceFeatureButtonClick(racialFeatureTitle, res);
      // console.log(res);
    });
  };

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
        {specificRaceData.name == undefined && <h2>Loading...</h2>}
        {specificRaceData.name !== undefined && (
          <div>
            <h2 className="modal__title">{specificRaceData.name}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <h4>
              {" "}
              Ability Score Increase:
              <small>{abilityScoreText}</small>
            </h4>
            <h4>
              Age: <small>{specificRaceData?.age}</small>
            </h4>
            <h4>
              Alignment: <small>{specificRaceData?.alignment}</small>
            </h4>
            <h4>
              Size: <small>{specificRaceData.size_description}</small>
            </h4>
            <h4>
              Speed:{" "}
              <small>
                Your base walking speed is {specificRaceData.speed} feet
              </small>
            </h4>
            {specificRaceData.name !== "Human" && (
              <Collapsable title="Racial Features" styleClass={"modal__button"}>
                <div>
                  Racial Features:{" "}
                  {specificRaceData?.traits?.map((trait) => (
                    <button
                      className="modal__button_four"
                      key={trait.name}
                      onMouseEnter={() => {
                        setRacialFeatureTitle(trait.name);
                        setRacialFeatureDescription(trait.index);
                      }}
                      onClick={() => {
                        setRacialFeatureTitle(trait.name);
                        setRacialFeatureDescription(trait.index);
                        handleRacialFeatureClick();
                      }}
                      disabled={!isOpen}
                    >
                      {specificRaceData.name == "Human"
                        ? "No features for this race"
                        : trait.name}
                    </button>
                  ))}
                </div>
              </Collapsable>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RaceModal;
