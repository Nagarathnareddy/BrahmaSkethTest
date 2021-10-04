import logo from './logo.svg';
import './App.css';



import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {response:[],
      buttonClicked:false
      
       
    }
  }
  getData=async()=>
  {
   const response = await fetch ("https://api.openbrewerydb.org/breweries/autocomplete?query=dog")
   const convertData = await response.json()
   console.log(convertData)
  this.setState({response:convertData,buttonClicked:true})
  }
  render() {
    
    return (
      
      
      (this.state.buttonClicked)?   (<div> 
    
    <h1 className="heading">Welcome to open Brewery DB</h1>
    <h1 className="subheading">Auto Complete:</h1>
    <p className="para">Return a list of names and ids of breweries based on a search term. This endpoint is typically used for a drop-down selection.The maximum number of breweries returned is 15.
    </p>
   
    
    <table>
                 <tr>
                         <th>Name</th>
                         <th>Id</th>
                         </tr>
                  </table>
                {this.state.response.map((details)=>
                {
                  return(
                    <div>
                   <table>
                    
 
                         <tr>
                           <td>{details.name}</td>
                           <td>{details.id}</td>
                           
                         </tr>
                      </table>
                  
                  </div>
        
                  )
                  
                }
                )}
              </div>)
           
           :( <button className="button2" onClick={this.getData}>Breweries</button>)
    )
  }
}

