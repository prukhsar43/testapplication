import { Space, Table, Tag } from 'antd';
import React, { useEffect,useState } from 'react';
import { Col, Row } from 'antd';
import { Button, Modal,Input } from 'antd';
import axios from 'axios';
import config from './config';

const Home = () =>{

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },

  {
    title: 'Phone Number',
    dataIndex: 'phonenumber',
    key: 'phonenumber',
  },

  {
    title: 'Education detail 1',
    dataIndex: 'educationdetail1',
    key: 'educationdetail1',
  },

  {
    title: 'Education detail 2',
    dataIndex: 'educationdetail2',
    key: 'educationdetail2',
  }
 
  
   
];
 
         
  
   
   

  const [data,setData]=useState([])

  const headers = {
     
    'token':localStorage.getItem("token")
  }
  

   useEffect(()=>{
       
        axios.get(`${config.URL}user/`, {
          headers: headers
        }).then(response=>{

            if(response["data"].data){

              setData(response["data"].data)
              
            }

        }).catch(err=>{
          console.log(err)
        })

   },[])




  return(

    <Row style={{marginTop:"150px"}}>
      
      <Col span={12} offset={6}>
     <h1>Student Details</h1>
    <Table columns={columns} dataSource={data} />
    </Col>
</Row>
  )
} 

export default Home;