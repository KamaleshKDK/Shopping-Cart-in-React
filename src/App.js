import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useState } from 'react';
import Cart from './Cart';


function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: 'Samsung',
      price: 20000,
      image: "https://m.media-amazon.com/images/I/51UHDvaRcJL._SY355_.jpg"

    },
    {
      id: 2,
      name: 'Apple',
      price: 200000,
      image: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/r/1/r1436_sierra_blue_pdp_image_position-1_avail__en-in-removebg-preview_1.png"
    },
    {
      id: 3,
      name: 'Oneplus',
      price: 35000,
      image: "https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-lunar.png"
    },
    {
      id: 4,
      name: 'Honor',
      price: 10000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dx_RURsZVekDCr9YJypN7UJ3pyevdBmZUews9aMoV9FZMh-ybF8H2UsiDetEDZ5ATl4&usqp=CAU"
    },
    {
      id: 5,
      name: 'Redmi',
      price: 20000,
      image: "https://www.detailslibrary.com/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Max.png"
    },
    {
      id: 6,
      name: 'Oppo',
      price: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkevJ3a0NQFP5IHNxNB51LyU85fesgI7sqpg&usqp=CAU"
    },
    {
      id: 7,
      name: 'Realme',
      price: 15000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATrOUQBV8jQZxdoxbTtZeKoFreHpYbByOrA&usqp=CAU"
    },
    {
      id: 8,
      name: 'ROG',
      price: 45000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlf9TecAN3YmuzE8YxGygt1MOk_xqfX-Ibw&usqp=CAU"
    },
    {
      id: 9,
      name: 'Vivo',
      price: 30000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbEdUHuZ9kZQ62Xj0qptAbl1pCJTfDxRqKQ&usqp=CAU"
    }
  ]);
  const [Cartitems, setcartTimes] = useState([])
  const [total, setTotal] = useState(0)

  let HandleAddToCard = (pro) => {
    setcartTimes([...Cartitems, pro])
    setTotal(total + pro.price)
  }

  let handleRemoveCart = (pro) => {
    setTotal(total - pro.price)
    let removeItem = Cartitems.filter(obj => obj.id !== pro.id);
    setcartTimes([...removeItem])

  }

  return (

    <div className='container'>
      <h1>Shopping Cart</h1>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>

            {
              product.map((pro) => <Card productData={pro} Cartitems={Cartitems} HandleClick={HandleAddToCard}></Card>)
            }

          </div>
        </div>
        <div className='col-lg-4'>
          <h1> Cart</h1>
          <Cart Cartitems={Cartitems} handleRemove={handleRemoveCart}></Cart>
          <h4> Total - Rs.{total}</h4>
        </div>
      </div>
    </div>


  );
}

export default App;
