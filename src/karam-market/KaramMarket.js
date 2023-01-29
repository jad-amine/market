import React, { useState } from "react";
import "./karam.css";
function KaramMarket() {
  const [itemNumber, setItemNumber] = useState();
  const [dollar, setDollar] = useState(50);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <img
        src={require("./assets/karam-image.png")}
        alt=""
        style={{ marginBottom: 20 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
        }}
      >
        <div>
          <div>Item Number: </div>
          <input
            className="input-div"
            value={itemNumber}
            onChange={(e) => setItemNumber(e.target.value)}
            placeholder="Item..."
          />
        </div>
        <div>
          <div>$ </div>
          <input
            className="input-div"
            value={dollar}
            onChange={(e) => setDollar(e.target.value)}
            inputMode="numeric"
          />
        </div>
      </div>
      <div style={{ marginTop: 50, color: "gray", fontSize: "1.3em" }}>
        Price: {itemNumber && itemNumber * dollar}
      </div>
    </div>
  );
}

export default KaramMarket;
