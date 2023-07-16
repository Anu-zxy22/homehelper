import React from 'react';
import './sidepan.css';
import { Link } from 'react-router-dom';
const Sidepan = ()  =>{
    return(
      
      <>
      <div className="side-panel" id="side-panel">
  {/* <div id="sidepanel-heading" className="heading">
    <span id="content-heading">USER PROFILE</span>
  </div> */}
  {/* <iframe
    id="content-frame"
    style={{
      height: "90%",
      width: 400,
      border:"none",
      display: "block",      
      position: "absolute"

    }} */}
    {/* // src="https://apple.com" /*left*/ }
  {/* /> */}
  {/* <div data-position="right" className="side-bar"> */}
    
    <div className="item">
    
    </div>
    <div className="item">
     
    </div>
    <div className="item"><Link to="/home">
    <img src="https://cdn-icons-png.flaticon.com/128/329/329350.png" style={{ height:"47px",width:"40px",alignSelf:"flex-end"}}/></Link>
    </div>
    <div className="item"><Link to="/task" style={{ color:"white"}}>
      Task Assignment</Link>
    </div>
    {/* <div className="item"><Link to="/job" style={{ color:"white"}}>
      Available jobs</Link>
    </div> */}
    <div className="item"><Link to="/schedule" style={{ color:"white"}}>
      Fix schedule</Link>
    </div>
    <div className="item"><Link to="/progress" style={{ color:"white"}}>
     Track progress</Link>
    </div>
    <div className="item"><Link to="/inventory" style={{ color:"white"}}>
     Inventory </Link>
    </div>
    <div className="item"><Link to="/expense" style={{ color:"white"}}>
     Check Expenses</Link> 
    </div>
    {/* <div className="item bottom" id="show_hide"> */}
    <div className="item"><Link to="/security" style={{ color:"pink"}}>
      Security</Link> 
    </div>
  </div>
{/* </div> */}
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
            <a href="#contact"><br></br><br></br><Link to="/login">Logout</Link><br></br><br></br><br></br></a>
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
      <h1 ststyle={{color:"black" }}><br></br>WELCOME!</h1><br></br>
      
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
          <div className="card_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERpeqp2HE0OM2wJbJ_LgK3ikQ_8XQdvA2mun3W0AeTP_3SgzbhykZtE33-8u4rCFalQE&usqp=CAU" />
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
          <div className="card_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZl9hldXM683OaQRALlpcDCW1aRxh7UrD1w&usqp=CAU" />
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
          <div className="card_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISNjUlvxPmSuAOl7G9L-8K4rcOlOpMHD0nb0YTIkefS4VL02h0m7B2a7D9wpEHgkyME&usqp=CAU" />
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
    </ul>
  </div>
  {/* <h3 className="made_by">Made with ♡</h3> */}
</>

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
export default Sidepan;
