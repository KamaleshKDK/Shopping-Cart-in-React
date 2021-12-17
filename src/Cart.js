import React from "react";

function Cart(props) {
    return (
        props.Cartitems.length > 0 ?
            <ul class="list-group">
                {
                    props.Cartitems.map((item) => {
                        return <li class="list-group-item d-flex justify-content-between align-item-center">
                            {item.name} Rs.{item.price}
                            <button onClick={() => (props.handleRemove(item))} class="badge badge-danger badge-pill">Remove</button>
                        </li>
                    })
                }
            </ul> : <h5>No item</h5>
    )
}
export default Cart