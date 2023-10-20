import React from "react";
import {Link} from "react-router-dom"
import "./Categories.scss"

const Categories=()=>{
    return(
        <div className="categories">
         <div className="col">
           <div className="row">
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20576332/2023/1/25/ba095322-5fea-4639-bcc8-6d3080e0fd261674627359062-Red-Tape-Men-White-Mesh-High-Top-Walking-Shoes-6331674627358-1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">SALE</Link>
            </button>
           </div>
           <div className="row">
           <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15461146/2021/12/7/8198188f-5b43-4571-8836-fac58beef9f21638875430363-AfroJack-Men-Green--White-Woven-Design-Sneakers-641638875429-1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">WOMEN</Link>
            </button>
           </div>
         </div>
         <div className="col">
           <div className="row">
           <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19603984/2022/8/22/3e389b04-3f35-4401-9b2c-62ae65ea6f1e1661168158097Heels1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">NEW SEASON</Link>
            </button>
           </div>
         </div>
         <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19942650/2022/11/13/edf41476-6027-45f3-b0fc-942b3398bedc1668319549369GNISTOrangeHigh-TopBlockSandals1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">MEN</Link>
            </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/20716180/2022/12/10/da834c28-ed0f-47a9-b8bb-15d48741242b1670655443953-Shoetopia-Women-White-Block-Heels-5271670655443624-1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">ACCESSORIES</Link>
            </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22640116/2023/4/4/3fed9de0-e118-40ae-b8de-676bb5f913701680603418016WomenBuckleSlideSandals1.jpg" alt=""/>
            <button>
                <Link className="link" to="/products/1">SHOES</Link>
            </button>
            </div>
         </div>
        </div>
    )
}
export default Categories;  