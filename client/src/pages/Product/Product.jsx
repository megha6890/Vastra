import React, { useState } from "react";
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product=()=>{

    const [selectedImg,setSelectedImg]=useState(0);
    const [quantity,setQuantity]=useState(1);

   const images=[
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/ 2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
    "https://rigo.in/cdn/shop/products/HT02231149MainImage_ad464ad5-2007-457f-8deb-2e5b0c1df608.jpg"

   ]

    return(
        <div className="product">
            <div className="left">
                <div className="images">
                <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                    
                </div>
            </div>
            <div className="right">
                <h1>Black Half Sleeve Shirt</h1>
                <span className="price">$199</span>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="quantity">
                    <button onClick={()=>setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
                      {quantity}
                    <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/>ADD TO WISH LIST
                    </div> 
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
            </div>
        </div>
    )
}
export default Product;