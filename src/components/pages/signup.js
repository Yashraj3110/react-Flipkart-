import React from "react";
import Footer from "../layout/footer"
import Navbar from "../layout/navbar"
import "bootstrap";
import "./signup.css";




const Signup = () => {

    function SignupBtn() {
        const sighnupbutton = document.getElementById('sign-up');
        const sighninbutton = document.getElementById('sign-in');
        const main = document.getElementById('main');
        console.log(main.classList);
        main.classList.add("right-panel-active");
    };
    function SigninBtn() {
        const sighnupbutton = document.getElementById('sign-up');
        const sighninbutton = document.getElementById('sign-in');
        const main = document.getElementById('main');
        console.log(main.classList);
        main.classList.remove("right-panel-active");
    };

    const create = async () => {

    };



    return (
        <>
            <Navbar />
            {/* Header Top */}
            <div class="container ">
                <div className="form-container " id="main">

                    <div className="sign-up">
                        <div className="form">
                            <h4 id="head1">Create new account</h4>
                            <div class="form-floating" id="Input0011">
                                <input type="email"  class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Enter mobile Number</label>
                                    <div class="form-text">By continuing, you agree to Flipkart's Terms.</div>
                            </div>
                            <button id="button1" type="submit">Continue</button>
                        </div>
                    </div>
                    <div className="sign-in">
                        <div className="form">
                            <h4 id="head2">Log in</h4>
                            <div class="form-floating" id="Input0011">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Enter mobile Number</label>
                                    <div class="form-text">By continuing, you agree to Flipkart's Terms.</div>
                            </div>
                            <button id="button1" type="submit">Request OTP</button>
                        </div>
                    </div>



                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-left">

                                <h4 className="info11">Sign up with your mobile number to get started</h4>
                                <img className="imglog" src="./media/login_img_c4a81e.png"alt="" />
                               
                                <p className="info12">Existing User ?</p>

                                <button name="" id="sign-in" onClick={SigninBtn} href="#" role="button"><p className="info13"> Sign In</p></button>
                            </div>
                            <div className="overlay-right">

                                <h4 className="info11">Get access to your Orders, Wishlist & Recommendations</h4>
                              
                                <img className="imglog" src="./media/login_img_c4a81e.png"alt="" />

                                <p className="info12">New to flipkart?</p>
                                <button name="" id="sign-up" onClick={SignupBtn} href="#" role="button"><p className="info13"> Create new account</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* footer */}
            <Footer />
        </>
    );
}

export default Signup;