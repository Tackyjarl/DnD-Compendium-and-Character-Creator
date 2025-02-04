import React, { useEffect } from "react";
import { useState } from "react";

function AbiilityRoller({ abilityScoreBonus, sendAbilityRoll }) {
  const [abilityRoll, setAbilityRoll] = useState([
    {
      id: "strength",
      name: "Strength",
      quantity: 8,
    },
    { id: "dexterity", name: "Dexterity", quantity: 8 },
    { id: "constitution", name: "Constitution", quantity: 8 },
    { id: "intelligence", name: "Intelligence", quantity: 8 },
    { id: "wisdom", name: "Wisdom", quantity: 8 },
    { id: "charisma", name: "Charisma", quantity: 8 },
  ]);

  const handleRoll = (id) => {
    const minRoll = Math.ceil(1);
    const maxRoll = Math.floor(20);
    const randomNumber = Math.floor(
      Math.random() * (maxRoll - minRoll + 1) + minRoll
    );

    setAbilityRoll((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: randomNumber,
            }
          : item
      )
    );
  };

  useEffect(() => {
    sendAbilityRoll(abilityRoll);
  }, [abilityRoll, sendAbilityRoll]);
  return (
    <ul>
      {abilityRoll.map((item) => (
        <li key={item.id}>
          {item.name}: {item.quantity + " "} +{" "}
          {abilityScoreBonus[item.id] + " "}
          <button onClick={() => handleRoll(item.id)}>Roll</button>
        </li>
      ))}
    </ul>
  );
}

export default AbiilityRoller;
