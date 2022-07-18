import React from "react";

const Header = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="container">
                    <div className="header_wrap">
                    <div className="logo_header">
                        <a href=""><img class="logo" src="header_logo.png" alt="logo" /></a>
                    </div>
                    <div className="right_nav">
                        <ul>
                            <li><a  href="#">Development & Consulting</a></li>
                            <li><a  href="#">Blogs</a></li>
                            <li><a  href="#">Community</a></li>
                            <li><a className="btn_header" href="#">Contact Us</a></li>

                        </ul>
                    </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header;