import React,{useState} from 'react'
import { Col, Row } from 'antd';
import { Alert } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'

const Register = () => {

  const [success,setSuccess]=useState(false)
   const[file,setFile]=useState("")

    const onFinish = (values) => {

          const formData=new FormData();
          formData.append("name",values.name);
          formData.append("email",values.email);
          formData.append("phonenumber",values.phonenumber);
          formData.append("educationdetail1",values.educationdetail1);
          formData.append("educationdetail2",values.educationdetail2);
          formData.append("file",file)


          const configFile={

            headers:{
              'content-type': 'multipart/form-data'
              
            }
          }







        axios.post("http://localhost:8081/register/signup",formData,configFile).then(result=>{
         
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
      
      const onFileChange=(e)=>{

            setFile(e.target.files[0])


      }
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
      label="File"
      name="file"
      rules={[
        {
          required: true,
          message: 'Please input your Phone Number!',
        },
      ]}
    > 

     <input type="file"  onChange={onFileChange}/>
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