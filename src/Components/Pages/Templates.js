import React from "react";
import {Space} from "antd";

import Card from "../UI/Card";
import LoginPageReturner from "../TemplatesReturns/LoginPageReturner";
import FFOReturner from "../TemplatesReturns/FFOReturner";

const Templates = () => {
  const onClick = (a) => {
    if(a===1){
      console.log('loginsese')
    }else if(a===2){
      console.log('açılırke')
    }
  }
  return (
    <div style={{margin: '0px 16px 0px'}}>
      <Space direction='vertical' size='small'>
        <Space direction='horizontal' size='small'>
          <Card>
            <label style={{margin:'8px 125px 0px'}}>Log In Page</label>
            <LoginPageReturner onClick={onClick}/>
          </Card>
          <Card>
            <label style={{margin:'8px 125px 0px'}}>Dynamically Field Opener</label>
            <FFOReturner onClick={onClick}/>
          </Card>
        </Space>
      </Space>
    </div>
  );
}
export default Templates;