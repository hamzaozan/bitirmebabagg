import React, {useState} from "react";
import FormFieldOpener from "./FormFieldOpener";
import {Card, Watermark} from "antd";

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
      <FormFieldOpener/>
      <button style={{margin:'0px 150px 16px'}} onClick={startEditingHandler}>
        {isEditing && <text>close</text> || <text>open</text> }
      </button>
      <div>{isEditing && (
        <Card style={{width:'700px'}}>
          <Watermark content='Nao-Lowcode'>
          <text>
            import {suslua} MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';<br/>
            import {suslua} Button, Form, Input } from 'antd';<br/>
            <text> <br/> </text>
            const formItemLayout = {suslua}<br/>
            <text style={{margin:'0px 8px 0px'}}/>labelCol: {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}/>xs: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 24,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 16px 0px'}}/>sm: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 4,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 8px 0px'}}/>},<br/>
            <text style={{margin:'0px 8px 0px'}}/>wrapperCol: {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}/>xs: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 24,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 16px 0px'}}/>sm: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 20,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 8px 0px'}}/>},<br/>
            };<br/>
            <text> <br/> </text>
            const formItemLayoutWithOutLabel = {suslua}<br/>
            <text style={{margin:'0px 8px 0px'}}/>wrapperCol: {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}/>xs: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 24,<br/>
            <text style={{margin:'0px 24px 0px'}}/>offset: 0,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 16px 0px'}}/>sm: {suslua}<br/>
            <text style={{margin:'0px 24px 0px'}}/>span: 20,<br/>
            <text style={{margin:'0px 24px 0px'}}/>offset: 4,<br/>
            <text style={{margin:'0px 16px 0px'}}/>},<br/>
            <text style={{margin:'0px 8px 0px'}}/>},<br/>
            };<br/>
            <text> <br/> </text>
            const FormFieldOpener = () => {suslua}<br/>
            <text style={{margin:'0px 8px 0px'}}/>const onFinish = (values) => {suslua}<br/>
            <text style={{margin:'0px 16px 0px'}}/>console.log('Received values of form:', values);<br/>
            <text style={{margin:'0px 8px 0px'}}/>};<br/>
            <text style={{margin:'0px 8px 0px'}}/>return (<br/>
            <text style={{margin:'0px 16px 0px'}}/>{kucuk}Form<br/>
            <text style={{margin:'0px 24px 0px'}}/>name="dynamic_form_item"<br/>
            <text style={{margin:'0px 24px 0px'}}/>{suslua}...formItemLayoutWithOutLabel}<br/>
            <text style={{margin:'0px 24px 0px'}}/>onFinish={suslua}onFinish}<br/>
            <text style={{margin:'0px 24px 0px'}}/>style={suslua}{suslua}<br/>
            <text style={{margin:'0px 32px 0px'}}/>  maxWidth: 600,<br/>
            <text style={{margin:'0px 24px 0px'}}/>}}<br/>
            <text style={{margin:'0px 16px 0px'}}/>><br/>
            <text style={{margin:'0px 24px 0px'}}/>{kucuk}Form.List<br/>
            <text style={{margin:'0px 32px 0px'}}/>name="names"<br/>
            <text style={{margin:'0px 32px 0px'}}/>rules={suslua}[<br/>
            <text style={{margin:'0px 40px 0px'}}/>{suslua}<br/>
            <text style={{margin:'0px 48px 0px'}}/>validator: async (_, names) => {suslua}<br/>
            <text style={{margin:'0px 56px 0px'}}/>if (!names || names.length {kucuk} 2) {suslua}<br/>
            <text style={{margin:'0px 64px 0px'}}/>return Promise.reject(new Error('At least 2 passengers'));<br/>
            <text style={{margin:'0px 56px 0px'}}/>}<br/>
            <text style={{margin:'0px 48px 0px'}}/>},<br/>
            <text style={{margin:'0px 40px 0px'}}/>},<br/>
            <text style={{margin:'0px 32px 0px'}}/>]}<br/>
            <text style={{margin:'0px 24px 0px'}}/>><br/>
            <text style={{margin:'0px 32px 0px'}}/>{suslua}(fields, {suslua} add, remove }, {suslua} errors }) => (<br/>
            <text style={{margin:'0px 40px 0px'}}/>{kucuk}><br/>
            <text style={{margin:'0px 48px 0px'}}/>{suslua}fields.map((field, index) => (<br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}Form.Item<br/>
            <text style={{margin:'0px 64px 0px'}}/>{suslua}...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}<br/>
            <text style={{margin:'0px 72px 0px'}}/>label={suslua}index === 0 ? 'Passengers' : ''}<br/>
            <text style={{margin:'0px 72px 0px'}}/>required={suslua}false}<br/>
            <text style={{margin:'0px 72px 0px'}}/>key={suslua}field.key}<br/>
            <text style={{margin:'0px 56px 0px'}}/>><br/>
            <text style={{margin:'0px 64px 0px'}}/>{kucuk}Form.Item<br/>
            <text style={{margin:'0px 72px 0px'}}/>{suslua}...field}<br/>
            <text style={{margin:'0px 72px 0px'}}/>validateTrigger={suslua}['onChange', 'onBlur']}<br/>
            <text style={{margin:'0px 72px 0px'}}/>rules={suslua}[<br/>
            <text style={{margin:'0px 80px 0px'}}/>{suslua}<br/>
            <text style={{margin:'0px 88px 0px'}}/>required: true,<br/>
            <text style={{margin:'0px 88px 0px'}}/>whitespace: true,<br/>
            <text style={{margin:'0px 88px 0px'}}/>message: "Please input passenger's name or delete this field.",<br/>
            <text style={{margin:'0px 80px 0px'}}/>},<br/>
            <text style={{margin:'0px 72px 0px'}}/>]}<br/>
            <text style={{margin:'0px 72px 0px'}}/>noStyle<br/>
            <text style={{margin:'0px 64px 0px'}}/>><br/>
            <text style={{margin:'0px 72px 0px'}}/>{kucuk}Input<br/>
            <text style={{margin:'0px 80px 0px'}}/>placeholder="passenger name"<br/>
            <text style={{margin:'0px 80px 0px'}}/>style={suslua}{suslua}<br/>
            <text style={{margin:'0px 88px 0px'}}/>width: '60%',<br/>
            <text style={{margin:'0px 80px 0px'}}/>}}<br/>
            <text style={{margin:'0px 72px 0px'}}/>/><br/>
            <text style={{margin:'0px 64px 0px'}}/>{kucuk}/Form.Item><br/>
            <text style={{margin:'0px 64px 0px'}}/>{suslua}fields.length > 1 ? (<br/>
            <text style={{margin:'0px 72px 0px'}}/>{kucuk}MinusCircleOutlined<br/>
            <text style={{margin:'0px 80px 0px'}}/>className="dynamic-delete-button"<br/>
            <text style={{margin:'0px 80px 0px'}}/>onClick={suslua}() => remove(field.name)}<br/>
            <text style={{margin:'0px 72px 0px'}}/>/><br/>
            <text style={{margin:'0px 64px 0px'}}/>) : null}<br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}/Form.Item><br/>
            <text style={{margin:'0px 48px 0px'}}/>))}<br/>
            <text style={{margin:'0px 48px 0px'}}/>{kucuk}Form.Item><br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}Button<br/>
            <text style={{margin:'0px 64px 0px'}}/>type="dashed"<br/>
            <text style={{margin:'0px 64px 0px'}}/>onClick={suslua}() => add()}<br/>
            <text style={{margin:'0px 64px 0px'}}/>style={suslua}{suslua}<br/>
            <text style={{margin:'0px 72px 0px'}}/>width: '60%',<br/>
            <text style={{margin:'0px 64px 0px'}}/>}}<br/>
            <text style={{margin:'0px 64px 0px'}}/>icon={suslua}{kucuk}PlusOutlined />}<br/>
            <text style={{margin:'0px 56px 0px'}}/>><br/>
            <text style={{margin:'0px 64px 0px'}}/>Add field<br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}/Button><br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}Button<br/>
            <text style={{margin:'0px 64px 0px'}}/>type="dashed"<br/>
            <text style={{margin:'0px 64px 0px'}}/>onClick={suslua}() => {suslua}<br/>
            <text style={{margin:'0px 72px 0px'}}/>add('The head item', 0);<br/>
            <text style={{margin:'0px 64px 0px'}}/>}}<br/>
            <text style={{margin:'0px 64px 0px'}}/>style={suslua}{suslua}<br/>
            <text style={{margin:'0px 72px 0px'}}/>width: '60%',<br/>
            <text style={{margin:'0px 72px 0px'}}/>marginTop: '20px',<br/>
            <text style={{margin:'0px 64px 0px'}}/>}}<br/>
            <text style={{margin:'0px 64px 0px'}}/>icon={suslua}{kucuk}PlusOutlined />}<br/>
            <text style={{margin:'0px 56px 0px'}}/>><br/>
            <text style={{margin:'0px 64px 0px'}}/>Add field at head<br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}/Button><br/>
            <text style={{margin:'0px 56px 0px'}}/>{kucuk}Form.ErrorList errors={suslua}errors} /><br/>
            <text style={{margin:'0px 48px 0px'}}/>{kucuk}/Form.Item><br/>
            <text style={{margin:'0px 40px 0px'}}/>{kucuk}/><br/>
            <text style={{margin:'0px 32px 0px'}}/>)}<br/>
            <text style={{margin:'0px 24px 0px'}}/>{kucuk}/Form.List><br/>
            <text style={{margin:'0px 24px 0px'}}/>{kucuk}Form.Item><br/>
            <text style={{margin:'0px 24px 0px'}}/>{kucuk}Button type="primary" htmlType="submit"><br/>
            <text style={{margin:'0px 32px 0px'}}/>Submit<br/>
            <text style={{margin:'0px 32px 0px'}}/>{kucuk}/Button><br/>
            <text style={{margin:'0px 24px 0px'}}/>{kucuk}/Form.Item><br/>
            <text style={{margin:'0px 16px 0px'}}/>{kucuk}/Form><br/>
            <text style={{margin:'0px 8px 0px'}}/>);<br/>
            };<br/>
            <text> <br/> </text>
            export default FormFieldOpener;<br/>
          </text>
          </Watermark>
        </Card>)}
      </div>
    </div>
  )
}

export default LoginPageReturner;