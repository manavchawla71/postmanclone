import React from "react";
import "./ResultComponent.css";
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdCheck } from "react-icons/md"; // Import the tick icon

const ResultComponent = ({ responsedata, setresponsedata }) => {
  const [copy, setcopy] = useState(false);

  const handlecopyresponse = () => {
    if (responsedata) {
      // Copy the response data to the clipboard
      navigator.clipboard
        .writeText(JSON.stringify(responsedata, null, 2))
        .then(() => {
          setcopy(true);
          // Reset the copy state after a few seconds
          setTimeout(() => setcopy(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="response-data">
      {responsedata !== null ? (
        <>
          <h1>Response Data</h1>
          <div className="copy-icon" onClick={handlecopyresponse}>
            {copy ? (
              <MdCheck className="copy-icon-tick" title="Copied!" />
            ) : (
              <MdOutlineContentCopy
                className="copy-icon"
                title="Copy response data"
              />
            )}
          </div>
          <p>{JSON.stringify(responsedata, null, 2)}</p>
        </>
      ) : null}
    </div>
  );
};

export default ResultComponent;
