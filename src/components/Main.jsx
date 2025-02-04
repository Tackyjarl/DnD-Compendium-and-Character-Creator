import "../blocks/Main.css";
import React, { useState } from "react";
import Collapsable from "./Collapsable";
import {
  getSpecificBackgroundData,
  getSpecificClassData,
  getSpecificClassLevelData,
  getSpecificEquipmentData,
  getSpecificMagicItemData,
  getSpecificRaceData,
  getSpecificSpellData,
  // getClassFeatures,
} from "../utils/D&DApi";

function Main({
  classData,
  handleClassButtonClick,
  handleBackgroundButtonClick,
  sendSelectedClassToParent,
  sendSelectedClassLevelToParent,
  sendSelectedBackgroundToParent,
  backgroundData,
  raceData,
  sendSelectedRaceToParent,
  handleRaceButtonClick,
  handleSpellButtonClick,
  handleEquipmentButtonClick,
  handleMagicItemButtonClick,
  sendSelectedSpellToParent,
  sendSelectedMagicItemToParent,
  sendSelectedEquipmentToParent,
  spells,
  equipmentData,
  magicItems,
}) {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedSpell, setSelectedSpell] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedMagicItem, setSelectedMagicItem] = useState("");

  const handleButtonClick = () => {
    handleClassButtonClick();
    getSpecificClassData(
      `/api/classes/${selectedClass.name.toLowerCase()}`
    ).then((res) => {
      // console.log(res);
      // console.log(selectedClass);
      sendSelectedClassToParent(res);
    });
    getSpecificClassLevelData(
      `/api/classes/${selectedClass.name.toLowerCase()}`
    ).then((res) => {
      // console.log(res);
      // console.log(selectedClass);
      sendSelectedClassLevelToParent(res);
    });
  };
  const handleSpellClick = () => {
    handleSpellButtonClick();
    getSpecificSpellData(selectedSpell).then((res) => {
      sendSelectedSpellToParent(res);
    });
  };

  const handleBackgroundClick = () => {
    handleBackgroundButtonClick();
    getSpecificBackgroundData(selectedBackground.name.toLowerCase()).then(
      (res) => {
        sendSelectedBackgroundToParent(res);
      }
    );
  };

  const handleRaceClick = () => {
    handleRaceButtonClick();
    getSpecificRaceData(selectedRace.name.toLowerCase()).then((res) => {
      sendSelectedRaceToParent(res);
    });
  };

  const handleEquipmentClick = () => {
    handleEquipmentButtonClick();
    getSpecificEquipmentData(selectedEquipment).then((res) => {
      sendSelectedEquipmentToParent(res);
    });
  };

  const handleMagicItemClick = () => {
    handleMagicItemButtonClick();
    getSpecificMagicItemData(selectedMagicItem).then((res) => {
      sendSelectedMagicItemToParent(res);
    });
  };

  const range = (start, stop, step) =>
    Array.from(
      { length: Math.ceil((stop - start) / step) },
      (_, i) => start + i * step
    );

  const casterClassList = [
    "Bard",
    "Cleric",
    "Druid",
    "Paladin",
    "Ranger",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  const spellSchoolList = [
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation",
  ];

  // console.log(equipmentData);
  // console.log(magicItems);

  return (
    <main>
      <Collapsable title="Class" styleClass={"modal__button"}>
        <div>
          {classData.map((characterClass) => (
            <button
              className="modal__button_four"
              onMouseEnter={() => setSelectedClass(characterClass)}
              onClick={() => handleButtonClick(characterClass)}
              key={characterClass.name}
            >
              {characterClass.name}
            </button>
          ))}
        </div>
      </Collapsable>{" "}
      <Collapsable title="Background" styleClass={"modal__button"}>
        {" "}
        <div className="modal__button_container">
          {backgroundData.map((background) => (
            <button
              className="modal__button_four"
              key={background.name}
              onMouseEnter={() => setSelectedBackground(background)}
              onClick={() => handleBackgroundClick(background)}
            >
              {background.name}
            </button>
          ))}
        </div>
      </Collapsable>{" "}
      <Collapsable title="Race" styleClass={"modal__button"}>
        <div className="modal__button_container">
          {raceData.map((race) => (
            <button
              className="modal__button_four"
              key={race.name}
              onMouseEnter={() => setSelectedRace(race)}
              onClick={() => handleRaceClick(race)}
            >
              {race.name}
            </button>
          ))}
        </div>
      </Collapsable>{" "}
      <Collapsable title="Spells" styleClass={"modal__button"}>
        <Collapsable title="Spells by Level" styleClass={"modal__button_four"}>
          <div className="modal__button_container">
            {range(0, 10, 1).map((x) => (
              <Collapsable
                title={x > 0 ? "Level" + " " + x : "Cantrip"}
                key={x}
                styleClass={"modal__button_one"}
              >
                {" "}
                <div>
                  {spells.length === 0 && <span>Loading...</span>}

                  <div className="modal__button_container">
                    {spells.map((spell) => (
                      <button
                        className="modal__button_two"
                        key={spell.name + 2}
                        style={{
                          display: spell.level !== x ? "none" : "block",
                        }}
                        onMouseEnter={() => setSelectedSpell(spell.index)}
                        onClick={() => handleSpellClick(spell.index)}
                      >
                        {spell.level == x ? spell.name : ""}
                      </button>
                    ))}
                  </div>
                </div>
              </Collapsable>
            ))}
          </div>
        </Collapsable>
        <Collapsable title="Spells by Class" styleClass={"modal__button_four"}>
          <div className="modal__button_container">
            {casterClassList.map((caster) => (
              <Collapsable
                title={caster}
                key={caster}
                styleClass={"modal__button_three"}
              >
                <div className={"modal__button_container"}>
                  {range(0, 10, 1).map((x) => (
                    <Collapsable
                      title={x > 0 ? "Level" + " " + x : "Cantrip"}
                      key={x + 10}
                      styleClass={"modal__button_one"}
                    >
                      <div>
                        {spells.length === 0 && <span>Loading...</span>}

                        <div>
                          {spells.map((spell) =>
                            spell.classes.map((classId) =>
                              classId.name == caster
                                ? spell.level == x && (
                                    <button
                                      className="modal__button_two"
                                      key={spell.name + 3}
                                      onMouseEnter={() =>
                                        setSelectedSpell(spell.index)
                                      }
                                      onClick={() =>
                                        handleSpellClick(spell.index)
                                      }
                                    >
                                      {spell.name}
                                    </button>
                                  )
                                : ""
                            )
                          )}
                        </div>
                      </div>
                    </Collapsable>
                  ))}
                </div>
              </Collapsable>
            ))}
          </div>
        </Collapsable>
        <Collapsable title="Spells by School" styleClass={"modal__button_four"}>
          {" "}
          <div className="modal__button_container">
            {spellSchoolList.map((schoolType) => (
              <Collapsable
                title={schoolType}
                key={schoolType}
                styleClass={"modal__button_three"}
              >
                <div className="modal__button_container">
                  {range(0, 10, 1).map((x) => (
                    <Collapsable
                      title={x > 0 ? "Level" + " " + x : "Cantrip"}
                      key={x + 20}
                      styleClass={"modal__button_one"}
                    >
                      <div>
                        {spells.length === 0 && <span>Loading...</span>}

                        <div>
                          {spells.map((spell) =>
                            spell.school.name == schoolType
                              ? spell.level == x && (
                                  <button
                                    className="modal__button_two"
                                    key={spell.name + 4}
                                    onMouseEnter={() =>
                                      setSelectedSpell(spell.index)
                                    }
                                    onClick={() =>
                                      handleSpellClick(spell.index)
                                    }
                                  >
                                    {spell.name}
                                  </button>
                                )
                              : ""
                          )}
                        </div>
                      </div>
                    </Collapsable>
                  ))}
                </div>
              </Collapsable>
            ))}
          </div>
        </Collapsable>
      </Collapsable>{" "}
      <Collapsable title="Equipment" styleClass={"modal__button"}>
        <div className="modal__button_container">
          <Collapsable
            title={"Adventuring Gear"}
            styleClass={"modal__button_four"}
          >
            {equipmentData.map((equipment) =>
              equipment.equipment_category.name == "Adventuring Gear" ? (
                <button
                  className="modal__button_three"
                  key={equipment.index}
                  onMouseEnter={() => setSelectedEquipment(equipment.index)}
                  onClick={() => handleEquipmentClick(equipment.index)}
                >
                  {equipment.name}
                </button>
              ) : (
                ""
              )
            )}
          </Collapsable>
          <Collapsable
            title={"Armor and Shields"}
            styleClass={"modal__button_four"}
          >
            {" "}
            {equipmentData.map((equipment) =>
              equipment.equipment_category.name == "Armor" ? (
                <button
                  className="modal__button_three"
                  key={equipment.index}
                  onMouseEnter={() => setSelectedEquipment(equipment.index)}
                  onClick={() => handleEquipmentClick(equipment.index)}
                >
                  {equipment.name}
                </button>
              ) : (
                ""
              )
            )}
          </Collapsable>
          <Collapsable title={"Weapons"} styleClass={"modal__button_four"}>
            {equipmentData.map((equipment) =>
              equipment.equipment_category.name == "Weapon" ? (
                <button
                  className="modal__button_three"
                  key={equipment.index}
                  onMouseEnter={() => setSelectedEquipment(equipment.index)}
                  onClick={() => handleEquipmentClick(equipment.index)}
                >
                  {equipment.name}
                </button>
              ) : (
                ""
              )
            )}
          </Collapsable>
          <Collapsable title={"Magic Items"} styleClass={"modal__button_four"}>
            <div className="modal__button_container">
              {range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) => (
                <Collapsable
                  title={String.fromCharCode(x)}
                  key={x}
                  styleClass={"modal__button_three"}
                >
                  <div>
                    {magicItems.length === 0 && <span>Loading...</span>}
                    <div>
                      {" "}
                      {magicItems.map((item) => (
                        <button
                          className="modal__button_one"
                          key={item}
                          onMouseEnter={() => setSelectedMagicItem(item.index)}
                          onClick={() => handleMagicItemClick(item.index)}
                          style={{
                            display:
                              item.name.at(0) !== String.fromCharCode(x)
                                ? "none"
                                : "block",
                          }}
                        >
                          {item.name.at(0) == String.fromCharCode(x)
                            ? item.name
                            : ""}
                        </button>
                      ))}
                    </div>
                  </div>
                </Collapsable>
              ))}
            </div>
          </Collapsable>
          <Collapsable title={"Tools"} styleClass={"modal__button_four"}>
            {" "}
            {equipmentData.map((equipment) =>
              equipment.equipment_category.name == "Tools" ? (
                <button
                  className="modal__button_three"
                  key={equipment.index}
                  onMouseEnter={() => setSelectedEquipment(equipment.index)}
                  onClick={() => handleEquipmentClick(equipment.index)}
                >
                  {equipment.name}
                </button>
              ) : (
                ""
              )
            )}
          </Collapsable>
          <Collapsable
            title={"Mounts and Vehicles"}
            styleClass={"modal__button_four"}
          >
            {" "}
            {equipmentData.map((equipment) =>
              equipment.equipment_category.name == "Mounts and Vehicles" ? (
                <button
                  className="modal__button_three"
                  key={equipment.index}
                  onMouseEnter={() => setSelectedEquipment(equipment.index)}
                  onClick={() => handleEquipmentClick(equipment.index)}
                >
                  {equipment.name}
                </button>
              ) : (
                ""
              )
            )}
          </Collapsable>
        </div>
      </Collapsable>{" "}
    </main>
  );
}

export default Main;
