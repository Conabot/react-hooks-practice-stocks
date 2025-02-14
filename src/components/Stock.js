import React from "react";

function Stock({stock, onOneClick}) {
  const { name, ticker, price} = stock
  return (
    <div>
      <div className="card" onClick = {() => onOneClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
