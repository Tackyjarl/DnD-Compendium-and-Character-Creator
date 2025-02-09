import React, { useState, useEffect } from "react";
import { getClassFeatures } from "../utils/D&DApi";

function SubclassModal({
  isOpen,
  closeActiveModal,
  subclassDescriptionInfo,
  subclassLevelData,
  handleFeatureButtonClick,
}) {
  const [subclassLevelInfo, setSubclassLevelInfo] = useState("");
  const [subclassIndex, setSubclassIndex] = useState("");
  const [subclassFeatureDescription, setSubclassFeatureDescription] =
    useState("");
  const [subclassTitleData, setSubclassTitleData] = useState("");

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

  const handleSubclassFeatureClick = () => {
    handleFeatureButtonClick(subclassTitleData, subclassFeatureDescription);
    console.log(subclassFeatureDescription);
    getClassFeatures(subclassFeatureDescription).then((res) => {
      handleFeatureButtonClick(subclassTitleData, res);
      // console.log(subclassFeatureDescription);
    });
  };

  // console.log(subclassLevelData);

  function getSubclassText() {
    getSubclassFeatureText();
  }

  const getSubclassFeatureText = () => {
    let subclassText = [];
    let subclassName = [];
    let subclassIndex = [];
    subclassLevelData.map((level) => {
      if (!isOpen) {
        return;
      } else {
        subclassText.push(level.features);
      }
    });
    subclassText?.map((text) => {
      text.map((item) => {
        subclassName.push(item.name);
        subclassIndex.push(item.index);
      });
    });

    const joinedSubclassText = subclassName.join(", ");
    const joinedSubclassIndex = subclassIndex.join(", ");
    setSubclassLevelInfo(joinedSubclassText);
    setSubclassIndex(joinedSubclassIndex);
    // console.log(subclassText);
    // console.log(subclassName);
  };

  const sublclassInfoListUnordered = subclassLevelInfo
    .split(", ")
    .filter((item) => item !== "")
    .map((item) => {
      return item;
    });

  // console.log(sublclassInfoListUnordered);

  const sublclassIndexListUnordered = subclassIndex
    .split(", ")
    .filter((item) => item !== "")
    .map((info) => {
      return info;
    });

  useEffect(() => {
    if (isOpen) {
      getSubclassText();
    }
  }),
    [];

  // console.log(subclassLevelData.level);

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
        {subclassDescriptionInfo.name == undefined && <h2>Loading...</h2>}
        {subclassDescriptionInfo.name !== undefined && (
          <div>
            <h2 className="modal__title">{subclassDescriptionInfo.name}</h2>
            <h5>{subclassDescriptionInfo.desc}</h5>
            <button
              onClick={closeActiveModal}
              type="button"
              className="modal__close"
            ></button>
            <div>
              <div className="modal__button_container">
                {sublclassInfoListUnordered.map((data, index) => (
                  <button
                    className="modal__button"
                    key={data}
                    onMouseEnter={() => {
                      setSubclassFeatureDescription(
                        sublclassIndexListUnordered[index]
                      );
                      setSubclassTitleData(data);
                    }}
                    onClick={() => {
                      setSubclassFeatureDescription(
                        sublclassIndexListUnordered[index]
                      );
                      setSubclassTitleData(data);
                      handleSubclassFeatureClick();
                    }}
                    disabled={!isOpen}
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubclassModal;
