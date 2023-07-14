import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './home.css';
const Home = ()  =>{
  const navi = useNavigate();
    return(
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Responsive Portfolio Template" />
  <meta name="author" content="Suvrat Jain" />
  <title>Responsive Bootstrap Template for Portfolio</title>
  {/* Bootstrap core CSS */}
  <link
    href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  <div
    className="navbar navbar-inverse navbar-fixed-top"
    role="navigation"
    id="menu"
  >
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          {/* <i className="fa fa-globe" /> */}
        </a>
        
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav" style={{ textAlign:"left" }}>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
          <li>
            <a href="#" ><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cHNO_i-PbhLjB__q60K676vx-FfWSJ3WKA&usqp=CAU"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"60px",width:"60px" }} 
      /></a>
          </li>
          <li>
            <a href="#about"><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPunIeujBU5BJttJEXbfYKoGsoIrzgtTHtw&usqp=CAU"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"60px" }} 
      /></a>
          </li><li></li><li></li><li></li><li></li><li></li><li></li>
          <li>
            <a href="#portfolio"><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl9drSTxvWo70BPyyCnRebHqkqrseOsQMDQ&usqp=CAU"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"60px",width:"70px" }} 
      /></a>
          </li><li></li>
          <li>
            <a href="#contact"><br></br><Link to="/login">Logout</Link><br></br><br></br><br></br></a>
          </li>
          <li><Link to="/sidepan"><a href="#sp">
          <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAABhYWH09PQ6Ojr7+/vx8fGVlZXt7e3U1NTj4+MfHx+mpqZra2vIyMiYmJjd3d1MTEzBwcFvb2+NjY2enp7Hx8esrKwxMTG4uLiCgoIMDAzPz89zc3M1NTW7u7tZWVlBQUEfZxDeAAAB20lEQVR4nO3d21LiQBCA4VEWFARPKIegu/r+L7m1rhcUzJXVqZ4avu8N/kqFEOh0SgEAAAAAAAAAAAAAAOCnFsv1dQvWy8UofbPVVTtWs/jAt+yoE/fRgfPsojPz2MDJXXbQmbtJaOFLdk/FS2Rgg4cw+CC2dxb+E3kmLrNjqpaBhTfZMVU3gYWv2TFVr4GFm+yYqsiL/m12TNVtYGF5z66peI8MLIvsnIrgG4xtds+ZbWxgKQ/ZRSciP0i/bXbZUUd2m/jAUqb7VRORh9+rP9MxAr8iJy0YLQ8AAAAAAHoybcF4efPh4/NXvs+P4W2Uvsen7D+djjw9xgfus6NO7KMDn7OLzjzHBrY4bhI6bFKG7JyKITJwdsjOqThEznq3NuT9X+Q1w/Rljv6nLyOPYf/nYf+fpf1fD5v8ThP86FP330sv4N7iAu4PSzv3+NdD8HNrx7J/ovkyXh4AAAAAAPSj850KrezFuNqt9qNEtrXbJPz/0fb20zxEB3a/Y6j/PVHd7/pqcdgkdoT2PjumKnLnXpuTe5Hrvvqfvux/grb/HbT97xHufxd0iwcxeJ93g2di+Gxbaxf9ER7Qa+rdCOsR3o1QGnq/xXac91sAAAAAAAAAAAAAAABchr9W6DehemiqSwAAAABJRU5ErkJggg=="
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"60px" }} 
      /></a></Link>      
          </li>
        </ul>
        
        
      </div>
      {/*/.nav-collapse */}
    </div>
  </div>
  <div className="container-fluid splash" id="splash">
    <div className="container">
      {/* <img
        src="https://s-media-cache-ak0.pinimg.com/736x/71/9e/59/719e59481d2be40a77ab6c3386fc0a45--photoshop-illustrator-illustrator-tutorials.jpg"
        alt="Portrait of Mr. Roboto"
        className="profile-image"
      /> */}
      <h1>WELCOME!</h1><br></br>
      
      <h6>
       <br></br>
       <br></br>
      </h6>
      <h1 className="intro-text">
        <span className="lead" id="typed">
          {" "}
        </span>
      </h1>
      <span className="continue">
        <a href="#about">
          <i className="fa fa-angle-down" />
        </a>
      </span>
    </div>
  </div>
  {/* About Section */}
  <section className="success" id="about"> 
    <div className="container">
      {/* <div className="row">
        <div className="col-lg-12 text-center">
          <h2>About Us</h2>
          <hr className="star-light" />
        </div>
      </div> */}
      {/* <div className="row"> */}
        {/* <div className="col-lg-4 col-lg-offset-2">
          <p className="content-text" style={{ textAlign: "center" }}>
          Finding a reliable and trustworthy domestic helper for your specific requirement can be a daunting task for any resident, especially in the city. You need to be double sure of the safety and security of your house and loved ones as well. Now, with home helper, you can hire a domestic helper for your private households, residential, office, or industrial spaces, with clear terms of employment and services. Home helper can help you find a suitable helper for all your domestic housework by connecting you with verified vendors. 
          </p>
        </div> */}
        {/* <div className="col-lg-4">
          <p className="content-text"><br></br><br></br><br></br><br></br><br></br>
          <img
        src="https://cdn-icons-png.flaticon.com/512/195/195492.png"
        alt="Portrait of Mr. Roboto"
        className="profile-image"
      />
          </p>
        </div> */}
        {/* <div className="col-lg-8 col-lg-offset-2 text-center contact-button"> */}
          {/* <a href="#contact" className="btn btn-lg btn-outline">
            <i className="fa fa-envelope" /><
          </a> */}
        {/* </div> */}

        <div className="scroll">
  <div className="m-scroll">
    <span>
      <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
    </span>
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689270153/Screenshot_2023-07-13_231145_sc64wt.jpg" style={{ height:"500px",width:"280px" }} />
    </span>
    <span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" />
    </span>
    <span>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" />
    </span>
  </div>
