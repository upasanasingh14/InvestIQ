import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%", marginLeft:"30%" }}
          />
          <h4 className="mt-4 " style={{ marginLeft:"30%" }}>Nithin Kamath</h4>
          <h6 style={{ marginLeft:"30%", fontSize: "25 em" }}>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 mt-3 mx-10">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage </a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA </a> /<a href="" style={{textDecoration:"none"}}> Twitter </a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
