import React from 'react';
import '../App.css';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Home = () =>{
    
return (
    <div>
        <img src='https://pbs.twimg.com/media/CSQ3_6LUEAA0_JX?format=jpg' 
        alt='background'
        className="image" />
        <p className="footer-logo">
         <LocalLibraryIcon /></p>
        <p className='info'> Copyright © 2022 SPEED 
        <br></br>
        Amandeep Singh-Perhar, Ethan Haggart and Johnny Dong
       </p>
      </div>    
  );
};

export default Home;