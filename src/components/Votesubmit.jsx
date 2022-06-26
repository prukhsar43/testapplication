 import React from 'react'
 import { Image } from 'antd';
 import { Button,Row,Col} from 'antd';


 const Votesubmit = () => {

                const handleUpVoteFirst=()=>{


                }
                const handleDownVoteFirst=()=>{

                    
                }
                const handleUpVoteSecond=()=>{

                    
                }
                const handleDownVoteSecond=()=>{

                    
                }

   return (
     <div>
         <Row style={{marginTop:"120px"}}>
         <Col span={12} offset={4}>
      <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
      </Col>

      <Button type="primary" onClick={handleUpVoteFirst}>Upvote</Button>
      <Button type="primary" onClick={handleDownVoteFirst}>Downvote</Button>
      
    </Row>
        
    <Row style={{marginTop:"20px",marginLeft:"140px"}}>
    <Col span={12} offset={4}>
    <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />

   <Button type="primary" onClick={handleUpVoteSecond}>Upvote</Button>
      <Button type="primary" onClick={handleDownVoteSecond}>Downvote</Button>
    
    </Col>
    </Row>



     </div>
   )
 }
 
 export default Votesubmit