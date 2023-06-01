import React from "react";
import {Space, Watermark} from "antd";

import Card1 from "../UI/Card1";
import LoginPageReturner from "../TemplatesReturns/LoginPageReturner";
import FFOReturner from "../TemplatesReturns/FFOReturner";
import FixedSizeCard from "../UI/FixedSizeCard";

const Templates = () => {
  const onClick = (a) => {
    if(a===1){
      console.log('loginsese')
    }else if(a===2){
      console.log('açılırke')
    }
  }
  return (
    <div style={{margin: '0px 30px 0px'}}>
      <Space direction='vertical' size='middle' style={{zIndex:'2'}} >
        <div>
          <a href='/'>
            <h2 style={{margin:'0px 523px 0px',
              fontSize:'8vh'
            }}>NAO LowCode</h2>
          </a>
        </div>
          <FixedSizeCard>
            <h2 style={{margin:'8px 600px 0px'}}>Login Page</h2>
            <div style={{ display:'flex',margin:'0px 500px 0px'}}>
              <LoginPageReturner onClick={onClick}/>
            </div>
          </FixedSizeCard>
          <Card1>
            <h2 style={{width:'300px',margin:'8px 575px 0px'}}>Dynamically Field Opener</h2>
            <div style={{ display:'flex',margin:'0px 500px 16px'}}>
              <FFOReturner onClick={onClick}/>
            </div>
          </Card1>
      </Space>
    </div>
  );
}
export default Templates;