</div>


        


      </div>
   
  </section>
  {/* Portfolio */}
  <div
    className="container-fluid portfolio-container-holder content-section"
    id="portfolio"
  >
    <div className="portfolio-container container">
      <h1 className="text-center"></h1>
      <hr className="star-portfolio" />
      <div className="row">
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
          <div className=" portfolio-card">
            <img
              src="https://cdn2.hubspot.net/hubfs/145335/responsive-vs-adaptive-design-compressor.jpg"
              alt="Portfolio"
              className="img-responsive portfolio-img"
            />
            <div className="portfolio-img-desc">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact form */}
  <div
    className="container-fluid contact-me-container content-section"
    id="contact"
  >
    <div className="container">
      <h1 className="intro-text text-center">Contact Me</h1>
      <hr className="star-light" />
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-user" />
              </div>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-at" />
              </div>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email ID"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa fa-phone" />
              </div>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <textarea
            className="form-control"
            rows={5}
            placeholder="Message"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-default submit-button btn-lg btn-primary">
          <i className="fa fa-paper-plane" /> Send
        </button>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer>
    <div className="container footer-container">
      <div className="row footer-row">
        <div className="col-xs-12 col-sm-6 col-md-6 text-center">
          {/* <h4 className="text-center">Find me here</h4>
          <address>
            <strong>
              <i className="fa fa-location-arrow" /> Monsters Inc.
            </strong>
            <br />
            Lorem ipsum dolor, sir amet,
            <br />
            Mumbai, India 400050
            <br />
            <br />
            <a className="tel" href="tel:9999988888" type="tel">
              <i className="fa fa-mobile" />
              <span> +91 9876543210</span>
            </a>
          </address> */}
          <ul className="nav navbar-new" style={{}}>
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
          <li>
          <Link to="/tandc"><br></br><br></br>Terms&Conditions</Link> 
          </li>
          <li>
            <Link to="/policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
                </li></ul>
        </div>
        <div className="col-xs-12 col-md-6 col-sm-6 social-section">
          <div className="text-center">
            <h4 className="text-center">Contact</h4>
            <div className="text-center social-buttons">
              <a
                href="#"
                className="btn btn-default btn-lg social-button link-facebook"
              >
                <i className="fa fa-facebook" />
              </a>
              {/* <a
                href="https://codepen.io/simplysuvi/"
                className="btn btn-default btn-lg social-button link-codepen"
              >
                <i className="fa fa-codepen" />
              </a> */}
              <a
                href="#"
                className="btn btn-default btn-lg social-button link-twitter"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/simplysuvi"
                className="btn btn-default btn-lg social-button link-linkedin"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://instagram.com/simplysuvi"
                className="btn btn-default btn-lg social-button link-instagram"
              >
                <i className="fa fa-instagram" />
              </a>
            </div>
            <hr className="footer-hr" />
            <h4 className="author">
               {/* <i className="fa fa-heart" /> {" "}
              <strong></strong> */}
              <img
        src="https://cdn-icons-png.flaticon.com/128/888/888853.png"
        alt="Portrait of Mr. Roboto"
        /* className="profile-image"*/ style={{ height:"30px",width:"25px" }} 
      /> homehelper@gmail.com<br></br><img
      src="https://cdn-icons-png.flaticon.com/128/2948/2948005.png"
      alt="Portrait of Mr. Roboto"
      /* className="profile-image"*/ style={{ height:"30px",width:"25px",position:"left" }} 
    />          0421 200100

            </h4>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Bootstrap core JavaScript */}
</>

  

    )
};
export default Home;
