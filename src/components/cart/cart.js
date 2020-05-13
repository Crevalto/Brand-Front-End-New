import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import {GoTrashcan} from 'react-icons/go'


export class Cart extends Component {
    constructor(){
        super()
        this.state={
            products:[]
        }

    }
    
componentDidMount(){

    const url = 'https://crevaltobkend.herokuapp.com/brand/getcartitems';


    var bearer='Bearer'+localStorage.getItem('token')
        fetch(url,{
        method:'GET',
    headers:{
      'Authorization':bearer,
      'Content-Type':'application/json'}
    })
    .then(res =>res.json())
    .catch(error => console.error("Show me error that cannot be specify",error))
    .then(response =>{ console.log("Success:",response.cart)
          
    if(response.status===true){    
      this.setState({products:response.cart})
        }else{
            
          }
  })


} 
   
    render() {
        return (
            
            <div>

            {this.state.products.map((detail,index)=>{
              return <div>
                
                <Row style={{margin:'1rem',padding:'1rem'}}>         
                            
                    <Col md={2}>
                      <img src={detail.item.thumbnail} alt="helllo" width={70} className="img-fluid rounded shadow-sm" />
                            
                    </Col>
                    <Col style={{textAlign:'left',padding:'10px'}} md={4}>
                    <h5 ><p className="text-dark d-inline-block">{detail.item.productName}</p></h5>
                    </Col>
            <Col style={{textAlign:'left',padding:'10px'}} className="align-middle"><strong>{detail.item.salePrice}</strong></Col>
            <Col style={{textAlign:'left',padding:'10px'}} className="align-middle"><strong>{detail.item.size}</strong></Col>
            
                          <Col style={{textAlign:'left',padding:'10px'}} className="align-middle"><strong>{detail.item.quantity}</strong></Col>
                          <Col  style={{textAlign:'left',padding:'10px'}} className="align-middle"><p ><GoTrashcan style={{margin:'auto',textAlign:'center'}} size="20"/></p>
                          </Col>
                          
                </Row>
               <hr style={{margin:'0px 3rem 0px 3rem'}}/>
    
            </div>    
            
          }
          
          )
            }
    
    
          </div>
    

         )
    }
}

export default Cart
