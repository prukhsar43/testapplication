
import React from 'react'
import axios from 'axios' 
import { useState,useEffect } from 'react'
import { Card } from 'antd';
const { Meta } = Card;


 

const Resume = () => {

     


    const [apiData,setApidata]=useState([])
     const [flag,setFlag]=useState(false)
        

              const showData=()=>{

                axios.get("https://obscure-ridge-58015.herokuapp.com/user").then(response=>{

                
                setApidata(response["data"].data)
                  setFlag(true)

                  console.log(apiData[0])

                }).catch(err=>{

                    console.log(err)
                    setFlag(false)
                }

                )


              }


    useEffect(()=>{
       
        showData()
        

    },[])



         return(
            apiData.map((ele,i)=>{

                return (
                    <>
                    <div style={{marginTop:"10%",marginLeft:"35%"}}>
                        
                 <Card
                hoverable
                style={{ width: 500, borderRadius:20,height:300,backgroundColor:"#87CEEB"}}
                cover={
                <> 
                <h3 style={{marginTop:"20px"}}>About Me</h3>
                <div style={{display:"flex", marginLeft:40,marginTop:40}}>
                    <img style={{width:"100px", height:"100px" ,marginLeft:"30px"}}   src={ele.profilePicture} />
                    <div style={{marginLeft:140}}>
                    <Meta title={ele.name} description={ele.email}/> 
                    <Meta   description={ele.phonenumber}    />
                    </div>
                    </div>
                    
                </>}
            >
                
               <div style={{marginLeft:200}}>
               <Meta title="Education"  description={ele.educationdetail1} />
                <Meta style={{marginLeft:25}} description={ele.educationdetail2} />
               </div>
               
               </Card>
               </div>  
               </>         
                            
               
                  )
    
    
    
             }
    
             )
    
            
    
         )
        
 
}

export default Resume
