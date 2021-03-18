import { useState } from "react";
import Card from "./card";

function App() {
  let products = [
    {productName: "Front End Development",price: 38999,description: "HTML,CSS,JavaScript,ReactJs",image:"https://twenty-tech.com/wp-content/uploads/2018/12/Front-end-developemtn-1.png",id:1},
    {productName: "Back End Development",price: 35000,description: "MangoDB,AWS",image:"https://cdn3.vectorstock.com/i/1000x1000/41/32/back-end-development-banner-concept-vector-9074132.jpg",id:2},
    {productName: "Full Stack Development",price: 70800,description: "HTML,CSS,JavaScript,ReactJs,NodeJs,MangoDB,AWS",image:"https://static.businessworld.in/article/article_extra_large_image/1607681051_CU09l6_zenclass.png",id:3},
    {productName: "Python",price: 5000,description: "Programming",image:"https://everyday.codes/wp-content/uploads/2019/12/newpythonlogo.png",id:4},
    {productName: "Java",price: 4599,description: "Programming",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS80wo6G-nnK9JlOdt5oEWhYCxXS8msN4bGw&usqp=CAU",id:5},
  ];
  var [present, modifie] = useState([]);
  var [cartvalue,added] = useState(0);
  var [pay,reject] = useState(<div>Your Cart is Empty</div>);

  function cart(course) {
    document.getElementById(course.id).style.visibility = "hidden";
    added(course.price+cartvalue);
    modifie([...present, course]);
    reject(<button className="btn-xs btn-success"><a href="https://i.pinimg.com/originals/4e/e5/ca/4ee5ca990c4a7ec5ff5207719caa2e5c.png" style={{color:"white"}}>Complete Payment</a></button>)
  }
  function uncart(index,n) {
    document.getElementById(n.id).style.visibility = "visible";
    added(cartvalue-n.price);
    present.splice(index, 1);
    modifie([...present]);
    if(present.length == 0)
    reject(<div>Your Cart is Empty</div>)
  }

  return (
    <div>
      <div className="container m-3">
        <div className="row">
          <div className="col-3 border border-dark text-center" style={{ borderRadius: "10px", minWidth: "280px" }}>
            <h2>Cart</h2>
            <hr />
            {present.map((item,index) => {
              return (
                <>
                  <div className="card" style={{backgroundImage: "linear-gradient(135deg,cyan,blue)"}}>
                    <h5>{item.productName}</h5>
                    <div>Price : ₹{item.price}</div>
                    <div>
                      <button className="btn-xs btn-danger mr-2 mb-2" onClick={() => {uncart(index,item);}}>Remove</button>
                    </div>
                  </div>
                </>
              );
            })}
            <div>Total value : {cartvalue}</div>
            <div>{pay}</div>
          </div>
          <div className="col-9">
            <div className="row">
              {products.map((product) => {
                return (
                  <Card data={product} fun={cart}></Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
