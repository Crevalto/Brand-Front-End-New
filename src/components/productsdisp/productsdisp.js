import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {MdLocationOn,MdDescription} from 'react-icons/md'
import {GiPriceTag} from 'react-icons/gi'

export default class productsdisp extends Component {
constructor(){
    super()
    this.handleClose=this.handleClose.bind(this);
    this.handleShow=this.handleShow.bind(this);
    this.addproduct=this.addproduct.bind(this);
    this.state={
        catid:"",
        products:[],
        show:false,
        modalproduct:[]

    }
}
    componentDidMount(){

      console.log(this.props.pid)
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
              
        if(response.status===true){
              
                this.setState({products:response.products})
              }else{
                alert("PAGE NOT FOUND API ERROR CHECK BACKEND")
              }

              
      })


      }

    handleClose = () => this.setState({show:false});
    handleShow = (e) => {
      

      const { param } = e.target.dataset;
      console.log(param)
      this.setState({
      show:true,
      modalproduct:JSON.parse(param)
      
      });
    }
    
    addproduct(e){
      
      const { param } = e.target.dataset;
      console.log(JSON.parse(param).id)

      const url = 'https://crevaltobkend.herokuapp.com/brand/addtocart';
      var data = {

        itemsRefs: JSON.parse(param).id,
        itemQuants: JSON.parse(param).qty
      
      }
  
      var bearer='Bearer'+localStorage.getItem('token')
      console.log(bearer)
      console.log(data);  
          fetch(url,{
          method:'POST',
          body:JSON.stringify(data),
      headers:{
        'Authorization':bearer,
        'Content-Type':'application/json'}
      })
      .then(res =>res.json())
      .catch(error => console.error("Show me error that cannot be specify",error))
      .then(response =>{ console.log("Success:",response)
            
      if(response.status===true){
        alert(response.message)    
          }else{
              alert(response.error)
            }
    })

      }

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
                  <Button  data-param={JSON.stringify({"pid":product._id,"pname":product.productName,"pdescription":product.description,"padd":product.stockAddress,"pqty":product.quantity,"pprice":product.salePrice,"psize":product.size})} onClick={this.handleShow} class="btn">View more</Button>
                </div>
            </div>
             


      </div>

)})}

<Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{this.state.modalproduct.pname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.modalproduct.pdescription}</Modal.Body>
        <Modal.Body><h5><MdLocationOn size="20" color="purple"/>StockAddress:</h5>{this.state.modalproduct.padd}
        <h5><GiPriceTag color="purple" size="20"/>SalePrice:</h5>{this.state.modalproduct.pprice}
        <h5><MdDescription size="20" color="purple"/> Description:</h5>{this.state.modalproduct.pdescription}

        <h5> Quantity:</h5>{this.state.modalproduct.pqty}
        <h5> Size:</h5>{this.state.modalproduct.psize}
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary" data-param={JSON.stringify({"id": this.state.modalproduct.pid,"qty": this.state.modalproduct.pqty})} onClick={this.addproduct}>
           Add to Cart
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
