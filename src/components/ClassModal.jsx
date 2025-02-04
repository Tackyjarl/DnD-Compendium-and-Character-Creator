import "../blocks/ClassModal.css";
import React from "react";
import { useState, useEffect } from "react";
import { proficiencyMapping } from "../utils/constants/proficiencies";
import {
  featureLevelMapping,
  featureLevelsList,
} from "../utils/constants/featureLevels";
import {
  getClassFeatures,
  getSpellcastingData,
  getSubclassData,
  getSubclassLevelData,
} from "../utils/D&DApi";
import Collapsable from "./Collapsable";

function ClassModal({
  isOpen,
  closeActiveModal,
  classModalTitle,
  characterClassData,
  characterClassLevelData,
  handleFeatureButtonClick,
  handleSpellcastingInfo,
  handleSubclassButtonClick,
  handleSubclassLevelData,
}) {
  const [tool, setTool] = useState("None");
  const [armor, setArmor] = useState("None");
  const [savingThrow, setSavingThrow] = useState("None");
  const [weapons, setWeapons] = useState("None");
  const [skills, setSkills] = useState("None");
  const [equipmentOptions, setEquipmentOptions] = useState("None");
  const [startingEquipment, setStartingEquipment] = useState("");
  const [featuresFirstHalf, setFeaturesFirstHalf] = useState("");
  const [featuresSecondHalf, setFeaturesSecondHalf] = useState("");
  const [featureIndexOne, setFeatureIndexOne] = useState("");
  const [featureIndexTwo, setFeatureIndexTwo] = useState("");
  const [titleData, setTitleData] = useState("");
  const [featureDescription, setFeatureDescription] = useState("");
  const [subclass, setSubclass] = useState("");
  const [subclassDescription, setSubclassDescription] = useState("");
  const [subclassLevels, setSubclassLevels] = useState("");

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

  function getCharacterText() {
    getSavingThrowText();
    getArmorText();
    getToolText();
    getWeaponText();
    getSkillText();
    getEquipmentOptions([]);
    getStartingEquipment();
    getFeatureText();
    getSubclassInfo();
  }

  const getSavingThrowText = () => {
    let savingThrowText = [];
    // console.log(characterClassData);
    characterClassData.proficiencies?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (proficiencyMapping[proficiencyChoice.name] == "Saving Throws") {
        savingThrowText.push(proficiencyChoice.name.slice(13));
      } else if (
        proficiencyMapping[proficiencyChoice.name] !== "Saving Throws"
      ) {
        return;
      }
    });
    const joinedSavingThrowText = savingThrowText.join(", ");
    setSavingThrow(joinedSavingThrowText);
    // console.log(savingThrowText);
    // console.log(joinedSavingThrowText);
  };

  // console.log(characterClassData);
  // const armorTextTest = characterClassData.proficiencies?.map((proficiency) => (<li></li>))

  const getArmorText = () => {
    let armorText = [];
    characterClassData.proficiencies?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (proficiencyMapping[proficiencyChoice.name] == "Armor") {
        armorText.push(proficiencyChoice.name);
      } else if (proficiencyMapping[proficiencyChoice.name] !== "Armor") {
        return;
      }
    });
    const joinedArmorText = armorText.join(", ");
    // console.log(armorText);
    // console.log(joinedArmorText);
    setArmor(joinedArmorText);
    // console.log(armor);
  };

  const getToolText = () => {
    characterClassData.proficiency_choices?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (
        proficiencyMapping[
          proficiencyChoice.from.options[0].choice?.from.options[0].item.name
        ] == undefined
      ) {
        setTool("None");
      }
      if (
        proficiencyMapping[
          proficiencyChoice.from.options[0].choice?.from.options[0].item.name
        ] == "Tool"
      ) {
        setTool(proficiencyChoice.desc);
      } else if (
        proficiencyMapping[proficiencyChoice.from.options[0].item?.name] ==
        "Tool"
      ) {
        setTool(proficiencyChoice.desc);
      }
    });
    characterClassData.proficiencies?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (proficiencyMapping[proficiencyChoice.name] == "Tool") {
        setTool(proficiencyChoice.name);
      } else if (proficiencyMapping[proficiencyChoice.name] !== "Tool") {
        return;
      }
    });
  };

  const getWeaponText = () => {
    let weaponsText = [];
    characterClassData.proficiencies?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (proficiencyMapping[proficiencyChoice.name] == "Weapons") {
        weaponsText.push(proficiencyChoice.name);
      } else if (proficiencyMapping[proficiencyChoice.name] !== "Weapons") {
        return;
      }
    });
    const joinedWeaponsText = weaponsText.join(", ");
    setWeapons(joinedWeaponsText);
  };

  const getSkillText = () => {
    characterClassData.proficiency_choices?.forEach((proficiencyChoice) => {
      if (!isOpen) {
        return;
      }
      if (
        proficiencyMapping[proficiencyChoice.from.options[0].item?.name] ==
        "Skills"
      ) {
        setSkills(proficiencyChoice.desc);
      }
    });
  };

  const getEquipmentOptions = () => {
    if (!isOpen) {
      return;
    }
    let equipmentOptionText = [];
    characterClassData.starting_equipment_options?.forEach(
      (equipmentOption) => {
        if (proficiencyMapping[equipmentOption.type] == "Equipment") {
          equipmentOptionText.push(equipmentOption.desc);
        } else if (proficiencyMapping[equipmentOption.type] !== "Equipment") {
          return;
        }
      }
    );
    // console.log(equipmentOptionText);
    const equipmentOptionList = equipmentOptionText.join(", ");
    // console.log(equipmentOptionList);
    setEquipmentOptions(equipmentOptionList);
    // console.log(equipmentOptions);
  };

  const getStartingEquipment = () => {
    let startingEquipmentOptionText = [];
    characterClassData.starting_equipment?.forEach((equipmentOption) => {
      if (
        equipmentOption.quantity !== 1 &&
        equipmentOption.equipment.url.includes("equipment") === true
      ) {
        startingEquipmentOptionText.push(
          equipmentOption.quantity + " " + equipmentOption.equipment.name
        );
        // console.log(startingEquipmentOptionText);
      } else if (equipmentOption.equipment.url.includes("equipment") === true) {
        startingEquipmentOptionText.push(equipmentOption.equipment.name);
      }
    });
    const startingEquipmentList = startingEquipmentOptionText.join(", ");
    setStartingEquipment(startingEquipmentList);
    // console.log(startingEquipment);
  };

  const getSubclassInfo = () => {
    let subclassOptionText = [];
    characterClassData.subclasses?.forEach((subclass) => {
      subclassOptionText.push(subclass.name);
    });
    // console.log(subclassOptionText);
    const subclassList = subclassOptionText.join(", ");
    setSubclass(subclassList);
  };

  const equipmentOptionListUnordered = equipmentOptions
    .split("(a)")
    .filter((item) => item !== "")
    .map((options) => (
      <li key={options}>
        {options.charAt(1).toUpperCase() + options.substring(2)}
      </li>
    ));

  const startingEquipmentListUnordered = startingEquipment
    .split(", ")
    .filter((item) => item !== "")
    .map((equipment) => <li key={equipment}>{equipment}</li>);

  const getFeatureText = () => {
    let featureText1 = [];
    let featureText2 = [];
    let featureIndex1 = [];
    let featureIndex2 = [];
    characterClassLevelData?.forEach((levelId) => {
      if (!isOpen) {
        return;
      }
      if (featureLevelMapping[levelId.level] == "level") {
        // console.log(levelId[0].features.index);

        featureText1.push(
          levelId.features.slice(0, 1).map((name) => name.name)
        );

        featureIndex1.push(
          levelId.features.slice(0, 1).map((name) => name.index)
        );
        // console.log(featureIndex1);

        featureText2.push(levelId.features.slice(1).map((name) => name.name));
        // console.log(featureText2);

        featureIndex2.push(levelId.features.slice(1).map((name) => name.index));
      }
    });
    const joinedFeatureTextFirstHalf = featureText1.join(", ");
    const joinedFeatureTextSecondHalf = featureText2.join(", ");

    const joinedFeatureIndex1 = featureIndex1.join(", ");
    const joinedFeatureIndex2 = featureIndex2.join(", ");

    setFeaturesFirstHalf(joinedFeatureTextFirstHalf);
    setFeaturesSecondHalf(joinedFeatureTextSecondHalf);

    setFeatureIndexOne(joinedFeatureIndex1);
    setFeatureIndexTwo(joinedFeatureIndex2);
    // console.log(featureIndexOne);
  };

  // console.log(characterClassLevelData[0].level);

  const featureTextUnorderedFirstHalf = featuresFirstHalf
    .split(", ")
    .map((feature) => {
      if (feature == "") {
        return "No features at this level";
      } else {
        return feature;
      }
    });

  const featureTextUnorderedSecondHalf = featuresSecondHalf
    .split(", ")
    .map((feature) => {
      return feature;
    });

  const featureIndexUnorderedOne = featureIndexOne
    .split(", ")
    .map((feature) => {
      if (feature == "") {
        return "No features at this level";
      } else {
        return feature;
      }
    });

  const featureIndexUnorderedTwo = featureIndexTwo
    .split(", ")
    .map((feature) => {
      return feature;
    });

  // console.log(featureIndexUnorderedOne);

  const handleFeatureClick = () => {
    // console.log(titleData);
    handleFeatureButtonClick(titleData, featureDescription);
    getClassFeatures(featureDescription).then((res) => {
      handleFeatureButtonClick(titleData, res);
      // console.log(res);
    });
    if (featureDescription.includes("spellcasting")) {
      getSpellcastingData(characterClassData.name.toLowerCase()).then((res) => {
        handleSpellcastingInfo(res);
      });
    } else {
      handleSpellcastingInfo("No spells");
    }
  };

  const handleSubclassClick = () => {
    // console.log(subclassDescription);
    // console.log(subclassLevels);
    getSubclassData(subclassDescription).then((res) => {
      handleSubclassButtonClick(res);
      // console.log(res);
    });
    getSubclassLevelData(subclassLevels).then((res) => {
      handleSubclassLevelData(res);
      // console.log(res);
    });
  };

  // console.log(characterClassData.subclasses);

  useEffect(() => {
    if (isOpen) {
      getCharacterText();
    }
  }),
    [];
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
        {characterClassData.name == undefined && <h2>Loading...</h2>}
        {characterClassData.name !== undefined && (
          <div>
            <button
              className="modal__close"
              type="button"
              onClick={closeActiveModal}
            />
            <h1 className="modal__title">{classModalTitle}</h1>
            <h2>Class Features</h2>
            <p>
              As a {characterClassData.name}, you gain the following class
              features
            </p>
            <h3>Hit Points</h3>
            <h4>
              Hit Die:{" "}
              <small>
                1d{characterClassData.hit_die} per {characterClassData.name}{" "}
                level{" "}
              </small>
            </h4>
            <h4>
              Hit Points at 1st Level:{" "}
              <small>
                {characterClassData.hit_die} + your Constitution modifier{" "}
              </small>
            </h4>
            <h4>
              Hit Points at Higher Levels:{" "}
              <small>
                1d{characterClassData.hit_die} (or{" "}
                {characterClassData.hit_die / 2 + 1}) + your Constitution
                modifier per {characterClassData.name} level after 1st{" "}
              </small>
            </h4>
            <h3>Proficiencies</h3>
            <div>
              <h4>
                Armor: <small>{armor}</small>
              </h4>
              <h4>
                Weapons: <small>{weapons}</small>
              </h4>
              <h4>
                Tools: <small>{tool}</small>
              </h4>
              <h4>
                Saving Throws: <small>{savingThrow}</small>
              </h4>
              <h4>
                Skills: <small>{skills}</small>
              </h4>
              <h4>
                Starting Equipment:{" "}
                <ul>
                  <small>{equipmentOptionListUnordered}</small>
                  <small>{startingEquipmentListUnordered}</small>
                </ul>
              </h4>
              <Collapsable title="Features" styleClass={"modal__button"}>
                <div className="modal__button_container">
                  {" "}
                  Features:{" "}
                  {featureLevelsList.map((level) => (
                    // <button>{level}</button>
                    <Collapsable
                      title={"Level " + (level + 1)}
                      key={level}
                      styleClass={"modal__button_four"}
                    >
                      <button
                        className="modal__button_three"
                        style={{
                          visibility:
                            featureTextUnorderedFirstHalf[level] !== ""
                              ? "visible"
                              : "hidden",
                        }}
                        disabled={
                          featureTextUnorderedFirstHalf[level] ==
                          "No features at this level"
                            ? true
                            : false || !isOpen
                        }
                        onMouseEnter={() => {
                          setTitleData(featureTextUnorderedFirstHalf[level]);
                          setFeatureDescription(
                            featureIndexUnorderedOne[level]
                          );
                          // console.log(featureDescription);
                        }}
                        onClick={() => {
                          setTitleData(featureTextUnorderedFirstHalf[level]);
                          setFeatureDescription(
                            featureIndexUnorderedOne[level]
                          );
                          // console.log(featureDescription);

                          handleFeatureClick();
                        }}
                      >
                        {featureTextUnorderedFirstHalf[level]}{" "}
                      </button>{" "}
                      <button
                        className="modal__button_three"
                        style={{
                          visibility:
                            featureTextUnorderedSecondHalf[level] !== ""
                              ? "visible"
                              : "hidden",
                        }}
                        disabled={!isOpen}
                        onMouseEnter={() => {
                          setTitleData(featureTextUnorderedSecondHalf[level]);
                          setFeatureDescription(
                            featureIndexUnorderedTwo[level]
                          );
                        }}
                        onClick={() => {
                          setTitleData(featureTextUnorderedFirstHalf[level]);
                          setFeatureDescription(
                            featureIndexUnorderedTwo[level]
                          );
                          handleFeatureClick();
                        }}
                      >
                        {featureTextUnorderedSecondHalf[level]}
                      </button>
                    </Collapsable>
                  ))}
                </div>
              </Collapsable>
              <Collapsable title="Subclasses" styleClass={"modal__button"}>
                <button
                  className="modal__button_four"
                  onMouseEnter={() => {
                    setSubclassDescription(subclass.toLowerCase());
                    setSubclassLevels(subclass.toLowerCase());
                  }}
                  onClick={() => {
                    setSubclassDescription(subclass.toLowerCase());
                    setSubclassLevels(subclass.toLowerCase());
                    // console.log(subclass.toLowerCase());
                    handleSubclassClick();
                  }}
                  disabled={!isOpen}
                >
                  {subclass}
                </button>
              </Collapsable>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassModal;
