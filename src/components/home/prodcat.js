import React, { Component } from 'react'
import {Card} from 'react-bootstrap'


 class prodcat extends Component {
    
    state={
        services:[]
    }

    componentDidMount(){

        fetch('https://cors-anywhere.herokuapp.com/http://117.242.221.193:4000/brand/getcategories')
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
            <section className="services">
            <div className="services-center">

               

            {this.state.services.map((product,index) =>{
                
                return <article key={index} className="service">
                        <Card style={{textAlign:'left'}}>
                
                            <Card.Img   variant="top" src={product.categoryThumbnail} />
                            <Card.Body>
                            <Card.Title>{product.categoryName}</Card.Title>
                        </Card.Body>
                            

                        </Card>
             </article>
                })}
              </div> 
  </section>    

        )
    }
}
export default prodcat