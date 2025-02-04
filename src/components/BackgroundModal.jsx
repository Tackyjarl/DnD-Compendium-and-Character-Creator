import React, { useEffect } from "react";

import Collapsable from "./Collapsable";

function BackgroundModal({ isOpen, closeActiveModal, specificBackgroundData }) {
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

  // console.log(specificBackgroundData);

  const backgroundSkillText =
    specificBackgroundData?.starting_proficiencies?.map((skill) => (
      <li key={skill.name}>{skill.name.slice(7)}</li>
    ));

  const backgroundFeatureText = specificBackgroundData?.feature?.desc.map(
    (feature) => <li key={feature}>{feature}</li>
  );

  const personalityText =
    specificBackgroundData?.personality_traits?.from.options.map(
      (trait, index) => (
        <li key={trait.string}>
          {index + 1 + ". "}
          {trait.string}
        </li>
      )
    );

  const idealText = specificBackgroundData?.ideals?.from.options.map(
    (ideal, index) => (
      <li key={ideal.desc}>
        {index + 1 + ". "}
        {ideal.desc}
      </li>
    )
  );

  const bondText = specificBackgroundData?.bonds?.from.options.map(
    (bond, index) => (
      <li key={bond.string}>
        {" "}
        {index + 1 + ". "}
        {bond.string}
      </li>
    )
  );

  const flawText = specificBackgroundData?.flaws?.from.options.map(
    (flaw, index) => (
      <li key={flaw.string}>
        {" "}
        {index + 1 + ". "}
        {flaw.string}
      </li>
    )
  );
  // console.log(backgroundSkillText);

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
        {specificBackgroundData.name == undefined && <h2>Loading...</h2>}
        {specificBackgroundData.name !== undefined && (
          <div>
            <h2 className="modal__title">{specificBackgroundData.name}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <h4>
              You have spent your life in the service of a temple to a specific
              god or pantheon of gods. You act as an intermediary between the
              realm of the holy and the mortal world, performing sacred rites
              and offering sacrifices in order to conduct worshipers into the
              presence of the divine. You are not necessarily a cleric –
              performing sacred rites is not the same thing as channeling divine
              power.
            </h4>
            <div>
              <h4>
                Skill Proficiencies: <small>{backgroundSkillText}</small>
              </h4>
              <h4>
                Tool Proficiencies:
                <small>
                  <li>None</li>
                </small>
              </h4>
              <h4>
                Languages:{" "}
                <small>
                  <li>
                    {specificBackgroundData.language_options?.choose} of your
                    choice
                  </li>
                </small>
              </h4>
              {/* Api does not include all relevant equipment info. If more than one background is added, please update */}
              <h4>
                Equipment:{" "}
                <small>
                  <li>
                    {" "}
                    A holy symbol (a gift to you when you entered the
                    priesthood)
                  </li>
                  <li>A prayer book or prayer wheel</li>
                  <li>5 sticks of incense</li>
                  <li>Vestments</li>
                  <li>A set of common clothes</li>
                  <li>A pouch containing 15gp</li>
                </small>
              </h4>
            </div>
            <Collapsable title="Features" styleClass={"modal__button"}>
              {" "}
              <h4>
                {backgroundFeatureText}
                {personalityText}
              </h4>
            </Collapsable>
            <Collapsable
              title="Personality Traits"
              styleClass={"modal__button"}
            >
              {" "}
              <h4>
                Roll 1 or multiple 1d{personalityText?.length}(s) to determine
                your character`&apos;`s personality traits:
                {personalityText}
              </h4>
            </Collapsable>
            <Collapsable title="Ideals" styleClass={"modal__button"}>
              {" "}
              <h4>
                Roll 1 or multiple 1d{idealText?.length}(s) to determine your
                character`&apos;`s ideals:
                {idealText}
              </h4>
            </Collapsable>
            <Collapsable title="Bonds" styleClass={"modal__button"}>
              {" "}
              <h4>
                Roll 1 or multiple 1d{bondText?.length}(s) to determine your
                character`&apos;`s bonds:
                {bondText}
              </h4>
            </Collapsable>
            <Collapsable title="Flaws" styleClass={"modal__button"}>
              {" "}
              <h4>
                Roll 1 or multiple 1d{flawText?.length}(s) to determine your
                character`&apos;`s flaws:
                {flawText}
              </h4>
            </Collapsable>
          </div>
        )}
      </div>
    </div>
  );
}

export default BackgroundModal;
