import React from "react";
import "./LinkPage.css";

function LinkPage({ links }) {
  return (
    <div className="container-link">
      <div className="box">
        {links.map((value, idx) => (
          <div className="row" key={idx}>
            <div className="idx">{idx + 1}</div>
            <div className="link">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkPage;
