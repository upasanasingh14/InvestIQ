import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
  }) {
    return (
      <div className="container p-5 mt-5">
        <div className="row p-5">
          
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={learnMore} style={{textDecoration: "none"}}>Learn more <i className="fa-solid fa-arrow-right-long"></i></a>    
          </div>
          <div className="col-6 mb-5">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    );
}

export default RightSection;