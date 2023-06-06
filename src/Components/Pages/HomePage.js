import React from "react";
import DIY from '../../do-yourself-stamp-round-grunge-sign-tag-172112486.jpg'
import RTU from '../../ReadyTU.jpg'
import {Checkbox, Space} from "antd";

const HomePage = () => {
  return(
    <div>
      <h2 style={{margin:'0px 0px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'8vh'
      }}>NAO LowCode</h2>
      <div style={{margin:'12vh 75vh 0vh'}}>
        <a href='/creation'>
          <img style={{width:'125px', margin:'0vh 4vh 0vh'}} src={DIY}/>
        </a>
        <a href='/templates'>
          <img style={{width:'90px',margin:'0vh 8vh 0vh'}} src={RTU}/>
        </a>
      </div>
    </div>
  );
}

export default HomePage;