import React from "react";
import LogInPage from "./LogInPage";
import {Card} from "antd";
import {useState} from "react";

let satır='import React from "react";'
let satır1='import { Button, Checkbox, Form, Input } from \'antd\';'
let satır2='const onFinish = (values) => {'
let satır3='console.log(\'Success:\', values);'
let satır4='};'
let satır5='const onFinishFailed = (errorInfo) => {'
let satır6='console.log(\'Failed:\', errorInfo);'
let satır7='const LogInPage = () => ('
let satır8='<Form'
let satır9='name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}}style={{maxWidth: 600,}}initialValues={{remember: true,}}'
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
          <div style={{width:'600px'}}>
            {satır}
          </div>
          <div style={{width:'600px'}}>
            {satır1}
          </div>
          <div style={{width:'600px',margin:'0px 0px 0px'}}>
            {satır2}
          </div>
          <div style={{width:'600px',margin:'0px 16px 0px'}}>
            {satır3}
          </div>
          <div style={{width:'600px',margin:'0px 0px 0px'}}>
            {satır4}
          </div>
          <div style={{width:'600px',margin:'0px 0px 0px'}}>
            {satır5}
          </div>
          <div style={{width:'600px',margin:'0px 16px 0px'}}>
            {satır6}
          </div>
          <div style={{width:'600px',margin:'0px 0px 0px'}}>
            {satır4}
          </div>
          <div style={{width:'600px',margin:'0px 0px 0px'}}>
            {satır7}
          </div>
          <div style={{width:'600px',margin:'0px 16px 0px'}}>
            {satır8}
          </div>
          <div style={{width:'600px',margin:'0px 16px 0px'}}>
            {satır9}
          </div>
        </Card>
      )}
      </div>
    </div>
  )
}

export default LoginPageReturner;
