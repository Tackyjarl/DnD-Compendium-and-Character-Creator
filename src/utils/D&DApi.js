import { checkResponse } from "../utils/api.js";

const BASE_URL = "https://www.dnd5eapi.co";

export const getData = () => {
  return fetch(`${BASE_URL}`).then(checkResponse);
};

export const getClassData = () => {
  return fetch("https://www.dnd5eapi.co/api/classes").then(checkResponse);
  // .then((data) => {
  //   console.log(data.results);
  // });
};

export const getSpecificClassData = (classUrl) => {
  return fetch(`${BASE_URL}${classUrl}`).then(checkResponse);
  // .then((data) => {
  //   console.log(data.results);
  // });
};

export const getSpecificClassLevelData = (classUrl) => {
  return fetch(`${BASE_URL}${classUrl}/levels`).then(checkResponse);
  // .then((data) => {
  //   console.log(classUrl);
  //   console.log(data);
  // });
};

export const getClassFeatures = (feature) => {
  return fetch(`${BASE_URL}/api/features/${feature}`).then(checkResponse);
};

export const getSpellcastingData = (classUrl) => {
  return fetch(`${BASE_URL}/api/classes/${classUrl}/spellcasting`).then(
    checkResponse
  );
};

export const getRacialFeatures = (feature) => {
  return fetch(`${BASE_URL}/api/traits/${feature}`).then(checkResponse);
};

export const getSubclassData = (subclass) => {
  return fetch(`${BASE_URL}/api/subclasses/${subclass}`).then(checkResponse);
};

export const getSubclassLevelData = (subclass) => {
  return fetch(`${BASE_URL}/api/subclasses/${subclass}/levels`).then(
    checkResponse
  );
};

export const getBackgroundData = () => {
  return fetch(`${BASE_URL}/api/backgrounds`).then(checkResponse);
};

export const getSpecificBackgroundData = (background) => {
  return fetch(`${BASE_URL}/api/backgrounds/${background}`).then(checkResponse);
};

export const getRaceData = () => {
  return fetch(`${BASE_URL}/api/races`).then(checkResponse);
};

export const getSpecificRaceData = (race) => {
  return fetch(`${BASE_URL}/api/races/${race}`).then(checkResponse);
};

// export const getSpellData = async () => {
//   const spellIndex = await fetch(`${BASE_URL}/api/spells`).then((response) =>
//     response.json()
//   );
//   return Promise.all(
//     spellIndex.results.map((index) =>
//       fetch(BASE_URL + index.url).then((response) => response.json())
//     )
//   );
// };
export const getSpellData = async () => {
  const spellIndex = await fetch(`${BASE_URL}/api/spells`).then(checkResponse);
  return Promise.all(
    spellIndex.results.map((index) =>
      fetch(BASE_URL + index.url).then((res) => res.json())
    )
  );
};

export const getSpecificSpellData = (spell) => {
  return fetch(`${BASE_URL}/api/spells/${spell}`).then(checkResponse);
};

export const getEquipmentData = async () => {
  const equipmentIndex = await fetch(`${BASE_URL}/api/equipment`).then(
    (response) => response.json()
  );
  return Promise.all(
    equipmentIndex.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
};

export const getSpecificEquipmentData = (item) => {
  return fetch(`${BASE_URL}/api/equipment/${item}`).then(checkResponse);
};

export const getMagicItemData = async () => {
  const magicItemIndex = await fetch(`${BASE_URL}/api/magic-items`).then(
    (response) => response.json()
  );
  return Promise.all(
    magicItemIndex.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
};

export const getSpecificMagicItemData = (item) => {
  return fetch(`${BASE_URL}/api/magic-items/${item}`).then(checkResponse);
};
