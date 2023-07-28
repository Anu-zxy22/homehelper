import React, { useState } from 'react';
import SearchBar from './fasearch.js';
import './faq.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Your search logic goes here
    // For example, you can fetch data from an API based on the search term
    // and update the searchResults state accordingly.
    console.log('Searching for:', term);
  };

  return (
    <div className="main">
    <div><h2>How can we help you?</h2>
      <SearchBar onSearch={handleSearch} />
      {/* Display search results here */}
    </div><br></br><br></br>
    <h2>General questions</h2>


<div class="row"><br></br>
<div class="column"><br></br><br></br>
<img src="https://cdn-icons-png.flaticon.com/128/1627/1627309.png" alt="Snow" style={{ width:"60px",height:"40px" }}/><br></br>Copyright
</div>
<div class="column"><br></br><br></br>
<img src="https://cdn-icons-png.flaticon.com/128/2157/2157751.png" alt="Forest" style={{ width:"60px",height:"40px" }}/><br></br>Userguide
</div><br></br>
<div class="column"><br></br>
<img src="https://cdn-icons-png.flaticon.com/128/2541/2541988.png" alt="Mountains" style={{ width:"60px",height:"40px" }}/><br></br>License
</div>
{/* <div class="column"> */}
{/*<img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689782754/handymen_gqzqqo.jpg" alt="Mountains" style={{ width:"600px",height:"400px" }}/>*/}
{/* </div> {/*<div class="column"><br></br><br></br> */}
{/*<img src="https://cdn-icons-png.flaticon.com/128/2767/2767192.png" alt="Mountains" style={{ width:"50px",height:"50px" }}/>
</div><br></br><br></br> */}

{/* <div class="column"><br></br><br></br>
<img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689782251/painter_ov41ao.jpg" alt="Snow" style={{ width:"600px",height:"400px" }}/>
</div>
<div class="column"><br></br><br></br>
<img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689784618/cleaners_nxmthi.jpg" alt="Forest" style={{ width:"600px",height:"400px" }}/>
</div><br></br>
<div class="column"><br></br><br></br>
<img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689784917/laun_fckduo.jpg" alt="Mountains" style={{ width:"600px",height:"400px" }}/>
</div>
<div class="column"><br></br><br></br>
<img src="https://res.cloudinary.com/dhogbmrpb/image/upload/v1689872432/babysit_negwyn.jpg" alt="Mountains" style={{ width:"600px",height:"400px" }}/>
</div><br></br>*/}<br></br><br></br><br></br>







</div> <br></br>
<h2 align="center">Popular Topics</h2>
<p>Custom work for one specific client</p>
<p>Attribution: How, when and where?</p>
<p>Secure data</p>
</div>
  );
};

export default App;
