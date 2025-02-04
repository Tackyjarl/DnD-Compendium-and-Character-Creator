export const getProficiencies = (
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
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
) => {
  setAthleticsProf(
    option1 === "Athletics" ||
      option2 === "Athletics" ||
      option3 === "Athletics" ||
      option4 === "Athletics"
      ? 2
      : 0
  );
  setAcrobaticsProf(
    option1 === "Acrobatics" ||
      option2 === "Acrobatics" ||
      option3 === "Acrobatics" ||
      option4 === "Acrobatics"
      ? 2
      : 0
  );
  setAnimalProf(
    option1 === "Animal Handling" ||
      option2 === "Animal Handling" ||
      option3 === "Animal Handling" ||
      option4 === "Animal Handling"
      ? 2
      : 0
  );
  setDeceptionProf(
    option1 === "Deception" ||
      option2 === "Deception" ||
      option3 === "Deception" ||
      option4 === "Deception"
      ? 2
      : 0
  );
  setHistoryProf(
    option1 === "History" ||
      option2 === "History" ||
      option3 === "History" ||
      option4 === "History"
      ? 2
      : 0
  );
  setInsightProf(
    option1 === "Insight" ||
      option2 === "Insight" ||
      option3 === "Insight" ||
      option4 === "Insight" ||
      option5 === "Insight"
      ? 2
      : 0
  );
  setIntimidationProf(
    option1 === "Intimidation" ||
      option2 === "Intimidation" ||
      option3 === "Intimidation" ||
      option4 === "Intimidation"
      ? 2
      : 0
  );
  setInvestigationProf(
    option1 === "Investigation" ||
      option2 === "Investigation" ||
      option3 === "Investigation" ||
      option4 === "Investigation"
      ? 2
      : 0
  );
  setMedicineProf(
    option1 === "Medicine" ||
      option2 === "Medicine" ||
      option3 === "Medicine" ||
      option4 === "Medicine"
      ? 2
      : 0
  );
  setNatureProf(
    option1 === "Nature" ||
      option2 === "Nature" ||
      option3 === "Nature" ||
      option4 === "Nature"
      ? 2
      : 0
  );
  setPerceptionProf(
    option1 === "Perception" ||
      option2 === "Perception" ||
      option3 === "Perception" ||
      option4 === "Perception"
      ? 2
      : 0
  );
  setPerformanceProf(
    option1 === "Performance" ||
      option2 === "Performance" ||
      option3 === "Performance" ||
      option4 === "Performance"
      ? 2
      : 0
  );
  setPersuasionProf(
    option1 === "Persuasion" ||
      option2 === "Persuasion" ||
      option3 === "Persuasion" ||
      option4 === "Persuasion"
      ? 2
      : 0
  );
  setReligionProf(
    option1 === "Religion" ||
      option2 === "Religion" ||
      option3 === "Religion" ||
      option4 === "Religion" ||
      option6 === "Religion"
      ? 2
      : 0
  );
  setSleightProf(
    option1 === "Sleight of Hand" ||
      option2 === "Sleight of Hand" ||
      option3 === "Sleight of Hand" ||
      option4 === "Sleight of Hand"
      ? 2
      : 0
  );
  setStealthProf(
    option1 === "Stealth" ||
      option2 === "Stealth" ||
      option3 === "Stealth" ||
      option4 === "Stealth"
      ? 2
      : 0
  );
  setSurvivalProf(
    option1 === "Survivial" ||
      option2 === "Survival" ||
      option3 === "Survival" ||
      option4 === "Survival"
      ? 2
      : 0
  );
  setArcanaProf(
    option1 === "Arcana" ||
      option2 === "Arcana" ||
      option3 === "Arcana" ||
      option4 === "Arcana"
      ? 2
      : 0
  );

  setAthleticsCheckbox(
    option1 === "Athletics" ||
      option2 === "Athletics" ||
      option3 === "Athletics" ||
      option4 === "Athletics"
      ? true
      : false
  );
  setAcrobaticsCheckbox(
    option1 === "Acrobatics" ||
      option2 === "Acrobatics" ||
      option3 === "Acrobatics" ||
      option4 === "Acrobatics"
      ? true
      : false
  );
  setAnimalCheckbox(
    option1 === "Animal Handling" ||
      option2 === "Animal Handling" ||
      option3 === "Animal Handling" ||
      option4 === "Animal Handling"
      ? true
      : false
  );
  setDeceptionCheckbox(
    option1 === "Deception" ||
      option2 === "Deception" ||
      option3 === "Deception" ||
      option4 === "Deception"
      ? true
      : false
  );
  setHistoryCheckbox(
    option1 === "History" ||
      option2 === "History" ||
      option3 === "History" ||
      option4 === "History"
      ? true
      : false
  );
  setInsightCheckbox(
    option1 === "Insight" ||
      option2 === "Insight" ||
      option3 === "Insight" ||
      option4 === "Insight" ||
      option5 === "Insight"
      ? true
      : false
  );
  setIntimidationCheckbox(
    option1 === "Intimidation" ||
      option2 === "Intimidation" ||
      option3 === "Intimidation" ||
      option4 === "Intimidation"
      ? true
      : false
  );
  setInvestigationCheckbox(
    option1 === "Investigation" ||
      option2 === "Investigation" ||
      option3 === "Investigation" ||
      option4 === "Investigation"
      ? true
      : false
  );
  setMedicineCheckbox(
    option1 === "Medicine" ||
      option2 === "Medicine" ||
      option3 === "Medicine" ||
      option4 === "Medicine"
      ? true
      : false
  );
  setNatureCheckbox(
    option1 === "Nature" ||
      option2 === "Nature" ||
      option3 === "Nature" ||
      option4 === "Nature"
      ? true
      : false
  );
  setPerceptionCheckbox(
    option1 === "Perception" ||
      option2 === "Perception" ||
      option3 === "Perception" ||
      option4 === "Perception"
      ? true
      : false
  );
  setPerformanceCheckbox(
    option1 === "Performance" ||
      option2 === "Performance" ||
      option3 === "Performance" ||
      option4 === "Performance"
      ? true
      : false
  );
  setPersuasionCheckbox(
    option1 === "Persuasion" ||
      option2 === "Persuasion" ||
      option3 === "Persuasion" ||
      option4 === "Persuasion"
      ? true
      : false
  );
  setReligionCheckbox(
    option1 === "Religion" ||
      option2 === "Religion" ||
      option3 === "Religion" ||
      option4 === "Religion" ||
      option6 === "Religion"
      ? true
      : false
  );
  setSleightCheckbox(
    option1 === "Sleight of Hand" ||
      option2 === "Sleight of Hand" ||
      option3 === "Sleight of Hand" ||
      option4 === "Sleight of Hand"
      ? true
      : false
  );
  setStealthCheckbox(
    option1 === "Stealth" ||
      option2 === "Stealth" ||
      option3 === "Stealth" ||
      option4 === "Stealth"
      ? true
      : false
  );
  setSurvivalCheckbox(
    option1 === "Survival" ||
      option2 === "Survival" ||
      option3 === "Survival" ||
      option4 === "Survival"
      ? true
      : false
  );
  setArcanaCheckbox(
    option1 === "Arcana" ||
      option2 === "Arcana" ||
      option3 === "Arcana" ||
      option4 === "Arcana"
      ? true
      : false
  );
  //   if (
  //     option1 === "Animal Handling" ||
  //     option2 === "Animal Handling" ||
  //     option3 === "Animal Handling" ||
  //     option4 === "Animal Handling"
  //   ) {
  //     setAthleticsProf(
  //       option1 === "Athletics" ||
  //         option2 === "Athletics" ||
  //         option3 === "Athletics" ||
  //         option4 === "Athletics"
  //         ? 2
  //         : 0
  //     );
  //     setAcrobaticsProf(0);
  //     setAnimalProf(2);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(true);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Arcana" ||
  //     option2 === "Arcana" ||
  //     option3 === "Arcana" ||
  //     option4 === "Arcana"
  //   ) {
  //     setAthleticsProf(2);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Acrobatics" ||
  //     option2 === "Acrobatics" ||
  //     option3 === "Acrobatics" ||
  //     option4 === "Acrobatics"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(2);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(true);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Deception" ||
  //     option2 === "Deception" ||
  //     option3 === "Deception" ||
  //     option4 === "Deception"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(2);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(true);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "History" ||
  //     option2 === "History" ||
  //     option3 === "History" ||
  //     option4 === "History"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(2);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(true);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Insight" ||
  //     option2 === "Insight" ||
  //     option3 === "Insight" ||
  //     option4 === "Insight"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(2);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(true);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Intimidation" ||
  //     option2 === "Intimidation" ||
  //     option3 === "Intimidation" ||
  //     option4 === "Intimidation"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(2);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(true);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Investigation" ||
  //     option2 === "Investigation" ||
  //     option3 === "Investigation" ||
  //     option4 === "Investigation"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(2);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(true);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Medicine" ||
  //     option2 === "Medicine" ||
  //     option3 === "Medicine" ||
  //     option4 === "Medicine"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(2);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(true);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Nature" ||
  //     option2 === "Nature" ||
  //     option3 === "Nature" ||
  //     option4 === "Nature"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(2);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(true);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Perception" ||
  //     option2 === "Perception" ||
  //     option3 === "Perception" ||
  //     option4 === "Perception"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(2);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(true);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Performance" ||
  //     option2 === "Performance" ||
  //     option3 === "Performance" ||
  //     option4 === "Performance"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(2);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(true);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Persuasion" ||
  //     option2 === "Persuasion" ||
  //     option3 === "Persuasion" ||
  //     option4 === "Persuasion"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(2);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(true);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Religion" ||
  //     option2 === "Religion" ||
  //     option3 === "Religion" ||
  //     option4 === "Religion"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(2);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(true);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Sleight of Hand" ||
  //     option2 === "Sleight of Hand" ||
  //     option3 === "Sleight of Hand" ||
  //     option4 === "Sleight of Hand"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(2);
  //     setStealthProf(0);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(true);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Stealth" ||
  //     option2 === "Stealth" ||
  //     option3 === "Stealth" ||
  //     option4 === "Stealth"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(2);
  //     setSurvivalProf(0);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(false);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(true);
  //     setSurvivalCheckbox(false);
  //     setArcanaCheckbox(false);
  //   } else if (
  //     option1 === "Survival" ||
  //     option2 === "Survival" ||
  //     option3 === "Survival" ||
  //     option4 === "Survival"
  //   ) {
  //     setAthleticsProf(0);
  //     setAcrobaticsProf(0);
  //     setAnimalProf(0);
  //     setDeceptionProf(0);
  //     setHistoryProf(0);
  //     setInsightProf(0);
  //     setIntimidationProf(0);
  //     setInvestigationProf(0);
  //     setMedicineProf(0);
  //     setNatureProf(0);
  //     setPerceptionProf(0);
  //     setPerformanceProf(0);
  //     setPersuasionProf(0);
  //     setReligionProf(0);
  //     setSleightProf(0);
  //     setStealthProf(0);
  //     setSurvivalProf(2);
  //     setArcanaProf(0);

  //     setAthleticsCheckbox(false);
  //     setAcrobaticsCheckbox(false);
  //     setAnimalCheckbox(false);
  //     setDeceptionCheckbox(false);
  //     setHistoryCheckbox(false);
  //     setInsightCheckbox(false);
  //     setIntimidationCheckbox(false);
  //     setInvestigationCheckbox(false);
  //     setMedicineCheckbox(false);
  //     setNatureCheckbox(false);
  //     setPerceptionCheckbox(false);
  //     setPerformanceCheckbox(false);
  //     setPersuasionCheckbox(true);
  //     setReligionCheckbox(false);
  //     setSleightCheckbox(false);
  //     setStealthCheckbox(false);
  //     setSurvivalCheckbox(true);
  //     setArcanaCheckbox(false);
  //   }
};
