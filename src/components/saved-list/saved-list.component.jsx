import React from "react";
import SavedListStyles from "./saved-list.styles";

const SavedList = ({
  savedList,
  setSavedList,
  savedListOpen,
  setSavedListOpen
}) => {
  return (
    <SavedListStyles.Container savedListOpen={savedListOpen}>
      <SavedListStyles.Header onClick={() => setSavedListOpen(!savedListOpen)}>
        <span>{savedList.length}</span>
        Font Famil{savedList.length > 1 ? "ies" : "y"} Saved
      </SavedListStyles.Header>
      {savedListOpen && (
        <SavedListStyles.SelectionDisplay>
          <div className="StateHeader">
            <h3>Your Selection</h3>
            <button>Clear All</button>
            <i className="fas fa-share"></i>
            <i className="fas fa-download"></i>
          </div>
          <div className="List">
            {savedList.map((e, i) => {
              return (
                <SavedListStyles.FontNamePill key={e.family}>
                  <p>{e.family}</p>
                  <i className="fal fa-times"></i>
                </SavedListStyles.FontNamePill>
              );
            })}
          </div>
          <SavedListStyles.GenerateURL>
            <h3>Embeded Font</h3>
            <p>
              To embed your selected fonts into a webpage, copy this code into
              the head of your HTML document.
            </p>
            <div className="CodeBlock">
              <li>
                {`<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet">`}
              </li>
            </div>
          </SavedListStyles.GenerateURL>
          <SavedListStyles.GenerateURL>
            <h3>Specify in CSS</h3>
            <p>Use the following CSS rules to specify these families:</p>
            <div className="CodeBlock">
              {savedList.map((e, i) => {
                return (
                  <li key={e.family}>
                    font-family: '{e.family}', {e.category};
                  </li>
                );
              })}
            </div>
          </SavedListStyles.GenerateURL>
        </SavedListStyles.SelectionDisplay>
      )}
    </SavedListStyles.Container>
  );
};

export default SavedList;
