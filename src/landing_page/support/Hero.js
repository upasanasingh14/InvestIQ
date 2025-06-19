import React from "react";

const supportLinks = [
    'Track account',
     'opening Track', 
     'segment activation', 
     'Intraday margins',
     'Kite user manual'
]

function Hero() {
  return (
    <section className="container-fluid"id="supportHero">
        <div className="p-3 " id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="" style={{color:"white"}}>Track tickets</a>
        </div>
        <div className="row p-3 m-3">
            <div className="col-6 p-5">
                <h3 className="mb-4 fs-3">Search for an answer or browse help topics to create a ticket</h3>
                <input className="mb-3" placeholder="Eg: how do i activate F&O"></input><br/>
                <div className="col">
                    {
                        supportLinks.map((link,index)=> <a style={{marginRight:"21px", color:"white"}} href="" key={index}>{link}</a>)
                    }
                </div>
            </div>
            <div className="col-6 p-5">
                <h3>Featured</h3>
                <ol>
                    <li><a href="" style={{color:"white"}}>MCX Option contracts expiry - April 2025</a></li>
                    <li><a href="" style={{color:"white"}}>MCX Base metals contract expiry - April 2025</a></li>
                </ol>
            </div>
        </div>
    </section>
  );
}

export default Hero;
