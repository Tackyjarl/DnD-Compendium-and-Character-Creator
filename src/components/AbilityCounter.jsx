import React from "react";
import { useState, useEffect } from "react";

function AbiilityCounter({ abilityScoreBonus, sendAbilityData }) {
  const [abilityCount, setAbilityCount] = useState([
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

  const handleIncrement = (id) => {
    setAbilityCount((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity !== 15
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    // sendAbilityData(abilityCount);
  };

  // console.log(abilityScoreBonus.strength);

  const handleDecrement = (id) => {
    setAbilityCount((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity !== 8
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    // sendAbilityData(abilityCount);
  };

  useEffect(() => {
    sendAbilityData(abilityCount);
  }, [abilityCount, sendAbilityData]);

  return (
    <div className="form__row">
      <ul>
        {abilityCount.map((item) => (
          <div className="form__col-25" key={item}>
            <li key={item.id} style={{ listStyle: "none" }}>
              {item.name}: {item.quantity + " "} +{" "}
              {abilityScoreBonus[item.id] + " "} ={" "}
              {" " + (item.quantity + abilityScoreBonus[item.id])}
              <div className="form__col-75">
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleDecrement(item.id)}>-</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AbiilityCounter;
