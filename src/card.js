import React from "react";

function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={props.data.image} style={{ height: "150px" }}/>
        <div className="card-body">
          <h4 className="card-title">
            <div href="#">{props.data.productName}</div>
          </h4>
          <h5>₹{props.data.price}</h5>
          <p className="card-text">{props.data.description}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">★ ★ ★ ★ ☆</small>
          <div className="text-right">
            <button className="btn btn-primary " id={props.data.id} onClick={() => {props.fun(props.data);}}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
