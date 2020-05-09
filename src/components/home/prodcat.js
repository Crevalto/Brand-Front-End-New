import React, { Component } from 'react'
//import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

 class prodcat extends Component {

    state={
        services:[]
    }

    componentDidMount(){

        fetch('https://crevaltobkend.herokuapp.com/brand/getcategories')
        .then(response => response.json()

        )
        .then((jsonData) => {
          this.setState({ services:jsonData})
          console.log(this.state.services)

        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
    }

    render() {
        return (
        <div class="row">
            {this.state.services.map((product,index) =>{

                return(
                <div class="col-md-4"  key={index}>
                
                <Link to={`/product/${product._id}`}> 
 
                  <div class="card">
                  <img src={product.categoryThumbnail} class="card-img-top" alt="..."/>
                  <div class="holder" style={{marginTop:'-38px',width:'100%'}}>
                      <h5 class="card-title">{product.categoryName}</h5>
                  </div>
                  </div>
              </Link>
                </div>
           )})}
        </div>

        )
    }
}
export default prodcat
