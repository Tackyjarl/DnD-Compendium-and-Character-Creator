import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/App.css";
import {
  getBackgroundData,
  getClassData,
  getEquipmentData,
  getMagicItemData,
  getRaceData,
  getSpellData,
} from "../utils/D&DApi.js";

// components
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import ClassModal from "./ClassModal.jsx";
import FeatureModal from "./FeatureModal.jsx";
import SubclassModal from "./SubclassModal.jsx";
import BackgroundModal from "./BackgroundModal.jsx";
import RaceModal from "./RaceModal.jsx";
import RaceFeatureModal from "./RaceFeatureModal.jsx";
import SpellModal from "./SpellModal.jsx";
import MagicItemModal from "./MagicItemModal.jsx";
import EquipmentModal from "./EquipmentModal.jsx";
import CreationForm from "./CreationForm.jsx";
import ProfileModal from "./ProfileModal.jsx";

function App() {
  const [classData, setClassData] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [characterClassData, setCharacterClassData] = useState("");
  const [characterClassLevelData, setCharacterClassLevelData] = useState([]);
  const [featureButtonTitle, setFeatureButtonTitle] = useState("");
  const [featureDescriptionInfo, setFeatureDescriptionInfo] = useState("");
  const [raceFeatureButtonTitle, setRaceFeatureButtonTitle] = useState("");
  const [raceFeatureDescriptionInfo, setRaceFeatureDescriptionInfo] =
    useState("");
  const [spellcastingData, setSpellcastingData] = useState("");
  const [subclassDescriptionInfo, setSubclassDescrptionInfo] = useState("");
  const [subclassLevelData, setSubclassLevelData] = useState([]);
  const [backgroundData, setBackgroundData] = useState([]);
  const [specificBackgroundData, setSpecificBackgroundData] = useState([]);
  const [raceData, setRaceData] = useState([]);
  const [specificRaceData, setSpecificRaceData] = useState([]);
  const [spells, setSpells] = useState([]);
  const [specificSpellData, setSpecificSpellData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [specificEquipmentData, setSpecificEquipmentData] = useState([]);
  const [magicItems, setMagicItems] = useState([]);
  const [specificMagicItemData, setSpecificMagicItemData] = useState([]);

  // setActiveModal

  const handleClassButtonClick = () => {
    setActiveModal("class");
  };

  const handleFeatureButtonClick = (titleData, featureDescription) => {
    setActiveModal("feature");
    setFeatureButtonTitle(titleData);
    // console.log(featureDescription);
    setFeatureDescriptionInfo(featureDescription);
    // console.log(featureDescriptionInfo.desc);
  };

  const handleRaceFeatureButtonClick = (titleData, featureDescription) => {
    setActiveModal("race-feature");
    setRaceFeatureButtonTitle(titleData);
    setRaceFeatureDescriptionInfo(featureDescription);
  };

  const handleBackgroundButtonClick = () => {
    setActiveModal("background");
  };

  const handleSubclassButtonClick = (subclassData) => {
    setActiveModal("subclass");
    // console.log(subclassData);
    setSubclassDescrptionInfo(subclassData);
    // console.log(subclassDescriptionInfo);
  };

  const handleRaceButtonClick = () => {
    setActiveModal("race");
  };

  const handleSpellButtonClick = () => {
    setActiveModal("spell");
  };

  const handleEquipmentButtonClick = () => {
    setActiveModal("equipment");
  };

  const handleMagicItemButtonClick = () => {
    setActiveModal("magic");
  };

  const handleProfileButtonClick = () => {
    setActiveModal("profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // Data handling

  const handleSpellcastingInfo = (spellcastingInfo) => {
    if (spellcastingInfo == "No spells") {
      setSpellcastingData("");
    } else {
      setSpellcastingData(spellcastingInfo);
    }
  };

  const handleSubclassLevelData = (subclassLevel) => {
    setSubclassLevelData(subclassLevel);
    // console.log(subclassLevel);
    // console.log(subclassLevelData);
  };
  // console.log(subclassDescriptionInfo);

  const handleCharacterClassData = (data) => {
    setCharacterClassData(data);
    // console.log(data);
    // console.log(characterClassData);
  };

  const handleCharacterClassLevelData = (data) => {
    // console.log(data);
    setCharacterClassLevelData(data);
  };

  const handleSpecificBackgroundData = (data) => {
    setSpecificBackgroundData(data);
    // console.log(data);
  };

  const handleSpecificRaceData = (data) => {
    setSpecificRaceData(data);
  };

  const handleSpecificSpellData = (data) => {
    setSpecificSpellData(data);
  };

  const handleSpecificEquipmentData = (data) => {
    setSpecificEquipmentData(data);
  };

  const handleSpecificMagicItemData = (data) => {
    setSpecificMagicItemData(data);
  };

  const fetchDataCallback = useCallback(async () => {
    const classInfo = await getClassData();
    setClassData(classInfo.results);

    const backgroundInfo = await getBackgroundData();
    setBackgroundData(backgroundInfo.results);

    const raceInfo = await getRaceData();
    setRaceData(raceInfo.results);

    const magicItemData = await getMagicItemData();
    setMagicItems(magicItemData);

    const equipmentInfo = await getEquipmentData();
    setEquipmentData(equipmentInfo);

    const spellInfo = await getSpellData();
    setSpells(spellInfo);
  }, []);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  return (
    <div className="page">
      <div className="page__section">
        <Header handleProfileButtonClick={handleProfileButtonClick} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                classData={classData}
                handleClassButtonClick={handleClassButtonClick}
                handleBackgroundButtonClick={handleBackgroundButtonClick}
                handleRaceButtonClick={handleRaceButtonClick}
                handleSpellButtonClick={handleSpellButtonClick}
                handleMagicItemButtonClick={handleMagicItemButtonClick}
                handleEquipmentButtonClick={handleEquipmentButtonClick}
                sendSelectedClassToParent={handleCharacterClassData}
                sendSelectedClassLevelToParent={handleCharacterClassLevelData}
                sendSelectedBackgroundToParent={handleSpecificBackgroundData}
                sendSelectedSpellToParent={handleSpecificSpellData}
                sendSelectedRaceToParent={handleSpecificRaceData}
                sendSelectedEquipmentToParent={handleSpecificEquipmentData}
                sendSelectedMagicItemToParent={handleSpecificMagicItemData}
                backgroundData={backgroundData}
                raceData={raceData}
                spells={spells}
                equipmentData={equipmentData}
                magicItems={magicItems}
              />
            }
          />
          <Route path="/create" element={<CreationForm spells={spells} />} />
        </Routes>
      </div>
      <ClassModal
        classModalTitle={characterClassData.name}
        isOpen={activeModal === "class"}
        characterClassData={characterClassData}
        characterClassLevelData={characterClassLevelData}
        handleClassButtonClick={handleClassButtonClick}
        handleFeatureButtonClick={handleFeatureButtonClick}
        handleSpellcastingInfo={handleSpellcastingInfo}
        closeActiveModal={closeActiveModal}
        handleSubclassButtonClick={handleSubclassButtonClick}
        handleSubclassLevelData={handleSubclassLevelData}
      />
      <FeatureModal
        isOpen={activeModal === "feature"}
        closeActiveModal={closeActiveModal}
        titleText={featureButtonTitle}
        featureDescriptionInfo={featureDescriptionInfo}
        spellcastingData={spellcastingData}
      />
      <SubclassModal
        isOpen={activeModal === "subclass"}
        closeActiveModal={closeActiveModal}
        subclassDescriptionInfo={subclassDescriptionInfo}
        subclassLevelData={subclassLevelData}
        handleFeatureButtonClick={handleFeatureButtonClick}
      />
      <BackgroundModal
        isOpen={activeModal === "background"}
        closeActiveModal={closeActiveModal}
        specificBackgroundData={specificBackgroundData}
      />
      <RaceModal
        isOpen={activeModal === "race"}
        closeActiveModal={closeActiveModal}
        specificRaceData={specificRaceData}
        handleRaceFeatureButtonClick={handleRaceFeatureButtonClick}
      />
      <RaceFeatureModal
        isOpen={activeModal === "race-feature"}
        closeActiveModal={closeActiveModal}
        titleText={raceFeatureButtonTitle}
        featureDescriptionInfo={raceFeatureDescriptionInfo}
      />
      <SpellModal
        isOpen={activeModal === "spell"}
        closeActiveModal={closeActiveModal}
        specificSpellData={specificSpellData}
      />
      <MagicItemModal
        isOpen={activeModal === "magic"}
        closeActiveModal={closeActiveModal}
        specificMagicItemData={specificMagicItemData}
      />
      <EquipmentModal
        isOpen={activeModal === "equipment"}
        closeActiveModal={closeActiveModal}
        specificEquipmentData={specificEquipmentData}
      />
      <ProfileModal
        isOpen={activeModal === "profile"}
        closeActiveModal={closeActiveModal}
      ></ProfileModal>
    </div>
  );
}

export default App;
