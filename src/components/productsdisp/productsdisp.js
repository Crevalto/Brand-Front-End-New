import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
import {MdLocationOn,MdDescription} from 'react-icons/md'
import {GiPriceTag} from 'react-icons/gi'
import {IoIosCart,IoMdSend} from "react-icons/io";
import {FaMoneyBillWaveAlt} from "react-icons/fa";

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
              <div class="card">
                <img src={product.thumbnail} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{product.productName}</h5>
                    <p class="card-text">{product.description}</p>
                    <Button  data-param={JSON.stringify({"pid":product._id,"pname":product.productName,"pdescription":product.description,"padd":product.stockAddress,"pqty":product.quantity,"pprice":product.salePrice,"psize":product.size,"img":product.thumbnail})} onClick={this.handleShow} class="btn">View more</Button>
                  </div>
              </div>
            </div>
            )
            })}

        <Modal className="products-detail" show={this.state.show} onHide={this.handleClose} size="lg">
        <Modal.Body>
        <div class="row model">
          <div class="col-md-6 full-all-img">
            <h5><span>Rs</span> {this.state.modalproduct.pprice}</h5>
            <img src={this.state.modalproduct.img} class="card-img-top" alt="..."/>
          </div>
          <div class="col-md-6 product-full-desc">
            <div class="desc-content">
              <h1>{this.state.modalproduct.pname}</h1>
              <h4>{this.state.modalproduct.pdescription}</h4>
              <h6>
                <svg class="bi bi-geo-alt" width="1em" height="0.8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
                {this.state.modalproduct.padd}
              </h6>
              <hr/>
              <h5><span>Available qty : </span> {this.state.modalproduct.pqty}</h5>
              <div class="sizes">
                <span>Xs</span>
                <span>Sm</span>
                <span>Md</span>
                <span>La</span>
                <span>Xl</span>
                <span>Xxl</span>
              </div>
              <Button variant="secondary" data-param={JSON.stringify({"id": this.state.modalproduct.pid,"qty": this.state.modalproduct.pqty})} onClick={this.addproduct}>
               <span>Add to Cart</span><IoIosCart/>
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                <span>Buy Now</span><IoMdSend/>
              </Button>
            </div>
          </div>
        </div>

        </Modal.Body>
      </Modal>
      </div>
        )
    }
}
