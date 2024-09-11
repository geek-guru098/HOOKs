import React, { useState } from "react";

function Usestat() {
  const instate = 0;
  const [a, b] = useState(instate);

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 className="text-4xl  font-extrabold text-red-700">Count: {a}</h1>

        <button style={buttonStyle} onClick={() => b(instate)}>
          Reset
        </button>
        <br />

        <button
          style={buttonStyle}
          onClick={() => {
            if (a < 20) {
              b(a + 1);
            }
          }}
          disabled={a === 20} // Disable when a is 20
        >
          +
        </button>
        <br />

        <button
          style={buttonStyle}
          onClick={() => {
            if (a > 0) {
              b(a - 1);
            }
          }}
          disabled={a === 0} // Disable when a is 0
        >
          -
        </button>
      </div>
    </>
  );
}

export default Usestat;
