import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The InvestIQ Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3"> Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"35%"}}/>
          <p className="text-small text-muted mt-3"> Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"45%"}}/>
          <p className="text-small text-muted mt-3"> Options trading platform</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"45%"}}/>
          <p className='text-small text-muted mt-3'> Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"40%"}}/>
          <p className='text-small text-muted mt-3'> Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"25%"}}/>
          <p className='text-small text-muted mt-3'> Systematic trading platform</p>
        </div>
        <button style={{width: "20%", margin: "0 auto"}} className='p-2 btn btn-primary fs-5 mb-5'>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
