import React from "react";

function Card(props) {
    return (
        <div className='col-lg-4 mt-3'>
            <div class="card">
                <img class="card-img-top" src={props.productData.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{props.productData.name}</h5>
                    <p class="card-text">Rs.{props.productData.price}</p>
                    <button disabled={props.Cartitems.find(obj => obj.id == props.productData.id) ? true : false} onClick={() => { props.HandleClick(props.productData) }} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card