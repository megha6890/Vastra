import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart=()=>{
    const data=[
        {
            id:1,
            img:"https://southindianactress.in/wp-content/uploads/2022/07/Samantha-Myntra-1.jpg",
            img2:"https://southindianactress.in/wp-content/uploads/2022/07/Samantha-Myntra-24.jpg",
            title:"Long Sleeve graphic Tshirt",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:"Long Sleeve graphic Tshirt",
        },
        {
            id:2,
            img:"https://images.squarespace-cdn.com/content/v1/614366d114bef66af4bfc7d8/9526e327-ec5b-4f4a-997a-d551653d33d2/DSC_1806.JPG?format=750w",
            
            title:"Coat",
            isNew:true,
            oldPrice:19,
            price:12,
            desc:"Coat",
        },
    ]
 return (
    <div className='cart'>
    <h1>Products in your cart</h1>
    {data?.map(item=>(
        <div className='item' key={item.id}>
        <img src={item.img} alt=""/>
        <div className='details'>
        <h1>{item.title}</h1>
        <p>{item.desc?.substring(0,100)}</p>
        <div className='price'>1 x ${item.price}</div>
        </div>
        <DeleteOutlineIcon className='delete'/>
        </div>
    ))}
    <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>
    </div>
 )
}

export default Cart;