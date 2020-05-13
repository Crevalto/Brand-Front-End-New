import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'


export default class productsdisp extends Component {
constructor(){
    super()
    this.handleClose=this.handleClose.bind(this);
    this.handleShow=this.handleShow.bind(this);
    this.state={
        catid:"",
        products:[],
        show:false

    }
}
    componentDidMount(){
      this.setState({catid: this.props.pid }, () => {
       
          this.fetchproduct();
        
        })
          
      }

      fetchproduct(){
        
       console.log(this.state.catid)
        const url = 'https://crevaltobkend.herokuapp.com/brand/getproducts';
        var data = {
          categoryId : this.state.catid
          
        }
        
        console.log(data);  
            fetch(url,{
            method:'POST',
            body:JSON.stringify(data),
        headers:{'Content-Type':'application/json'}
        })
        .then(res =>res.json())
        .catch(error => console.error("Show me error that cannot be specify",error))
        .then(response =>{ console.log("Success:",response)
        console.log(this.state.catid)    
        if(response.status===true){
              
                this.setState({products:response.products})
              }else{
                alert("PAGE NOT FOUND API ERROR CHECK BACKEND")
              }
      })


      }

    handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});


    render() {
    
      return (
            <div class="row">
            {this.state.products.map((product,index) =>{
        return(
               <div class="col-md-4">
            <div class="card" >
              <img src={product.thumbnail} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{product.productName}</h5>
            <p class="card-text">{product.description}</p>
                  <Button onClick={this.handleShow} class="btn">View more</Button>
                </div>
            </div>
             

<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{product.description}</Modal.Body>
        <Modal.Body><h5>StockAddress:</h5>{product.stockAddress}
        <h5>SalePrice:</h5>{product.salePrice}
        <h5> Description:</h5>{product.description}

        <h5> Quantity:</h5>{product.quantity}
        <h5> Size:</h5>{product.size}
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary" onClick={this.handleClose}>
           Add to Cart
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

)})}
            </div>
        )
    }
}
