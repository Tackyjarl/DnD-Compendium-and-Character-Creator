import "../blocks/Main.css";
import React, { useState, useEffect } from "react";

import Collapsable from "./Collapsable.jsx";
import AbiilityCounter from "./AbilityCounter.jsx";
import { getProficiencies } from "../utils/proficiencyCheck.js";
import { getSpecificClassData } from "../utils/D&DApi.js";
import AbiilityRoller from "./AbilityRoller.jsx";
import { skillsList } from "../utils/constants/constants.js";
import { fillCharacterSheet } from "../utils/constants/CharacterSheetFill.js";
import "../blocks/CreationForm.css";
import "../blocks/ClassModal.css";

function CreationForm({ spells }) {
  const [raceSelection, setRaceSelection] = useState("");
  const [classSelection, setClassSelection] = useState("");
  const [favoredEnemySelection, setFavoredEnemySelection] = useState("");
  const [sorcerousOriginSelection, setSorcerousOriginSelection] = useState("");
  const [abilityScoreBonus, setAbilityScoreBonus] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    wisdom: 0,
    intelligence: 0,
    charisma: 0,
  });
  const [abilityScoreSelection, setAbilityScoreSelection] = useState("");
  const [spellOptions, setSpellOptions] = useState(1);
  const [cantripOptions, setCantripOptions] = useState(1);
  const [martialSpellOptions, setMartialSpellOptions] = useState(0);
  const [martialCantripOptions, setMartialCantripOptions] = useState(0);
  const [abilityData, setAbilityData] = useState({});
  const [characterData, setCharacterData] = useState([]);
  const [martialMelee, setMartialMelee] = useState("");

  const [martial, setMartial] = useState("");
  const [simpleMelee, setSimpleMelee] = useState("");

  const [simple, setSimple] = useState("");
  const [instrument, setInstrument] = useState("");
  const [armorValue, setArmorValue] = useState("");
  const [armorClass, setArmorClass] = useState("");
  const [strMod, setStrMod] = useState(0);
  const [dexMod, setDexMod] = useState(0);
  const [conMod, setConMod] = useState(0);
  const [intMod, setIntMod] = useState(0);
  const [wisMod, setWisMod] = useState(0);
  const [chaMod, setChaMod] = useState(0);
  const [speed, setSpeed] = useState("30");
  const [maxHp, setMaxHp] = useState("");
  const [playerDesc, setPlayerDesc] = useState({
    name: "",
    age: "",
    playName: "",
    alignment: "",
    background: "",
    personality1: "",
    personality2: "",
    ideals: "",
    bonds: "",
    flaws: "",
    sex: "",
    height: "",
    weight: "",
    hair: "",
    eyes: "",
    skin: "",
    description: "",
  });

  const [acrobaticsProf, setAcrobaticsProf] = useState(0);
  const [animalProf, setAnimalProf] = useState(0);
  const [athleticsProf, setAthleticsProf] = useState(0);
  const [deceptionProf, setDeceptionProf] = useState(0);
  const [historyProf, setHistoryProf] = useState(0);
  const [insightProf, setInsightProf] = useState(0);
  const [intimidationProf, setIntimidationProf] = useState(0);
  const [investigationProf, setInvestigationProf] = useState(0);
  const [medicineProf, setMedicineProf] = useState(0);
  const [natureProf, setNatureProf] = useState(0);
  const [perceptionProf, setPerceptionProf] = useState(0);
  const [performanceProf, setPerformanceProf] = useState(0);
  const [persuasionProf, setPersuasionProf] = useState(0);
  const [religionProf, setReligionProf] = useState(0);
  const [sleightProf, setSleightProf] = useState(0);
  const [stealthProf, setStealthProf] = useState(0);
  const [survivalProf, setSurvivalProf] = useState(0);
  const [arcanaProf, setArcanaProf] = useState(0);

  const [acrobaticsCheckbox, setAcrobaticsCheckbox] = useState(false);
  const [animalCheckbox, setAnimalCheckbox] = useState(false);
  const [athleticsCheckbox, setAthleticsCheckbox] = useState(false);
  const [deceptionCheckbox, setDeceptionCheckbox] = useState(false);
  const [historyCheckbox, setHistoryCheckbox] = useState(false);
  const [insightCheckbox, setInsightCheckbox] = useState(false);
  const [intimidationCheckbox, setIntimidationCheckbox] = useState(false);
  const [investigationCheckbox, setInvestigationCheckbox] = useState(false);
  const [medicineCheckbox, setMedicineCheckbox] = useState(false);
  const [natureCheckbox, setNatureCheckbox] = useState(false);
  const [perceptionCheckbox, setPerceptionCheckbox] = useState(false);
  const [performanceCheckbox, setPerformanceCheckbox] = useState(false);
  const [persuasionCheckbox, setPersuasionCheckbox] = useState(false);
  const [religionCheckbox, setReligionCheckbox] = useState(false);
  const [sleightCheckbox, setSleightCheckbox] = useState(false);
  const [stealthCheckbox, setStealthCheckbox] = useState(false);
  const [survivalCheckbox, setSurvivalCheckbox] = useState(false);
  const [arcanaCheckbox, setArcanaCheckbox] = useState(false);

  const [proficientCheck, setProficienctCheck] = useState("");
  const [proficientCheck2, setProficienctCheck2] = useState("");
  const [proficientCheck3, setProficienctCheck3] = useState("");
  const [proficientCheck4, setProficienctCheck4] = useState("");
  const [backgroundProf, setBackgroundProf] = useState("");
  const [backgroundProf2, setBackgroundProf2] = useState("");

  const [strCheckbox, setStrCheckbox] = useState(false);
  const [dexCheckbox, setDexCheckbox] = useState(false);
  const [conCheckbox, setConCheckbox] = useState(false);
  const [intCheckbox, setIntCheckbox] = useState(false);
  const [wisCheckbox, setWisCheckbox] = useState(false);
  const [chaCheckbox, setChaCheckbox] = useState(false);

  const [strSave, setStrSave] = useState(0);
  const [dexSave, setDexSave] = useState(0);
  const [conSave, setConSave] = useState(0);
  const [intSave, setIntSave] = useState(0);
  const [wisSave, setWisSave] = useState(0);
  const [chaSave, setChaSave] = useState(0);

  const [str, setStr] = useState(0);
  const [dex, setDex] = useState(0);
  const [con, setCon] = useState(0);
  const [int, setInt] = useState(0);
  const [wis, setWis] = useState(0);
  const [cha, setCha] = useState(0);

  // Form states

  const handleRaceChange = (event) => {
    setRaceSelection(event.target.value);
    handleRaceAbilityScores(event.target.value);
    if (event.target.value === "dwarf") {
      setSpeed("25");
    }
    if (event.target.value === "gnome") {
      setSpeed("25");
    }
    if (event.target.value === "halfling") {
      setSpeed("25");
    }
  };
  const handleClassChange = (event) => {
    setClassSelection(event.target.value);
    handleSpellSelects(event.target.value);
    handleEquipmentReset();
    getSpecificClassData(
      `/api/classes/${event.target.value.toLowerCase()}`
    ).then((res) => setCharacterData(res));
  };
  const handleFavoredEnemyChange = (event) => {
    setFavoredEnemySelection(event.target.value);
  };
  const handleSorcerousOriginChange = (event) => {
    setSorcerousOriginSelection(event.target.value);
  };

  const handleCharacterDescChange = (event) => {
    setPlayerDesc({ ...playerDesc, [event.target.name]: event.target.value });
    setBackgroundProf("Insight");
    setBackgroundProf2("Religion");
  };

  const handleEquipmentChange = (event) => {
    if (event.target.value === "martial-melee") {
      setMartialMelee(event.target.value);
    }
    if (event.target.value === "simple") {
      setSimple(event.target.value);
    }

    if (event.target.value === "martial") {
      setMartial(event.target.value);
    }
    if (event.target.value === "martial-fighter") {
      setMartial(event.target.value);
    }
    if (event.target.value === "simple-melee") {
      setSimpleMelee(event.target.value);
    }
    if (event.target.value === "simple-ranger") {
      setSimpleMelee(event.target.value);
    }
    if (event.target.value === "instrument") {
      setInstrument(event.target.value);
    }
    if (event.target.value === "Leather Armor") {
      setArmorValue("Leather Armor");
    }
    if (event.target.value === "Scale Mail") {
      setArmorValue("Scale Mail");
    }
    if (event.target.value === "Chain Mail") {
      setArmorValue("Chain Mail");
    }
    if (event.target.value === "Shield") {
      setArmorValue("Shield");
    }
  };

  const handleEquipmentReset = () => {
    setMartialMelee("");
    setSimple("");
    setMartial("");
    setSimpleMelee("");
    setInstrument("");
    setArmorValue("");
  };

  const handleRaceAbilityScores = () => {
    if (raceSelection === "dragonborn") {
      setAbilityScoreBonus({
        strength: 2,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 1,
      });
    } else if (raceSelection === "dwarf") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 0,
        constitution: 2,
        wisdom: 1,
        intelligence: 0,
        charisma: 0,
      });
    } else if (raceSelection === "elf") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 2,
        constitution: 0,
        wisdom: 0,
        intelligence: 1,
        charisma: 0,
      });
    } else if (raceSelection === "gnome") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 0,
        constitution: 1,
        wisdom: 0,
        intelligence: 2,
        charisma: 0,
      });
    } else if (raceSelection === "half-elf") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 2,
      });
    } else if (raceSelection === "half-orc") {
      setAbilityScoreBonus({
        strength: 2,
        dexterity: 0,
        constitution: 1,
        wisdom: 0,
        intelligence: 0,
        charisma: 0,
      });
    } else if (raceSelection === "halfling") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 2,
        constitution: 0,
        wisdom: 0,
        intelligence: 0,
        charisma: 1,
      });
    } else if (raceSelection === "human") {
      setAbilityScoreBonus({
        strength: 1,
        dexterity: 1,
        constitution: 1,
        wisdom: 1,
        intelligence: 1,
        charisma: 1,
      });
    } else if (raceSelection === "tiefling") {
      setAbilityScoreBonus({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        wisdom: 0,
        intelligence: 1,
        charisma: 2,
      });
    } else {
      return;
    }
  };

  const handleAbilityScoreOptionChange = (event) => {
    setAbilityScoreSelection(event.target.value);
  };

  const handleAbilityData = (data) => {
    setAbilityData(data);
    setStrMod(Math.floor((data[0].quantity - 10) / 2));
    setDexMod(Math.floor((data[1].quantity - 10) / 2));
    setConMod(Math.floor((data[2].quantity - 10) / 2));
    setIntMod(Math.floor((data[3].quantity - 10) / 2));
    setWisMod(Math.floor((data[4].quantity - 10) / 2));
    setChaMod(Math.floor((data[5].quantity - 10) / 2));
    setStr(data[0].quantity);
    setDex(data[1].quantity);
    setCon(data[2].quantity);
    setInt(data[3].quantity);
    setWis(data[4].quantity);
    setCha(data[5].quantity);
  };

  const handleAbilityRoll = (data) => {
    setAbilityData(data);
    setStrMod(Math.floor((data[0].quantity - 10) / 2));
    setDexMod(Math.floor((data[1].quantity - 10) / 2));
    setConMod(Math.floor((data[2].quantity - 10) / 2));
    setIntMod(Math.floor((data[3].quantity - 10) / 2));
    setWisMod(Math.floor((data[4].quantity - 10) / 2));
    setChaMod(Math.floor((data[5].quantity - 10) / 2));
    setStr(data[0].quantity);
    setDex(data[1].quantity);
    setCon(data[2].quantity);
    setInt(data[3].quantity);
    setWis(data[4].quantity);
    setCha(data[5].quantity);
  };

  // console.log(abilityData[1]?.quantity);
  // console.log(Math.round((abilityData[1]?.quantity - 10) / 2));
  // console.log(
  //   0 <= Math.round((abilityData[1]?.quantity - 10) / 2)
  //     ? Math.round((abilityData[1]?.quantity - 10) / 2)
  //     : 0
  // );
  // console.log(
  //   1 <= 1 + Math.round((abilityData[4]?.quantity - 10) / 2)
  //     ? 1 + Math.round((abilityData[4]?.quantity - 10) / 2)
  //     : 1
  // );
  // console.log(Math.round(abilityData.wisdom / 2));

  const handleSpellSelects = () => {
    if (classSelection === "Barbarian") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
      setStrCheckbox(true);
      setDexCheckbox(false);
      setConCheckbox(true);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(false);
    } else if (classSelection === "Bard") {
      setSpellOptions(4);
      setCantripOptions(2);
    } else if (classSelection === "Cleric") {
      1 <= 1 + Math.round((abilityData[4]?.quantity - 10) / 2)
        ? setSpellOptions(1 + Math.round((abilityData[4]?.quantity - 10) / 2))
        : setSpellOptions(1);
      setCantripOptions(3);
    } else if (classSelection === "Druid") {
      1 <= 1 + Math.round((abilityData[4]?.quantity - 10) / 2)
        ? setSpellOptions(1 + Math.round((abilityData[4]?.quantity - 10) / 2))
        : setSpellOptions(1);
      setCantripOptions(2);
    } else if (classSelection === "Fighter") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
    } else if (classSelection === "Monk") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
    } else if (classSelection === "Paladin") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
    } else if (classSelection === "Ranger") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
    } else if (classSelection === "Rogue") {
      setSpellOptions(1);
      setCantripOptions(1);
      setMartialSpellOptions(1);
      setMartialCantripOptions(1);
    } else if (classSelection === "Sorcerer") {
      setSpellOptions(2);
      setCantripOptions(4);
    } else if (classSelection === "Warlock") {
      setSpellOptions(2);
      setCantripOptions(2);
    } else if (classSelection === "Wizard") {
      setSpellOptions(6);
      setCantripOptions(3);
    }
  };

  const renderSpellSelects = () => {
    const selects = [];
    for (let i = 0; i < spellOptions; i++) {
      selects.push(
        <select key={i}>
          <option value=""> -- select an option -- </option>
          {martialSpellOptions === 1 ? (
            <option value={"No Spells"}>{"No spells for this class"}</option>
          ) : (
            spells.map((spell) =>
              spell.classes.map((classId) =>
                classId.name == classSelection
                  ? spell.level == 1 && (
                      <option value={spell.name} key={spell.index + 9}>
                        {spell.name}
                      </option>
                    )
                  : ""
              )
            )
          )}
        </select>
      );
    }
    return selects;
  };

  const renderCantripSelects = () => {
    const cantripSelects = [];
    for (let i = 0; i < cantripOptions; i++) {
      cantripSelects.push(
        <select key={i}>
          <option value=""> -- select an option -- </option>
          {martialCantripOptions === 1 ? (
            <option value={"No Spells"}>{"No spells for this class"}</option>
          ) : (
            spells.map((spell) =>
              spell.classes.map((classId) =>
                classId.name == classSelection
                  ? spell.level == 0 && (
                      <option value={spell.name} key={spell.index + 6}>
                        {spell.name}
                      </option>
                    )
                  : ""
              )
            )
          )}
        </select>
      );
    }
    return cantripSelects;
  };

  const calculateArmorClass = () => {
    if (armorValue === "") {
      setArmorClass((10).toString());
    }
    if (classSelection === "Barbarian") {
      setArmorClass((10 + dexMod + conMod).toString());
    }
    if (classSelection === "Bard") {
      setArmorClass((11 + dexMod).toString());
    }
    if (classSelection === "Druid") {
      setArmorClass((11 + dexMod).toString());
    }
    if (classSelection === "Monk") {
      setArmorClass((10 + dexMod + wisMod).toString());
    }
    if (classSelection === "Paladin") {
      setArmorClass((16).toString());
    }
    if (classSelection === "Rogue") {
      setArmorClass((11 + dexMod).toString());
    }
    if (classSelection === "Warlock") {
      setArmorClass((11 + dexMod).toString());
    }
    if (armorValue === "Leather Armor") {
      setArmorClass((11 + dexMod).toString());
    }
    if (armorValue === "Scale Mail") {
      setArmorClass((14 + (2 >= dexMod ? dexMod : 2)).toString());
    }
    if (armorValue === "Chain Mail") {
      setArmorClass((16).toString());
    }
    if (armorValue === "Shield") {
      setArmorClass((parseInt(armorClass) + 2).toString());
    }
    if (martial === "martial") {
      setArmorClass((parseInt(armorClass) + 2).toString());
    }
  };

  const calculateMaxHP = () => {
    if (characterData !== undefined) {
      setMaxHp((characterData.hit_die + conMod).toString());
    }
  };

  const getSavingThrowCheck = () => {
    if (classSelection === "Barbarian") {
      setStrCheckbox(true);
      setDexCheckbox(false);
      setConCheckbox(true);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(false);
      setStrSave(2);
      setDexSave(0);
      setConSave(2);
      setIntSave(0);
      setWisSave(0);
      setChaSave(0);
    }
    if (classSelection === "Bard") {
      setStrCheckbox(false);
      setDexCheckbox(true);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(true);
      setStrSave(0);
      setDexSave(2);
      setConSave(0);
      setIntSave(0);
      setWisSave(0);
      setChaSave(2);
    }
    if (classSelection === "Cleric") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(true);
      setChaCheckbox(true);
      setStrSave(0);
      setDexSave(0);
      setConSave(0);
      setIntSave(0);
      setWisSave(2);
      setChaSave(2);
    }
    if (classSelection === "Druid") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(false);
      setIntCheckbox(true);
      setWisCheckbox(true);
      setChaCheckbox(false);
      setStrSave(0);
      setDexSave(0);
      setConSave(0);
      setIntSave(2);
      setWisSave(2);
      setChaSave(0);
    }
    if (classSelection === "Fighter") {
      setStrCheckbox(true);
      setDexCheckbox(false);
      setConCheckbox(true);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(false);
      setStrSave(2);
      setDexSave(0);
      setConSave(2);
      setIntSave(0);
      setWisSave(0);
      setChaSave(0);
    }
    if (classSelection === "Monk") {
      setStrCheckbox(true);
      setDexCheckbox(true);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(false);
      setStrSave(2);
      setDexSave(2);
      setConSave(0);
      setIntSave(0);
      setWisSave(0);
      setChaSave(0);
    }
    if (classSelection === "Paladin") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(true);
      setChaCheckbox(true);
      setStrSave(0);
      setDexSave(0);
      setConSave(0);
      setIntSave(0);
      setWisSave(2);
      setChaSave(2);
    }
    if (classSelection === "Ranger") {
      setStrCheckbox(true);
      setDexCheckbox(true);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(false);
      setStrSave(2);
      setDexSave(2);
      setConSave(0);
      setIntSave(0);
      setWisSave(0);
      setChaSave(0);
    }
    if (classSelection === "Rogue") {
      setStrCheckbox(false);
      setDexCheckbox(true);
      setConCheckbox(false);
      setIntCheckbox(true);
      setWisCheckbox(false);
      setChaCheckbox(false);
      setStrSave(0);
      setDexSave(2);
      setConSave(0);
      setIntSave(2);
      setWisSave(0);
      setChaSave(0);
    }
    if (classSelection === "Sorcerer") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(true);
      setIntCheckbox(false);
      setWisCheckbox(false);
      setChaCheckbox(true);
      setStrSave(0);
      setDexSave(0);
      setConSave(2);
      setIntSave(0);
      setWisSave(0);
      setChaSave(2);
    }
    if (classSelection === "Warlock") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(false);
      setIntCheckbox(false);
      setWisCheckbox(true);
      setChaCheckbox(true);
      setStrSave(0);
      setDexSave(0);
      setConSave(0);
      setIntSave(0);
      setWisSave(2);
      setChaSave(2);
    }
    if (classSelection === "Wizard") {
      setStrCheckbox(false);
      setDexCheckbox(false);
      setConCheckbox(false);
      setIntCheckbox(true);
      setWisCheckbox(true);
      setChaCheckbox(false);
      setStrSave(0);
      setDexSave(0);
      setConSave(0);
      setIntSave(2);
      setWisSave(2);
      setChaSave(0);
    }
  };

  const handlePDFValues = () => {
    calculateArmorClass();
    calculateMaxHP();
    getSavingThrowCheck();
    getProficiencies(
      proficientCheck,
      proficientCheck2,
      proficientCheck3,
      proficientCheck4,
      backgroundProf,
      backgroundProf2,
      setAthleticsProf,
      setAcrobaticsProf,
      setAnimalProf,
      setDeceptionProf,
      setHistoryProf,
      setInsightProf,
      setIntimidationProf,
      setInvestigationProf,
      setMedicineProf,
      setNatureProf,
      setPerceptionProf,
      setPerformanceProf,
      setPersuasionProf,
      setReligionProf,
      setSleightProf,
      setStealthProf,
      setSurvivalProf,
      setArcanaProf,
      setAthleticsCheckbox,
      setAcrobaticsCheckbox,
      setAnimalCheckbox,
      setDeceptionCheckbox,
      setHistoryCheckbox,
      setInsightCheckbox,
      setIntimidationCheckbox,
      setInvestigationCheckbox,
      setMedicineCheckbox,
      setNatureCheckbox,
      setPerceptionCheckbox,
      setPerformanceCheckbox,
      setPersuasionCheckbox,
      setReligionCheckbox,
      setSleightCheckbox,
      setStealthCheckbox,
      setSurvivalCheckbox,
      setArcanaCheckbox
    );
    handlePDFText();
  };

  const handlePDFText = () => {
    fillCharacterSheet(
      playerDesc.name,
      classSelection,
      playerDesc.background,
      playerDesc.playName,
      raceSelection,
      playerDesc.alignment,
      armorClass,
      speed,
      maxHp,
      dexMod.toString(),
      playerDesc.personality1,
      playerDesc.personality2,
      playerDesc.ideals,
      playerDesc.bonds,
      playerDesc.flaws,
      (athleticsProf + strMod).toString(),
      athleticsCheckbox,
      (animalProf + wisMod).toString(),
      animalCheckbox,
      (acrobaticsProf + dexMod).toString(),
      acrobaticsCheckbox,
      (arcanaProf + intMod).toString(),
      arcanaCheckbox,
      (deceptionProf + chaMod).toString(),
      deceptionCheckbox,
      (historyProf + intMod).toString(),
      historyCheckbox,
      (insightProf + wisMod).toString(),
      insightCheckbox,
      (intimidationProf + chaMod).toString(),
      intimidationCheckbox,
      (investigationProf + intMod).toString(),
      investigationCheckbox,
      (medicineProf + wisMod).toString(),
      medicineCheckbox,
      (natureProf + intMod).toString(),
      natureCheckbox,
      (perceptionProf + wisMod).toString(),
      perceptionCheckbox,
      (performanceProf + chaMod).toString(),
      performanceCheckbox,
      (persuasionProf + chaMod).toString(),
      persuasionCheckbox,
      (religionProf + intMod).toString(),
      religionCheckbox,
      (sleightProf + dexMod).toString(),
      sleightCheckbox,
      (stealthProf + dexMod).toString(),
      stealthCheckbox,
      (survivalProf + wisMod).toString(),
      survivalCheckbox,
      (10 + wisMod + perceptionProf).toString(),
      strMod.toString(),
      dexMod.toString(),
      conMod.toString(),
      intMod.toString(),
      wisMod.toString(),
      chaMod.toString(),
      strCheckbox,
      dexCheckbox,
      conCheckbox,
      intCheckbox,
      wisCheckbox,
      chaCheckbox,
      (strSave + strMod).toString(),
      (dexSave + dexMod).toString(),
      (conSave + conMod).toString(),
      (intSave + intMod).toString(),
      (wisSave + wisMod).toString(),
      (chaSave + chaMod).toString(),
      str.toString(),
      dex.toString(),
      con.toString(),
      int.toString(),
      wis.toString(),
      cha.toString(),
      playerDesc.age,
      playerDesc.sex,
      playerDesc.height,
      playerDesc.weight,
      playerDesc.hair,
      playerDesc.eyes,
      playerDesc.skin,
      playerDesc.description
    );
  };

  useEffect(() => {
    calculateArmorClass();
    calculateMaxHP();
    getSavingThrowCheck();
    // getProficiencies(
    //   proficientCheck,
    //   proficientCheck2,
    //   proficientCheck3,
    //   proficientCheck4,
    //   playerProfs,
    //   setPlayerProfs,
    //   profCheckbox,
    //   setProfCheckbox
    // );
    // handleCharacterProfChange("Athletics");
    getProficiencies(
      proficientCheck,
      proficientCheck2,
      proficientCheck3,
      proficientCheck4,
      backgroundProf,
      backgroundProf2,
      setAthleticsProf,
      setAcrobaticsProf,
      setAnimalProf,
      setDeceptionProf,
      setHistoryProf,
      setInsightProf,
      setIntimidationProf,
      setInvestigationProf,
      setMedicineProf,
      setNatureProf,
      setPerceptionProf,
      setPerformanceProf,
      setPersuasionProf,
      setReligionProf,
      setSleightProf,
      setStealthProf,
      setSurvivalProf,
      setArcanaProf,
      setAthleticsCheckbox,
      setAcrobaticsCheckbox,
      setAnimalCheckbox,
      setDeceptionCheckbox,
      setHistoryCheckbox,
      setInsightCheckbox,
      setIntimidationCheckbox,
      setInvestigationCheckbox,
      setMedicineCheckbox,
      setNatureCheckbox,
      setPerceptionCheckbox,
      setPerformanceCheckbox,
      setPersuasionCheckbox,
      setReligionCheckbox,
      setSleightCheckbox,
      setStealthCheckbox,
      setSurvivalCheckbox,
      setArcanaCheckbox
    );
  }, [
    calculateArmorClass,
    calculateMaxHP,
    getSavingThrowCheck,
    getProficiencies,
    proficientCheck,
    proficientCheck2,
    proficientCheck3,
    proficientCheck4,
    setAthleticsProf,
    setAcrobaticsProf,
    setAnimalProf,
    setDeceptionProf,
    setHistoryProf,
    setInsightProf,
    setIntimidationProf,
    setInvestigationProf,
    setMedicineProf,
    setNatureProf,
    setPerceptionProf,
    setPerformanceProf,
    setPersuasionProf,
    setReligionProf,
    setSleightProf,
    setStealthProf,
    setSurvivalProf,
    setArcanaProf,
    setAthleticsCheckbox,
    setAcrobaticsCheckbox,
    setAnimalCheckbox,
    setDeceptionCheckbox,
    setHistoryCheckbox,
    setInsightCheckbox,
    setIntimidationCheckbox,
    setInvestigationCheckbox,
    setMedicineCheckbox,
    setNatureCheckbox,
    setPerceptionCheckbox,
    setPerformanceCheckbox,
    setPersuasionCheckbox,
    setReligionCheckbox,
    setSleightCheckbox,
    setStealthCheckbox,
    setSurvivalCheckbox,
    setArcanaCheckbox,
  ]);

  return (
    <div className="form">
      <form>
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="race">Choose a race:</label>
          </div>
          <div className="form__col-75">
            <select
              id="race"
              name="race"
              value={raceSelection}
              onChange={handleRaceChange}
              onClick={handleRaceChange}
            >
              <option value=""> -- select an option -- </option>
              <option value={"dragonborn"}>Dragonborn</option>
              <option value={"dwarf"}>Dwarf</option>
              <option value={"elf"}>Elf</option>
              <option value={"gnome"}>Gnome</option>
              <option value={"half-elf"}>Half-Elf</option>
              <option value={"half-orc"}>Half-Orc</option>
              <option value={"halfling"}>Halfling</option>
              <option value={"human"}>Human</option>
              <option value={"tiefling"}>Tiefling</option>
            </select>
          </div>
        </div>

        {raceSelection === "dragonborn" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="draconic-ancestry">
                {" "}
                Choose one type of dragon:
              </label>
            </div>
            <div className="form__col-75">
              <select id="draconic-ancestry" name="draconic-ancestry">
                <option value=""> -- select an option -- </option>
                <option value={"black"}>Black</option>
                <option value={"blue"}>Blue</option>
                <option value={"brass"}>Brass</option>
                <option value={"bronze"}>Bronze</option>
                <option value={"copper"}>Copper</option>
                <option value={"gold"}>Gold</option>
                <option value={"green"}>Green</option>
                <option value={"red"}>Red</option>
                <option value={"silver"}>Silver</option>
                <option value={"white"}>White</option>
              </select>
            </div>
          </div>
        )}

        {raceSelection === "dwarf" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="dwarf-subrace"> Choose a subrace:</label>
            </div>
            <div className="form__col-75">
              <select id="dwarf-subrace" name="dwarf-subrace">
                <option value=""> -- select an option -- </option>
                <option value={"hill"}>Hill Dwarf</option>
              </select>
            </div>
          </div>
        )}
        {raceSelection === "elf" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="elf-subrace"> </label>
            </div>
            <div className="form__col-75">
              Choose a subrace:
              <select id="elf-subrace" name="elf-subrace">
                <option value=""> -- select an option -- </option>
                <option value={"high"}>High Elf</option>
              </select>
            </div>
          </div>
        )}
        {raceSelection === "gnome" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="gnome-subrace"> Choose a subrace</label>
            </div>
            <div className="form__col-75">
              <select id="gnome-subrace" name="gnome-subrace">
                <option value=""> -- select an option -- </option>
                <option value={"rock"}>Rock Gnome</option>
              </select>
            </div>
          </div>
        )}
        {raceSelection === "halfling" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="halfling-subrace"> </label>
            </div>
            <div className="form__col-75">
              Choose a subrace:
              <select id="halfling-subrace" name="halfling-subrace">
                <option value=""> -- select an option -- </option>
                <option value={"lightfoot"}>Lightfoot</option>
              </select>
            </div>
          </div>
        )}
      </form>

      <br />

      <form>
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="class"> Choose a class:</label>
          </div>
          <div className="form__col-75">
            <select
              id="class"
              name="class"
              value={classSelection}
              onChange={handleClassChange}
              onClick={handleClassChange}
            >
              <option value=""> -- select an option -- </option>
              <option value="Barbarian">Barbarian</option>
              <option value="Bard">Bard</option>
              <option value="Cleric">Cleric</option>
              <option value="Druid">Druid</option>
              <option value="Fighter">Fighter</option>
              <option value="Monk">Monk</option>
              <option value="Paladin">Paladin</option>
              <option value="Ranger">Ranger</option>
              <option value="Rogue">Rogue</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Wizard">Wizard</option>
            </select>
          </div>
        </div>
        {classSelection === "Cleric" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="divine-domain"> Choose a divine domain</label>
            </div>
            <div className="form__col-75">
              <select id="divine-domain" name="divine-domain">
                <option value=""> -- select an option -- </option>
                <option value={"life"}>Life Domain</option>
              </select>
            </div>
          </div>
        )}
        {classSelection === "Fighter" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor=""> Choose a fighting style</label>
            </div>
            <div className="form__col-75">
              <select id="fighting-style" name="fighting-style">
                <option value=""> -- select an option -- </option>
                <option value={"archery"}>Archery</option>
                <option value={"defense"}>Defense</option>
                <option value={"dueling"}>Dueling</option>
                <option value={"great-weapon"}>Great Weapon Fighting</option>
                <option value={"protection"}>Protection</option>
                <option value={"two-weapon"}>Two Weapon Fighting</option>
              </select>
            </div>
          </div>
        )}
        {classSelection === "Ranger" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="favored-enemy"> Choose a favored enemy </label>
            </div>
            <div className="form__col-75">
              <select
                id="favored-enemy"
                name="favored-enemy"
                value={favoredEnemySelection}
                onChange={handleFavoredEnemyChange}
              >
                <option value=""> -- select an option -- </option>
                <option value={"two-human"}>Two Humanoid Races</option>
                <option value={"type"}>Type</option>
              </select>
            </div>
          </div>
        )}
        {favoredEnemySelection === "two-human" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="human-enemy">Choose two humanoid races</label>
            </div>
            <div className="form__col-75">
              <select id="human-enemy" name="human-enemy">
                <option value=""> -- select an option -- </option>
                <option value={"dragonborn"}>Dragonborn</option>
                <option value={"dwarves"}>Dwarves</option>
                <option value={"elves"}>Elves</option>
                <option value={"gnolls"}>Gnolls</option>
                <option value={"gnomes"}>Gnomes</option>
                <option value={"goblinoids"}>Goblinoids</option>
                <option value={"grimlock"}>Grimlock</option>
                <option value={"halflings"}>Halflings</option>
                <option value={"humans"}>Humans</option>
                <option value={"kobolds"}>Kobolds</option>
                <option value={"lizardfolk"}>Lizardfolk</option>
                <option value={"merfolk"}>Merfolk</option>
                <option value={"orcs"}>Orcs</option>
                <option value={"sahuagin"}>Sahuagin</option>
                <option value={"werebears"}>Werebears</option>
                <option value={"wearboars"}>Wereboars</option>
                <option value={"wererats"}>Wererats</option>
                <option value={"werewolves"}>Werewolves</option>
              </select>
              <select id="human-enemy" name="human-enemy">
                <option value=""> -- select an option -- </option>
                <option value={"dragonborn"}>Dragonborn</option>
                <option value={"dwarves"}>Dwarves</option>
                <option value={"elves"}>Elves</option>
                <option value={"gnolls"}>Gnolls</option>
                <option value={"gnomes"}>Gnomes</option>
                <option value={"goblinoids"}>Goblinoids</option>
                <option value={"grimlock"}>Grimlock</option>
                <option value={"halflings"}>Halflings</option>
                <option value={"humans"}>Humans</option>
                <option value={"kobolds"}>Kobolds</option>
                <option value={"lizardfolk"}>Lizardfolk</option>
                <option value={"merfolk"}>Merfolk</option>
                <option value={"orcs"}>Orcs</option>
                <option value={"sahuagin"}>Sahuagin</option>
                <option value={"werebears"}>Werebears</option>
                <option value={"wearboars"}>Wereboars</option>
                <option value={"wererats"}>Wererats</option>
                <option value={"werewolves"}>Werewolves</option>
              </select>
            </div>
          </div>
        )}
        {favoredEnemySelection === "type" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="enemy-type">Choose an enemy type </label>
            </div>
            <div className="form__col-75">
              <select id="enemy-type" name="enemy-type">
                <option value=""> -- select an option -- </option>
                <option value={"aberrations"}>Aberrations</option>
                <option value={"beasts"}>Beasts</option>
                <option value={"celestials"}>Celestials</option>
                <option value={"constructs"}>Constructs</option>
                <option value={"dragons"}>Dragons</option>
                <option value={"elementals"}>Elementals</option>
                <option value={"fey"}>Fey</option>
                <option value={"fiends"}>Fiends</option>
                <option value={"giants"}>Giants</option>
                <option value={"monstrosities"}>Monstrosities</option>
                <option value={"oozes"}>Oozes</option>
                <option value={"plants"}>Plants</option>
                <option value={"undead"}>Undead</option>
              </select>
            </div>
          </div>
        )}
        {favoredEnemySelection !== "" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="enemy-lang">Choose a language </label>
            </div>
            <div className="form__col-75">
              <select id="enemy-lang" name="enemy-lang">
                {" "}
                <option value=""> -- select an option -- </option>
                <option value={"abyssal"}>Abyssal</option>
                <option value={"celestial"}>Celestial</option>
                <option value={"sign-language"}>Common Sign Language</option>
                <option value={"deep-speech"}>Deep Speech</option>
                <option value={"dwarvish"}>Dwarvish</option>
                <option value={"elvish"}>Elvish</option>
                <option value={"giant"}>Giant</option>
                <option value={"gnomish"}>Gnomish</option>
                <option value={"goblin"}>Goblin</option>
                <option value={"halfling"}>Halfling</option>
                <option value={"infernal"}>Infernal</option>
                <option value={"orc"}>Orc</option>
                <option value={"primordial"}>Primordial</option>
                <option value={"Sylvan"}>Sylvan</option>
                <option value={"undercommon"}>Undercommon</option>
              </select>
            </div>
          </div>
        )}
        {classSelection === "Ranger" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="favored-terrain">Choose a favored terrain </label>
            </div>
            <div className="form__col-75">
              <select id="favored-terrain" name="favored-terrain">
                <option value=""> -- select an option -- </option>
                <option value={"arctic"}>Arctic</option>
                <option value={"coast"}>Coast</option>
                <option value={"desert"}>Desert</option>
                <option value={"forest"}>Forest</option>
                <option value={"grassland"}>Grassland</option>
                <option value={"mountain"}>Mountain</option>
                <option value={"swamp"}>Swamp</option>
                <option value={"underdark"}>Underdark</option>
              </select>
            </div>
          </div>
        )}
        {classSelection === "Sorcerer" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="origin"> </label>
            </div>
            <div className="form__col-75">
              Choose a Sorcerous Origin
              <select
                id="origin"
                name="origin"
                value={sorcerousOriginSelection}
                onChange={handleSorcerousOriginChange}
              >
                <option value=""> -- select an option -- </option>
                <option value={"draconic-bloodline"}>Draconic Bloodline</option>
              </select>
            </div>
          </div>
        )}
        {sorcerousOriginSelection === "draconic-bloodline" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="draconic-bloodline">
                Choose a Draconic Ancestry Type
              </label>
            </div>
            <div className="form__col-75">
              <select id="draconic-bloodline" name="draconic-bloodline">
                <option value=""> -- select an option -- </option>
                <option value={"black"}>Black</option>
                <option value={"blue"}>Blue</option>
                <option value={"brass"}>Brass</option>
                <option value={"bronze"}>Bronze</option>
                <option value={"copper"}>Copper</option>
                <option value={"gold"}>Gold</option>
                <option value={"green"}>Green</option>
                <option value={"red"}>Red</option>
                <option value={"silver"}>Silver</option>
                <option value={"white"}>White</option>
              </select>
            </div>
          </div>
        )}
        {classSelection === "Warlock" && (
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="patron"> Choose an Otherworldly Patron</label>
            </div>
            <div className="form__col-75">
              <select id="patron" name="patron">
                <option value=""> -- select an option -- </option>
                <option value={"the-fiend"}>The Fiend</option>
              </select>
            </div>
          </div>
        )}
      </form>

      <br />

      {classSelection !== "" && (
        <form>
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="ability-scores">Choose Ability Scores:</label>
            </div>
            <div className="form__col-75">
              <select
                id="ability-scores"
                name="ability-scores"
                value={abilityScoreSelection}
                onChange={handleAbilityScoreOptionChange}
              >
                <option value=""> -- select an option -- </option>
                <option value="point-buy">Point Buy</option>
                <option value="dice-roll">Dice Roll</option>
              </select>
            </div>
          </div>
        </form>
      )}

      {abilityScoreSelection === "point-buy" && (
        <AbiilityCounter
          isOpen={abilityScoreSelection === "point-buy"}
          abilityScoreBonus={abilityScoreBonus}
          sendAbilityData={handleAbilityData}
        />
      )}
      {abilityScoreSelection === "dice-roll" && (
        <AbiilityRoller
          isOpen={abilityScoreSelection === "dice-roll"}
          sendAbilityRoll={handleAbilityRoll}
          abilityScoreBonus={abilityScoreBonus}
        />
      )}

      <br />

      <Collapsable title="Background" styleClass={"modal__button"}>
        <form>
          <div className="form__row">
            {" "}
            <div className="form__col-25">
              <label htmlFor="alignment">Choose an Alignment:</label>
            </div>
            <div className="form__col-75">
              <select
                id="alignment"
                name="alignment"
                value={playerDesc.alignment}
                onChange={handleCharacterDescChange}
              >
                <option value=""> -- select an option -- </option>
                <option value="lawful-good">Lawful Good</option>
                <option value="lawful-neutral">Lawful Neutral</option>
                <option value="lawful-evil">Lawful Evil</option>
                <option value="neutral-good">Neutral Good</option>
                <option value="neutral">Neutral</option>
                <option value="neutral-evil">Neutral Evil</option>
                <option value="chaotic-good">Chaotic Good</option>
                <option value="chaotic-neutral">Chaotic Neutral</option>
                <option value="chaotic-evil">Chaotic Evil</option>
              </select>
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="background">Choose a Background:</label>
            </div>
            <div className="form__col-75">
              <select
                id="background"
                name="background"
                value={playerDesc.background}
                onChange={() => handleCharacterDescChange}
              >
                <option value=""> -- select an option -- </option>
                <option value="acolyte">Acolyte</option>
              </select>
            </div>
          </div>
        </form>

        <br />
      </Collapsable>
      {classSelection === "Barbarian" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.barbarian === true ? (
                  <option name={skill.name} value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.barbarian === true ? (
                  <option name={skill.name} value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Bard" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 3 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.bard === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.bard === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck3(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.bard === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Cleric" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>{" "}
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.cleric === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.cleric === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Druid" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.druid === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.druid === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Fighter" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.fighter === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.fighter === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Monk" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.monk === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.monk === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Paladin" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.paladin === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.paladin === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Ranger" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 3 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.ranger === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.ranger === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck3(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.ranger === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Rogue" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 4 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.rogue === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.rogue === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck3(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.rogue === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck4(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.rogue === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Sorcerer" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>{" "}
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.sorcerer === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.sorcerer === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Warlock" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.warlock === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.warlock === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection === "Wizard" && (
        <div className="form__row">
          <div className="form__col-25">
            <label htmlFor="proficiencies"> Choose 2 proficiencies: </label>
          </div>
          <div className="form__col-75">
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.wizard === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
            <select
              id="proficiencies"
              name="proficiencies"
              onChange={(e) => setProficienctCheck2(e.target.value)}
            >
              <option value=""> -- select an option -- </option>
              {skillsList.map((skill) =>
                skill.wizard === true ? (
                  <option value={skill.name} key={skill.name}>
                    {" "}
                    {skill.name}
                  </option>
                ) : (
                  ""
                )
              )}
            </select>
          </div>
        </div>
      )}
      {classSelection !== "" && (
        <Collapsable title={"Spells"} styleClass={"modal__button"}>
          <Collapsable title="Cantrips" styleClass={"modal__button_four"}>
            {renderCantripSelects()}
          </Collapsable>
          <Collapsable title="Level 1" styleClass={"modal__button_four"}>
            {renderSpellSelects()}
          </Collapsable>
        </Collapsable>
      )}
      {abilityScoreSelection !== "" && (
        <Collapsable title="Equipment" styleClass={"modal__button"}>
          {classSelection === "Barbarian" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Greataxe"}>Greataxe</option>
                  <option value={"martial-melee"}>
                    Any Martial Melee Weapon
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"2 Handaxes"}>2 Handaxes</option>
                  <option value={"simple"}>Any Simple Weapon</option>
                </select>
                <p>An explorer`&apos;`s pack and four javelins</p>
              </div>
            </div>
          )}
          {classSelection === "Bard" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Longsword"}>Longsword</option>
                  <option value={"simple"}>Any Simple Weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Diplomat's Pack"}>
                    Diplomat`&apos;`s Pack
                  </option>
                  <option value={"Entertainer's Pack"}>
                    Entertainer`&apos;`s Pack
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Lute"}>2 Handaxes</option>
                  <option value={"instrument"}>Any Musical Instrument</option>
                </select>
                <p>Leather Armor and a dagger</p>
              </div>
            </div>
          )}
          {classSelection === "Cleric" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Mace"}>Mace</option>
                  <option value={"Warhammer"}>Warhammer (if proficient)</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Scale Mail"}>Scale Mail</option>
                  <option value={"Leather Armor"}>Leather Armor</option>
                  <option value={"Chain Mail"}>
                    Chain Mail (if proficient)
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Light Crossbow and 20 bolts"}>
                    Light Crossbow and 20 bolts
                  </option>
                  <option value={"simple"}>Any simple weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Priest's Pack"}>Priest`&apos;`s Pack</option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>A shield and a holy symbol</p>
              </div>
            </div>
          )}
          {classSelection === "Druid" && (
            <div className="form__row">
              <div className="form__col-25">
                {" "}
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Shield"}>Wooden Shield</option>
                  <option value={"simple"}>Any simple weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Scimitar"}>Scimitar</option>
                  <option value={"simple-melee"}>
                    Any simple melee weapon
                  </option>
                </select>
                <p>
                  Leather Armor an explorer`&apos;`s pack, and a druidic focus
                </p>
              </div>
            </div>
          )}
          {classSelection === "Fighter" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Chain Mail"}>Chain Mail</option>
                  <option value={"Leather Armor"}>
                    Leather Armor, a Longbow, and 20 arrows
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"martial"}>Martial Weapon and a Shield</option>
                  <option value={"martial-fighter"}>
                    Any two martial weapons
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"A Light Crossbow and 20 bolts"}>
                    A Light Crossbow and 20 bolts
                  </option>
                  <option value={"2 Handaxes"}>2 Handaxes</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
              </div>
            </div>
          )}
          {classSelection === "Monk" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Shortsword"}>Shortsword</option>
                  <option value={"simple"}>Any Simple Weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>10 darts</p>
              </div>
            </div>
          )}
          {classSelection === "Paladin" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"martial"}>Martial Weapon and a Shield</option>
                  <option value={"martial-fighter"}>
                    Any two martial weapons
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"5 javelins"}>5 javelins</option>
                  <option value={"simple-melee"}>
                    Any simple melee weapon
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Priest's Pack"}>Priest`&apos;`s Pack</option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>Chain Mail and a holy symbol</p>
              </div>
            </div>
          )}
          {classSelection === "Ranger" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Scale Mail"}>Scale Mail</option>
                  <option value={"Leather Armor"}>Leather Armor</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"2 Shortswords"}>2 Shortswords</option>
                  <option value={"simple-ranger"}>
                    2 Simple Melee Weapons
                  </option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>A Longbow and a quiver of 20 arrows</p>
              </div>
            </div>
          )}
          {classSelection === "Rogue" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Shortsword"}>Shortsword</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"A Shortbow and a quiver of 20 arrows"}>
                    A Shortbow and a quiver of 20 arrows
                  </option>
                  <option value={"Shortsword"}>Shortsword</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Burglar's Pack"}>
                    Burglar`&apos;`s Pack
                  </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>Leather Armor, two daggers and thieves`&apos;` tools</p>
              </div>
            </div>
          )}
          {classSelection === "Sorcerer" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"A Light Crossbow and 20 bolts"}>
                    A Light Crossbow and 20 bolts
                  </option>
                  <option value={"simple"}>Any Simple Weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Component Pouch"}>Component Pouch</option>
                  <option value={"Arcane Focus"}>Arcane Focus</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                </select>
                <p>2 Daggers</p>
              </div>
            </div>
          )}
          {classSelection === "Warlock" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"A Light Crossbow and 20 bolts"}>
                    A Light Crossbow and 20 bolts
                  </option>
                  <option value={"simple"}>Any Simple Weapon</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Component Pouch"}>Component Pouch</option>
                  <option value={"Arcane Focus"}>Arcane Focus</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Dungeoneer's Pack"}>
                    Dungeoneer`&apos;`s Pack
                  </option>
                  <option value={"Scholar's Pack"}>
                    Scholar`&apos;`s Pack
                  </option>
                </select>
                <p>Leather Armor, any simple weapon, and 2 Daggers</p>
              </div>
            </div>
          )}
          {classSelection === "Wizard" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose your Equipment: </label>
              </div>
              <div className="form__col-75">
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Quarterstaff"}>Quarterstaff</option>
                  <option value={"Dagger"}>Dagger</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Component Pouch"}>Component Pouch</option>
                  <option value={"Arcane Focus"}>Arcane Focus</option>
                </select>
                <select
                  id="equipment"
                  name="equipment"
                  onChange={handleEquipmentChange}
                >
                  <option value=""> -- select an option -- </option>
                  <option value={"Explorer's Pack"}>
                    Explorer`&apos;`s Pack
                  </option>
                  <option value={"Scholar's Pack"}>
                    Scholar`&apos;`s Pack
                  </option>
                </select>
                <p>A spellbook</p>
              </div>
            </div>
          )}
          {martialMelee === "martial-melee" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">
                  Choose a martial melee weapon:{" "}
                </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Battleaxe"}>Battleaxe</option>
                  <option value={"Flail"}>Flail</option>
                  <option value={"Glaive"}>Glaive</option>
                  <option value={"Greataxe"}>Greataxe</option>
                  <option value={"Greatsword"}>Greatsword</option>
                  <option value={"Halberd"}>Halberd</option>
                  <option value={"Lance"}>Lance</option>
                  <option value={"Longsword"}>Longsword</option>
                  <option value={"Maul"}>Maul</option>
                  <option value={"Morningstar"}>Morningstar</option>
                  <option value={"Pike"}>Pike</option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Scimitar"}>Scimitar</option>
                  <option value={"Shortsword"}>Shortsword</option>
                  <option value={"Trident"}>Trident</option>
                  <option value={"War Pick"}>War Pick</option>
                  <option value={"Warhammer"}>Warhammer</option>
                  <option value={"Whip"}>Whip</option>
                </select>
              </div>
            </div>
          )}
          {martial === "martial" && (
            <div className="form__row">
              <div className="form__col-25">
                {" "}
                <label htmlFor="equipment">Choose a martial weapon: </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Battleaxe"}>Battleaxe</option>
                  <option value={"Flail"}>Flail</option>
                  <option value={"Glaive"}>Glaive</option>
                  <option value={"Greataxe"}>Greataxe</option>
                  <option value={"Greatsword"}>Greatsword</option>
                  <option value={"Halberd"}>Halberd</option>
                  <option value={"Lance"}>Lance</option>
                  <option value={"Longsword"}>Longsword</option>
                  <option value={"Maul"}>Maul</option>
                  <option value={"Morningstar"}>Morningstar</option>
                  <option value={"Pike"}>Pike</option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Scimitar"}>Scimitar</option>
                  <option value={"Shortsword"}>Shortsword</option>
                  <option value={"Trident"}>Trident</option>
                  <option value={"War Pick"}>War Pick</option>
                  <option value={"Warhammer"}>Warhammer</option>
                  <option value={"Whip"}>Whip</option>
                  <option value={"Blowgun"}>Blowgun</option>
                  <option value={"Hand Crossbow"}>Crossbow, hand</option>
                  <option value={"Heavy Crossbow"}>Crossbow, heavy</option>
                  <option value={"Longbow"}>Longbow</option>
                  <option value={"Net"}>Net</option>
                </select>
              </div>
            </div>
          )}
          {martial === "martial-fighter" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose 2 martial weapons: </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Battleaxe"}>Battleaxe</option>
                  <option value={"Flail"}>Flail</option>
                  <option value={"Glaive"}>Glaive</option>
                  <option value={"Greataxe"}>Greataxe</option>
                  <option value={"Greatsword"}>Greatsword</option>
                  <option value={"Halberd"}>Halberd</option>
                  <option value={"Lance"}>Lance</option>
                  <option value={"Longsword"}>Longsword</option>
                  <option value={"Maul"}>Maul</option>
                  <option value={"Morningstar"}>Morningstar</option>
                  <option value={"Pike"}>Pike</option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Scimitar"}>Scimitar</option>
                  <option value={"Shortsword"}>Shortsword</option>
                  <option value={"Trident"}>Trident</option>
                  <option value={"War Pick"}>War Pick</option>
                  <option value={"Warhammer"}>Warhammer</option>
                  <option value={"Whip"}>Whip</option>
                  <option value={"Blowgun"}>Blowgun</option>
                  <option value={"Hand Crossbow"}>Crossbow, hand</option>
                  <option value={"Heavy Crossbow"}>Crossbow, heavy</option>
                  <option value={"Longbow"}>Longbow</option>
                  <option value={"Net"}>Net</option>
                </select>
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Battleaxe"}>Battleaxe</option>
                  <option value={"Flail"}>Flail</option>
                  <option value={"Glaive"}>Glaive</option>
                  <option value={"Greataxe"}>Greataxe</option>
                  <option value={"Greatsword"}>Greatsword</option>
                  <option value={"Halberd"}>Halberd</option>
                  <option value={"Lance"}>Lance</option>
                  <option value={"Longsword"}>Longsword</option>
                  <option value={"Maul"}>Maul</option>
                  <option value={"Morningstar"}>Morningstar</option>
                  <option value={"Pike"}>Pike</option>
                  <option value={"Rapier"}>Rapier</option>
                  <option value={"Scimitar"}>Scimitar</option>
                  <option value={"Shortsword"}>Shortsword</option>
                  <option value={"Trident"}>Trident</option>
                  <option value={"War Pick"}>War Pick</option>
                  <option value={"Warhammer"}>Warhammer</option>
                  <option value={"Whip"}>Whip</option>
                  <option value={"Blowgun"}>Blowgun</option>
                  <option value={"Hand Crossbow"}>Crossbow, hand</option>
                  <option value={"Heavy Crossbow"}>Crossbow, heavy</option>
                  <option value={"Longbow"}>Longbow</option>
                  <option value={"Net"}>Net</option>
                </select>
              </div>
            </div>
          )}
          {simpleMelee === "simple-melee" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">
                  Choose a simple melee weapon:{" "}
                </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Club"}>Club</option>
                  <option value={"Dagger"}>Dagger</option>
                  <option value={"Greatclub"}>Greatclub</option>
                  <option value={"Handaxe"}>Handaxe</option>
                  <option value={"Javelin"}>Javelin</option>
                  <option value={"Light Hammer"}>Light Hammer</option>
                  <option value={"Mace"}>Mace</option>
                  <option value={"Quarterstaff"}>Quarterstaff</option>
                  <option value={"Sickle"}>Sickle</option>
                  <option value={"Spear"}>Spear</option>
                </select>
              </div>
            </div>
          )}
          {simpleMelee === "simple-ranger" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">
                  Choose 2 simple melee weapons:{" "}
                </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Club"}>Club</option>
                  <option value={"Dagger"}>Dagger</option>
                  <option value={"Greatclub"}>Greatclub</option>
                  <option value={"Handaxe"}>Handaxe</option>
                  <option value={"Javelin"}>Javelin</option>
                  <option value={"Light Hammer"}>Light Hammer</option>
                  <option value={"Mace"}>Mace</option>
                  <option value={"Quarterstaff"}>Quarterstaff</option>
                  <option value={"Sickle"}>Sickle</option>
                  <option value={"Spear"}>Spear</option>
                </select>
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Club"}>Club</option>
                  <option value={"Dagger"}>Dagger</option>
                  <option value={"Greatclub"}>Greatclub</option>
                  <option value={"Handaxe"}>Handaxe</option>
                  <option value={"Javelin"}>Javelin</option>
                  <option value={"Light Hammer"}>Light Hammer</option>
                  <option value={"Mace"}>Mace</option>
                  <option value={"Quarterstaff"}>Quarterstaff</option>
                  <option value={"Sickle"}>Sickle</option>
                  <option value={"Spear"}>Spear</option>
                </select>
              </div>
            </div>
          )}
          {simple === "simple" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose a simple weapon: </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Club"}>Club</option>
                  <option value={"Dagger"}>Dagger</option>
                  <option value={"Greatclub"}>Greatclub</option>
                  <option value={"Handaxe"}>Handaxe</option>
                  <option value={"Javelin"}>Javelin</option>
                  <option value={"Light Hammer"}>Light Hammer</option>
                  <option value={"Mace"}>Mace</option>
                  <option value={"Quarterstaff"}>Quarterstaff</option>
                  <option value={"Sickle"}>Sickle</option>
                  <option value={"Spear"}>Spear</option>
                  <option value={"Light Crossbow"}>Crossbow, light</option>
                  <option value={"Dart"}>Dart</option>
                  <option value={"Shortbow"}>Shortbow</option>
                  <option value={"Sling"}>Sling</option>
                </select>
              </div>
            </div>
          )}
          {instrument === "instrument" && (
            <div className="form__row">
              <div className="form__col-25">
                <label htmlFor="equipment">Choose an instrument: </label>
              </div>
              <div className="form__col-75">
                <select>
                  <option value=""> -- select an option -- </option>
                  <option value={"Bagpipes"}>Bagpipes</option>
                  <option value={"Drum"}>Drum</option>
                  <option value={"Dulcimer"}>Dulcimer</option>
                  <option value={"Flute"}>Flute</option>
                  <option value={"Lute"}>Lute</option>
                  <option value={"Lyre"}>Lyre</option>
                  <option value={"Horn"}>Horn</option>
                  <option value={"Pan Flute"}>Pan Flute</option>
                  <option value={"Shawm"}>Shawm</option>
                  <option value={"Viol"}>Viol</option>
                </select>
              </div>
            </div>
          )}
        </Collapsable>
      )}
      <Collapsable title="Character Description" styleClass={"modal__button"}>
        <form>
          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="character-name" className="form__label">
                Character Name:{" "}
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="character-name"
                name="name"
                value={playerDesc.name}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Your character's name"
              />
            </div>
          </div>

          <div className="form__row">
            {" "}
            <div className="form__col-25">
              <label htmlFor="player-name" className="form__label">
                Player Name:{" "}
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="player-name"
                name="playName"
                value={playerDesc.playName}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="age" className="form__label">
                Age:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="age"
                name="age"
                value={playerDesc.age}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Age"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="sex" className="form__label">
                Sex:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="sex"
                name="sex"
                value={playerDesc.sex}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Sex"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="height" className="form__label">
                Height:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="height"
                name="height"
                value={playerDesc.height}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Height"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="weight" className="form__label">
                Weight:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="weight"
                name="weight"
                value={playerDesc.weight}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Weight"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="hair-color" className="form__label">
                Hair Color:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="hair-color"
                name="hair-color"
                value={playerDesc.hair}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Hair color"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="eye-color" className="form__label">
                Eye Color:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="eye-color"
                name="eye-color"
                value={playerDesc.eyes}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Eye color"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="skin-color" className="form__label">
                Skin Color:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="skin-color"
                name="skin-color"
                value={playerDesc.skin}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Skin color"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="personality1" className="form__label">
                Personality Trait 1:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="personality1"
                name="personality1"
                value={playerDesc.personality1}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Personality trait"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="personality2" className="form__label">
                Personality Trait 2:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="personality2"
                name="personality2"
                value={playerDesc.personality2}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Personality trait"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="ideals" className="form__label">
                Ideals:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="ideals"
                name="ideals"
                value={playerDesc.ideals}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Ideals"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="bonds" className="form__label">
                Bonds:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="bonds"
                name="bonds"
                value={playerDesc.bonds}
                onChange={handleCharacterDescChange}
                className="form__input"
                placeholder="Bonds"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="flaws" className="form__label">
                Flaws:
              </label>
            </div>
            <div className="form__col-75">
              <input
                type="text"
                id="flaws"
                name="flaws"
                value={playerDesc.flaws}
                onChange={handleCharacterDescChange}
                className="form__input"
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__col-25">
              <label htmlFor="description" className="form__label">
                Description:
              </label>
            </div>
            <div className="form__col-75">
              <textarea
                id="description"
                name="description"
                value={playerDesc.description}
                onChange={handleCharacterDescChange}
                className="form__input_desc"
                placeholder="Description"
              />
            </div>
          </div>
        </form>
      </Collapsable>
      <button type="button" onClick={handlePDFValues} className="modal__button">
        Submit and Download Character
      </button>
    </div>
  );
}

export default CreationForm;
