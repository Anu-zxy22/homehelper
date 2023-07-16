import React from 'react';
import { Link} from 'react-router-dom';
import './service.css';

const Service = ()  =>{
    // const navi = useNavigate();
      return(


<>
  <div className="main">
    {/* <h1>Responsive Card Grid Layout</h1> */}
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><Link to="/task">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERpeqp2HE0OM2wJbJ_LgK3ikQ_8XQdvA2mun3W0AeTP_3SgzbhykZtE33-8u4rCFalQE&usqp=CAU" alt="" /></Link>
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZl9hldXM683OaQRALlpcDCW1aRxh7UrD1w&usqp=CAU" alt=""/></Link>
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISNjUlvxPmSuAOl7G9L-8K4rcOlOpMHD0nb0YTIkefS4VL02h0m7B2a7D9wpEHgkyME&usqp=CAU" alt="" /></Link>
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
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><Link to="/progress">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISNjUlvxPmSuAOl7G9L-8K4rcOlOpMHD0nb0YTIkefS4VL02h0m7B2a7D9wpEHgkyME&usqp=CAU" alt="" /></Link>
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
      </ul></div></>
      )
        };
        export default Service;