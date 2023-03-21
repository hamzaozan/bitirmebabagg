import React from "react";
import LogInPage from "./LogInPage";
import {Card} from "antd";
import {useState} from "react";

let suslua='{'
let kucuk ='<'

const LoginPageReturner = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    if(isEditing===false) {
      setIsEditing(true);
    }else if(isEditing===true){
      setIsEditing(false)
    }
  };

  return(
    <div style={{width:'350px', margin:'16px 8px 0px'}}>
      <LogInPage/>
      <button style={{margin:'0px 150px 16px'}} onClick={startEditingHandler}>
        {isEditing && <text>close</text> || <text>open</text> }
      </button>
      <div>{isEditing && (
        <Card style={{width:'600px'}}>
          <text>
            import React from "react"<br/>
            import {suslua} Button, Checkbox, Form, Input } from 'antd';<br/>
            <br/>
            const onFinish = (values) => {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}>console.log('Success:', values);<br/></text>
          };<br/>
            <br/>
            const onFinishFailed = (errorInfo) => {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}>console.log('Failed:', errorInfo);<br/></text>
          };<br/>
            <br/>
            const LogInPage = () => (<br/>
            <div style={{margin:'0px 16px 0px'}}>
            {kucuk}Form<br/>
              <div style={{margin:'0px 16px 0px'}}>
              name="basic"<br/>
              labelCol={suslua}{suslua}<br/>
                <text style={{margin:'0px 16px 0px'}}>span: 8,<br/></text>
              }}<br/>
              wrapperCol={suslua}{suslua}<br/>
                <text style={{margin:'0px 16px 0px'}}>span: 16,<br/></text>
              }}<br/>
              style={suslua}{suslua}<br/>
                <text style={{margin:'0px 16px 0px'}}>maxWidth: 600,<br/></text>
              }}<br/>
              initialValues={suslua}{suslua}<br/>
                <text style={{margin:'0px 8px 0px'}}/>remember: true,<br/>
              }}<br/>
              onFinish={suslua}onFinish}<br/>
              onFinishFailed={suslua}onFinishFailed}<br/>
              autoComplete="off"<br/>
              </div>
            ><br/>
              <br/>
              <div style={{margin:'0px 16px 0px'}}>
            {kucuk}Form.Item<br/>
                <div style={{margin:'0px 16px 0px'}}>
                label="Username"<br/>
                name="username"<br/>
                rules={suslua}[<br/>
                  <div style={{margin:'0px 16px 0px'}}>
            {suslua}<br/>
                    <div style={{margin:'0px 16px 0px'}}>
                    required: true,<br/>
                    message: 'Please input your username!',<br/>
                    </div>
                  },<br/>
                  </div>
                ]}<br/>
                </div>
              ><br/>
                <div style={{margin:'0px 16px 0px'}}>{kucuk}Input /><br/></div>
            {kucuk}/Form.Item><br/>
              <br/>
            {kucuk}Form.Item<br/>
                <div style={{margin:'0px 16px 0px'}}>
                label="Password"<br/>
                name="password"<br/>
                rules={suslua}[<br/>
                  <text style={{margin:'0px 8px 0px'}}/>{suslua}<br/>
                  <text style={{margin:'0px 16px 0px'}}/> required: true,<br/>
                  <text style={{margin:'0px 16px 0px'}}/>message: 'Please input your password!',<br/>
                  <text style={{margin:'0px 8px 0px'}}/> },<br/>
                ]}<br/>
              ><br/>
            {kucuk}Input.Password /><br/>
            {kucuk}/Form.Item><br/>
                </div>
            <br/>
            {kucuk}Form.Item<br/>
                <div style={{margin:'0px 16px 0px'}}>name="remember"<br/>
                valuePropName="checked"<br/>
                wrapperCol={suslua}{suslua}<br/>
                  <text style={{margin:'0px 8px 0px'}}/>offset: 8,<br/>
                  <text style={{margin:'0px 8px 0px'}}/>span: 16,<br/>
                }}<br/>
                </div>
              ><br/>
                <text style={{margin:'0px 8px 0px'}}/>{kucuk}Checkbox>Remember me{kucuk}/Checkbox><br/>
          {kucuk}/Form.Item><br/>
            <br/>
          {kucuk}Form.Item<br/>
                <div style={{margin:'0px 16px 0px'}}>
                wrapperCol={suslua}{suslua}<br/>
                  <text style={{margin:'0px 8px 0px'}}/>offset: 8,<br/>
                  <text style={{margin:'0px 8px 0px'}}/>span: 16,<br/>
                }}<br/>
                </div>
              ><br/>
                <div style={{margin:'0px 16px 0px'}}>
          {kucuk}Button type="primary" htmlType="submit"><br/>
                  <text style={{margin:'0px 8px 0px'}}/>Submit<br/>
          {kucuk}/Button><br/>
                </div>
          {kucuk}/Form.Item><br/>
              </div>
          {kucuk}/Form><br/>

            </div>
            );<br/>
            export default LogInPage;<br/>
          </text>
        </Card>
      )}
      </div>
    </div>
  )
}

export default LoginPageReturner;
