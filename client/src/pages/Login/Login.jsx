import React from "react";
import "./Login.scss"

export default function Login(){
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    return(
       
            
            <form className="modal-content animate">
            <div className="whole_content">

                <div className="main_head">
                {/* <span onSlick={document.getElementById("id01").style.display='none'} className="close" title="Close page">&times;</span> */}
                <h1>Login or Signup</h1>
              
                </div>

                <div className="container_top">
                <input type="text" name="username" placeholder="full-name" />
                <input type="password" name="password" placeholder="password" />
                </div>
              <div className="signin">
                <button type="submit">CONTINUE</button>
                </div>
                <div className="container_bottom" >
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    </div>
            </form>
           
    )
}