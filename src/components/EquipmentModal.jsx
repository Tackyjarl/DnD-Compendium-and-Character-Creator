import React, { useEffect } from "react";

function EquipmentModal({ isOpen, closeActiveModal, specificEquipmentData }) {
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

  // console.log(specificEquipmentData);
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
        {specificEquipmentData.name == undefined && <h2>Loading...</h2>}
        {specificEquipmentData.name !== undefined && (
          <div>
            <h2 className="modal__title">{specificEquipmentData.name}</h2>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <div>
              {specificEquipmentData?.tool_category !== undefined && (
                <h4>{specificEquipmentData?.tool_category}</h4>
              )}
            </div>
            <div>
              {" "}
              {specificEquipmentData.desc !== undefined && (
                <h4>{specificEquipmentData.desc} </h4>
              )}
            </div>

            <div>
              {specificEquipmentData?.armor_category !== undefined && (
                <h4>{specificEquipmentData?.armor_category} Armor</h4>
              )}
              {specificEquipmentData?.armor_class !== undefined && (
                <h4>
                  Armor Class (AC): {specificEquipmentData?.armor_class?.base}
                  {specificEquipmentData?.armor_category == "Light" &&
                    " + Dex Modifier"}
                  {specificEquipmentData?.armor_category == "Medium" &&
                    " + Dex Modifier (max 2)"}
                </h4>
              )}
              {specificEquipmentData?.stealth_disadvantage !== undefined && (
                <h4>
                  {specificEquipmentData?.stealth_disadvantage == true &&
                    "Disadvantage on Stealth Checks"}
                </h4>
              )}
              {specificEquipmentData?.str_minimum !== undefined && (
                <h4>
                  {specificEquipmentData?.str_minimum > 0 &&
                    `Requires ${specificEquipmentData?.str_minimum} Str`}
                </h4>
              )}
            </div>
            <div>
              {specificEquipmentData?.weapon_category !== undefined && (
                <h4>
                  {specificEquipmentData?.weapon_category + " "}
                  {specificEquipmentData?.weapon_range} Weapon
                </h4>
              )}
              {specificEquipmentData?.damage !== undefined && (
                <h4>
                  {specificEquipmentData?.damage.damage_dice + " "}
                  {specificEquipmentData?.damage.damage_type.name} Damage
                </h4>
              )}
              {specificEquipmentData?.properties?.length !== 0 && (
                <h4>
                  {"Properties: " +
                    specificEquipmentData?.properties?.map(
                      (property) => " " + property.name
                    )}
                </h4>
              )}
            </div>
            <div>
              {specificEquipmentData?.speed !== undefined && (
                <h4>
                  Speed: {specificEquipmentData?.speed.quantity + " "}
                  {specificEquipmentData?.speed.unit}
                </h4>
              )}
              {specificEquipmentData?.capacity !== undefined && (
                <h4>Capacity: {specificEquipmentData?.capacity}</h4>
              )}
            </div>
            {specificEquipmentData.cost !== undefined && (
              <h4>
                Cost:{" "}
                <small>
                  {specificEquipmentData.cost?.quantity + " "}
                  {specificEquipmentData.cost?.unit}
                </small>
              </h4>
            )}
            {specificEquipmentData.weight !== undefined && (
              <h4>
                Weight:{" "}
                <small>
                  {specificEquipmentData.weight + " "}
                  ibs.
                </small>
              </h4>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default EquipmentModal;
