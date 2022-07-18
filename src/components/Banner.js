import React from "react";

const Banner=()=>{
    return (
        <>
    <section className="banner">
    <div className="container">
      <div className="main_banner">
        <div className="right_side">
          <h1 className="heading">Fullstack Development</h1>
          <p className="para">Our Full-stack JavaScript Development service is <span>recommended for companies who
              want to extend </span>their teams with experienced engineers to build <span>new features and
              significantly speed up the development </span>process.</p>
        </div>
        <div className="left_side">
          <a href="#"><img className="banner_img" src="Frame.svg" alt=""/></a>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Banner;