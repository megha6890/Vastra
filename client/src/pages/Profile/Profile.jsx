import React from "react";
import "./Profile.scss"
import { Link } from "react-router-dom";
// import Login from "../Login/Login";

const Profile=()=>{
    // const [openLogin,setOpenLogin]=useState(false);

    return(
        <div>

        <div className="profile_signup">
           <h2>Welcome</h2>
           <p>To access account and manage orders</p>
           <hr/>
           <Link className="link" to="/login_page">
           {/* <button className="access_button" onClick={()=>setOpenLogin(!openLogin)}> */}
           <button className="access_button" onClick="document.getElementById('root').style.display='block'" style={{width:"auto"}}>
            LOGIN/SIGNUP
           </button>
           </Link>
          
           <hr/>
           <div className="details">
           <span>Orders</span>
           <span>Wishlist</span>
           <span>Gift Cards</span>
           <span>Contact Us</span>
           </div>

           <hr/>
           
           <div className="details">
           <span>Coupons</span>
         
           <span>Saved Cards</span>
           </div> 
          {/* <div className="login">
           {openLogin && <Login/>}
           </div>  */}
        
        </div>
        {/* <div className="profile_login">
       
           <h2>Hello Megha</h2>
           
           <p>8233976663</p>
           <hr/>
          
           <div className="details">
           <span>Orders</span>
           <span>Wishlist</span>
           <span>Gift Cards</span>
           <span>Contact Us</span>
           </div>

           <hr/>
           
           <div className="details">
           <span>Coupons</span>
           
           <span>Saved Cards</span>
           </div> 

           <hr/>

           <div className="details">
           <span>Edit Profile</span>
           <span>Logout</span>
           
           </div> 

        </div> */}
       

        </div>
    )
    
}




export default Profile;