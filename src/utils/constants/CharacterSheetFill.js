import React from "react";
import { PDFDocument } from "pdf-lib";
import { characterSheetPDFBase64 } from "./CharacterSheetBase64";
export async function fillCharacterSheet(
  name,
  charClass,
  back,
  playName,
  charRace,
  charAlignment,
  armor,
  charSpeed,
  charHpMax,
  charInitiative,
  personality1,
  personality2,
  charIdeals,
  charBonds,
  charFlaws,
  charAthletics,
  athleticsCheckbox,
  charAnimal,
  animalCheckbox,
  charAcrobatics,
  acrobaticsCheckbox,
  charArcana,
  arcanaCheckbox,
  charDeception,
  deceptionCheckbox,
  charHistory,
  historyCheckbox,
  charInsight,
  insightCheckbox,
  charIntimidation,
  intimidationCheckbox,
  charInvestigation,
  investigationCheckbox,
  charMedicine,
  medicineCheckbox,
  charNature,
  natureCheckbox,
  charPerception,
  perceptionCheckbox,
  charPerformance,
  performanceCheckbox,
  charPersuasion,
  persuasionCheckbox,
  charReligion,
  religionCheckbox,
  charSleight,
  sleightCheckbox,
  charStealth,
  stealthCheckbox,
  charSurvival,
  survivalCheckbox,
  charPassive,
  charStrMod,
  charDexMod,
  charConMod,
  charIntMod,
  charWisMod,
  charChaMod,
  strCheckbox,
  dexCheckbox,
  conCheckbox,
  intCheckbox,
  wisCheckbox,
  chaCheckbox,
  charStrSave,
  charDexSave,
  charConSave,
  charIntSave,
  charWisSave,
  charChaSave,
  charStr,
  charDex,
  charCon,
  charInt,
  charWis,
  charCha,
  charAge,
  charSex,
  charHeight,
  charWeight,
  charHair,
  charEyes,
  charSkin,
  charDesc
) {
  const pdfDoc = await PDFDocument.load(characterSheetPDFBase64);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("CharacterName").setText(name);
  const classField = form.getTextField("ClassLevel").setText(charClass);
  const background = form.getTextField("Background").setText(back);
  const playerName = form.getTextField("PlayerName").setText(playName);
  const race = form.getTextField("Race ").setText(charRace);
  const alignment = form.getTextField("Alignment").setText(charAlignment);
  const xp = form.getTextField("XP").setText("0");
  const inspiration = form.getTextField("Inspiration");

  const armorClass = form.getTextField("AC").setText(armor);
  const initiative = form.getTextField("Initiative").setText(charInitiative);
  const speed = form.getTextField("Speed").setText(charSpeed);
  const profBonus = form.getTextField("ProfBonus").setText("2");
  const hpMax = form.getTextField("HPMax").setText(charHpMax);
  const hpCurrent = form.getTextField("HPCurrent").setText(charHpMax);
  // const hpTemp = form.getTextField("HPTemp");
  const hdTotal = form.getTextField("HDTotal").setText("1");
  const hd = form.getTextField("HD").setText("1");

  const personalityTraits = form
    .getTextField("PersonalityTraits ")
    .setText(personality1 + ", " + personality2);
  const ideals = form.getTextField("Ideals").setText(charIdeals);
  const bonds = form.getTextField("Bonds").setText(charBonds);
  const flaws = form.getTextField("Flaws").setText(charFlaws);

  // const weapon1 = form.getTextField("Wpn Name");
  // const weapon1Attack = form.getTextField("Wpn1 AtkBonus");
  // const weapon1Damage = form.getTextField("Wpn1 Damage");
  // const weapon2 = form.getTextField("Wpn Name 2");
  // const weapon2Attack = form.getTextField("Wpn2 AtkBonus ");
  // const weapon2Damage = form.getTextField("Wpn2 Damage ");
  // const weapon3 = form.getTextField("Wpn Name 3");
  // const weapon3Attack = form.getTextField("Wpn3 AtkBonus  ");
  // const weapon3Damage = form.getTextField("Wpn3 Damage ");
  // const attacksSpellcasting = form.getTextField("AttacksSpellcasting");

  const passivePerception = form.getTextField("Passive").setText(charPassive);

  // const cp = form.getTextField("CP");
  // const sp = form.getTextField("SP");
  // const ep = form.getTextField("EP");
  // const gp = form.getTextField("GP");
  // const pp = form.getTextField("PP");

  // const proficiencies = form.getTextField("ProficienciesLang");
  // const equipment = form.getTextField("Equipment");
  // const features = form.getTextField("Features and Traits");

  const strCheck = form.getCheckBox("Check Box 11");
  if (strCheckbox === true) {
    strCheck.check();
  } else strCheck.uncheck();
  const saveSTR = form.getTextField("ST Strength").setText(charStrSave);
  const str = form.getTextField("STR").setText(charStr);
  const strMod = form.getTextField("STRmod").setText(charStrMod);

  const dexCheck = form.getCheckBox("Check Box 18");
  if (dexCheckbox === true) {
    dexCheck.check();
  } else dexCheck.uncheck();
  const saveDEX = form.getTextField("ST Dexterity").setText(charDexSave);
  const dex = form.getTextField("DEX").setText(charDex);
  const dexMod = form.getTextField("DEXmod ").setText(charDexMod);

  const conCheck = form.getCheckBox("Check Box 19");
  if (conCheckbox === true) {
    conCheck.check();
  } else conCheck.uncheck();
  const saveCON = form.getTextField("ST Constitution").setText(charConSave);
  const con = form.getTextField("CON").setText(charCon);
  const conMod = form.getTextField("CONmod").setText(charConMod);

  const intCheck = form.getCheckBox("Check Box 20");
  if (intCheckbox === true) {
    intCheck.check();
  } else intCheck.uncheck();
  const saveINT = form.getTextField("ST Intelligence").setText(charIntSave);
  const int = form.getTextField("INT").setText(charInt);
  const intMod = form.getTextField("INTmod").setText(charIntMod);

  const wisCheck = form.getCheckBox("Check Box 21");
  if (wisCheckbox === true) {
    wisCheck.check();
  } else wisCheck.uncheck();
  const saveWIS = form.getTextField("ST Wisdom").setText(charWisSave);
  const wis = form.getTextField("WIS").setText(charWis);
  const wisMod = form.getTextField("WISmod").setText(charWisMod);

  const chaCheck = form.getCheckBox("Check Box 22");
  if (chaCheckbox === true) {
    chaCheck.check();
  } else chaCheck.uncheck();
  const saveCHA = form.getTextField("ST Charisma").setText(charChaSave);
  const cha = form.getTextField("CHA").setText(charCha);
  const chaMod = form.getTextField("CHamod").setText(charChaMod);

  const acrobaticsCheck = form.getCheckBox("Check Box 23");
  const acrobatics = form.getTextField("Acrobatics").setText(charAcrobatics);
  if (acrobaticsCheckbox === true) {
    acrobaticsCheck.check();
  } else acrobaticsCheck.uncheck();

  const animalCheck = form.getCheckBox("Check Box 24");
  const animalHandling = form.getTextField("Animal").setText(charAnimal);
  if (animalCheckbox === true) {
    animalCheck.check();
  } else animalCheck.uncheck();

  const arcanaCheck = form.getCheckBox("Check Box 25");
  const arcana = form.getTextField("Arcana").setText(charArcana);
  if (arcanaCheckbox === true) {
    arcanaCheck.check();
  } else arcanaCheck.uncheck();

  const athleticsCheck = form.getCheckBox("Check Box 26");
  const athletics = form.getTextField("Athletics").setText(charAthletics);
  if (athleticsCheckbox === true) {
    athleticsCheck.check();
  } else athleticsCheck.uncheck();

  const deceptionCheck = form.getCheckBox("Check Box 27");
  const deception = form.getTextField("Deception ").setText(charDeception);
  if (deceptionCheckbox === true) {
    deceptionCheck.check();
  } else deceptionCheck.uncheck();

  const historyCheck = form.getCheckBox("Check Box 28");
  const history = form.getTextField("History ").setText(charHistory);
  if (historyCheckbox === true) {
    historyCheck.check();
  } else historyCheck.uncheck();

  const insightCheck = form.getCheckBox("Check Box 29");
  const insight = form.getTextField("Insight").setText(charInsight);
  if (insightCheckbox === true) {
    insightCheck.check();
  } else insightCheck.uncheck();

  const intimidationCheck = form.getCheckBox("Check Box 30");
  const intimidation = form
    .getTextField("Intimidation")
    .setText(charIntimidation);
  if (intimidationCheckbox === true) {
    intimidationCheck.check();
  } else intimidationCheck.uncheck();

  const investigationCheck = form.getCheckBox("Check Box 31");
  const investigation = form
    .getTextField("Investigation ")
    .setText(charInvestigation);
  if (investigationCheckbox === true) {
    investigationCheck.check();
  } else investigationCheck.uncheck();

  const medicineCheck = form.getCheckBox("Check Box 32");
  const medicine = form.getTextField("Medicine").setText(charMedicine);
  if (medicineCheckbox === true) {
    medicineCheck.check();
  } else medicineCheck.uncheck();

  const natureCheck = form.getCheckBox("Check Box 33");
  const nature = form.getTextField("Nature").setText(charNature);
  if (natureCheckbox === true) {
    natureCheck.check();
  } else natureCheck.uncheck();

  const perceptionCheck = form.getCheckBox("Check Box 34");
  const perception = form.getTextField("Perception ").setText(charPerception);
  if (perceptionCheckbox === true) {
    perceptionCheck.check();
  } else perceptionCheck.uncheck();

  const performanceCheck = form.getCheckBox("Check Box 35");
  const performance = form.getTextField("Performance").setText(charPerformance);
  if (performanceCheckbox === true) {
    performanceCheck.check();
  } else performanceCheck.uncheck();

  const persuasionCheck = form.getCheckBox("Check Box 36");
  const persuasion = form.getTextField("Persuasion").setText(charPersuasion);
  if (persuasionCheckbox === true) {
    persuasionCheck.check();
  } else persuasionCheck.uncheck();

  const religionCheck = form.getCheckBox("Check Box 37");
  const religion = form.getTextField("Religion").setText(charReligion);
  if (religionCheckbox === true) {
    religionCheck.check();
  } else religionCheck.uncheck();

  const sleightCheck = form.getCheckBox("Check Box 38");
  const slightOfHand = form.getTextField("SleightofHand").setText(charSleight);
  if (sleightCheckbox === true) {
    sleightCheck.check();
  } else sleightCheck.uncheck();

  const stealthCheck = form.getCheckBox("Check Box 39");
  const stealth = form.getTextField("Stealth ").setText(charStealth);
  if (stealthCheckbox === true) {
    stealthCheck.check();
  } else stealthCheck.uncheck();

  const survivalCheck = form.getCheckBox("Check Box 40");
  const survival = form.getTextField("Survival").setText(charSurvival);
  if (survivalCheckbox === true) {
    survivalCheck.check();
  } else survivalCheck.uncheck();

  const age = form.getTextField("Age").setText(charAge);
  const height = form.getTextField("Height").setText(charHeight);
  const weight = form.getTextField("Weight").setText(charWeight);
  const characterName2 = form.getTextField("CharacterName 2").setText(name);
  const eyeColor = form.getTextField("Eyes").setText(charEyes);
  const skinColor = form.getTextField("Skin").setText(charSkin);
  const hairColor = form.getTextField("Hair").setText(charHair);

  // const allies = form.getTextField("Allies");
  // const faction = form.getTextField("FactionName");
  const backstory = form.getTextField("Backstory").setText(charDeception);
  // const feats = form.getTextField("Feat+Traits");
  // const treasure = form.getTextField("Treasure");

  const pdfBytesFilled = await pdfDoc.save();

  const blob = new Blob([pdfBytesFilled], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url);
}
