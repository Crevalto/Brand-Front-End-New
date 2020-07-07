
import React, { Component } from 'react'

export default class Veera extends Component {
    constructor(){
        super();
        this.state={
            cnt:""
        }
    }
    componentDidMount(){
        const url="https://apicrevalto.herokuapp.com/v1/brand/empcount"
         fetch(url,{
        method:"GET",
        headers:{
        "Content-Type":"application/json"
}})
      .then((response)=>response.json)
      .then((response)=>{
        console.log(response)
        if(response.status===true){
          this.setState({cnt:response.totalemployees})
        
        console.log(this.state.cnt)
        
        }
      })
    }
    render() {
        return (
            <div>
                {this.state.cnt}
            </div>
        )
    }
}
