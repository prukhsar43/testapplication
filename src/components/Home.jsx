import { Space, Table, Tag } from 'antd';
import React, { useEffect,useState } from 'react';
import { Col, Row } from 'antd';
import { Button, Modal,Input } from 'antd';
import axios from 'axios';

const Home = () =>{

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },

  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  }


   
   
   
  
   
];
 
         
 

           
          
          

         
   
   
   

  const [data,setData]=useState([])

  const headers = {
     
    'token':localStorage.getItem("token")
  }
  

   useEffect(()=>{
       
        axios.get("http://localhost:8080/user/", {
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
     <h1>Product Details</h1>
    <Table columns={columns} dataSource={data} />
    </Col>
</Row>
  )
} 

export default Home;