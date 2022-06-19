import React,{useState} from 'react'
import { Col, Row } from 'antd';
import { Alert } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'

const Register = () => {

  const [success,setSuccess]=useState(false)
   

    const onFinish = (values) => {

        axios.post("http://localhost:8081/register/signup",values).then(result=>{
         
         console.log(result.data)
         
          if(result.data.message=="Successfully registered"){

            setSuccess("success")
           
          }

          else{
            setSuccess("failed")
            
          }

        }).catch(err=>{
            console.log(err)
        })
        

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (

    <Row style={{marginTop:"150px"}}>

 
      <Col span={12} offset={6}>
        {
          success=="success"? <Alert message="Successsfully registered" type="success" />:""
          
        } 

        {
          success=="failed" ?<Alert message="Could not inserted"  type="error"/>:"" 
        }
          
          <h1>Signup here</h1>
          
          <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

<Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone Number"
      name="phonenumber"
      rules={[
        {
          required: true,
          message: 'Please input your Phone Number!',
        },
      ]}
    >
     <Input /> 
    </Form.Item>

    <Form.Item
      label="Education Detail1"
      name="educationdetail1"
      rules={[
        {
          required: true,
          message: 'Please input your Education Detail1',
        },
      ]}
    >
     <Input />  
    </Form.Item>

    <Form.Item
      label="Education Detail2"
      name="educationdetail2"
      rules={[
        {
          required: true,
          message: 'Please input your Education Detail1',
        },
      ]}
    >
     <Input />  
    </Form.Item>
     

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</Col>
    </Row>
    
  )
}

export default Register