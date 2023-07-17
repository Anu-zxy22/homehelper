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
          <li style={{ color:"black" }}>
            {/* <a href="#" ><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cHNO_i-PbhLjB__q60K676vx-FfWSJ3WKA&usqp=CAU"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"60px",width:"60px" }} 
      /> </a> */}<br></br><br></br><Link to="/emergency" style={{ color:"black" }}>Emergency</Link>
          </li>
          <li>
            <a href="#about"><br></br><img
        src="https://cdn-icons-png.flaticon.com/128/7048/7048019.png"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"50px" }} 
      /></a>
          </li><li></li><li></li><li></li><li></li><li></li><li></li>
          <li>
            <a href="#portfolio"><br></br><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl9drSTxvWo70BPyyCnRebHqkqrseOsQMDQ&usqp=CAU"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"55px",width:"70px" }} 
      /></a>
          </li><li></li>
          <li>
            <a href="#contact"><br></br><br></br><Link to="/signup">Logout</Link><br></br><br></br><br></br></a>
          </li>
          <li><Link to="/sidepan"><br></br>
          <img
        src="https://cdn-icons-png.flaticon.com/128/148/148795.png"
        alt="Portrait of Mr. Roboto"
        className="profile-image" style={{ height:"50px" }} 
      /></Link>    
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
      <h1 style={{color:"black" }}><br></br>WELCOME!</h1><br></br>
      
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

        <div className="scroll"><h1 style={{textAlign:"center",fontStyle:"italic",color:"black"}}  >Service Providers</h1>
  <div className="m-scroll">
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689311166/onepro_cvmn4d.jpg" style={{ height:"500px",width:"280px",padding:"10px" }} />
    </span><br></br>
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689311199/twopro_i68ap5.jpg" style={{ height:"500px",width:"280px",padding:"10px" }} />
    </span>
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689311399/threepro_gdqzi9.jpg" style={{ height:"500px",width:"280px",padding:"10px" }} />
    </span>
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689311417/fourpro_bp3wnc.jpg" style={{ height:"500px",width:"280px",padding:"10px" }} />
    </span>
    <span>
      <img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689311432/fivepro_skn4ja.jpg" style={{ height:"500px",width:"280px", }} />
    </span>
   
    
  </div>
  <h1 style={{textAlign:"center",fontStyle:"italic"}}  ><Link to="/service">Hire now <img src="https://cdn-icons-png.flaticon.com/128/1549/1549454.png" style={{ height:"30px",width:"28px" }} />
    </Link></h1>
</div>


        


      </div>
   
  </section>
  <br></br>
  <>
  <div className="main">
    {/* <h1>Responsive Card Grid Layout</h1> */}
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><Link to="/task">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERpeqp2HE0OM2wJbJ_LgK3ikQ_8XQdvA2mun3W0AeTP_3SgzbhykZtE33-8u4rCFalQE&usqp=CAU" /></Link>
          </div>
          <div className="card_content">
            {/* <h2 className="card_title">Card Grid Layout</h2> */}
            {/* <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn"><Link to="/task">ASSIGN TASK</Link></button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><Link to="/schedule">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZl9hldXM683OaQRALlpcDCW1aRxh7UrD1w&usqp=CAU" /></Link>
          </div>
          <div className="card_content">
            {/* <h2 className="card_title">Card Grid Layout</h2> */}
            {/* <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn"><Link to="/schedule">SCHEDULER</Link></button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><Link to="/progress">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISNjUlvxPmSuAOl7G9L-8K4rcOlOpMHD0nb0YTIkefS4VL02h0m7B2a7D9wpEHgkyME&usqp=CAU" /></Link>
          </div>
          <div className="card_content">
            {/* <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn"><Link to="/progress">TRACK PROGRESS</Link></button>
          </div>
        </div>
      </li>
      </ul></div><br></br><br></br><br></br>
      {/* <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src="https://picsum.photos/500/300/?image=14" />
          </div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li> */}
      {/* <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src="https://picsum.photos/500/300/?image=17" />
          </div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li> */}
      {/* <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src="https://picsum.photos/500/300/?image=2" />
          </div>
          <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li> */}
      <div className="mainy">
    {/* <h1>Responsive Card Grid Layout</h1> */}
    <ul className="cards">
      <li className="cards_item">
        <div className="cardy">
          <div className="card_image"><Link to="/inventory">
            <img src="data:image/png;base64,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" />
           </Link> 
          </div>
          <div className="card_contenty" style={{ color:"white" }}>
            {/* <h2 className="card_title">Card Grid Layout</h2> */}
            {/* <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn" style={{ color:"white" }}><Link to="/inventory">INVENTORY</Link></button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="cardy">
          <div className="card_image"><Link to="/expense">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJxQwAYL2-THHK93QzQkWBdycbDGNECDW6OMyK0b1nVP5K-HBJWqUiZR3eljna2nB51M&usqp=CAU" /></Link>
          </div>
          <div className="card_contenty">
            {/* <h2 className="card_title">Card Grid Layout</h2> */}
            {/* <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn"><Link to="/expense">EXPENSES</Link></button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="cardy">
          <div className="card_image"><Link to="/security">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSj0kPJJL-bhycNng7p2zOGsxF2JEGReKutlRDuyVqRHLY2d_EYsPelofeJXtGingv48&usqp=CAU" /></Link>
          </div>
          <div className="card_contenty">
            {/* <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">
              Demo of pixel perfect pure CSS simple responsive card grid layout
            </p> */}
            <button className="btn card_btn"><Link to="/security">SECURITY</Link></button>
          </div>
        </div>
      </li>
      </ul></div><br></br>
      
  
  {/* <h3 className="made_by">Made with ♡</h3> */}
</>



  {/* Contact form */}
  {/* <div
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
    </div> */}
  {/* </div> */}
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
                className="btn btn-default btn-lg social-button link-facebook"  style={{ height:"40px",width:"50px"}}
              >
                <i className="fa fa-facebook"   />
              </a>
              {/* <a
                href="https://codepen.io/simplysuvi/"
                className="btn btn-default btn-lg social-button link-codepen"
              >
                <i className="fa fa-codepen" />
              </a> */}
              <a
                href="#"
                className="btn btn-default btn-lg social-button link-twitter" style={{ height:"40px",width:"50px"}}
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/simplysuvi"
                className="btn btn-default btn-lg social-button link-linkedin" style={{ height:"40px",width:"50px"}}
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://instagram.com/simplysuvi"
                className="btn btn-default btn-lg social-button link-instagram" style={{ height:"40px",width:"50px"}}
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
