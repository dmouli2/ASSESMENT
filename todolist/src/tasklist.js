import React from "react";
import axios from "axios";
import { Todo } from "./todo";

export class Tasklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newtsk: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    let promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
    promise.then(responce =>
      this.setState({
        newtsk: responce.data
      })
    );
  }
  addTOdo(valueid,valuetext){
    let updatedTask = {
        "userId": 1,
    "id": valueid,
    "title": valuetext,
    "completed": false
    }

    this.setState(
        {
            newtsk:this.state.newtsk.concat(updatedTask)
            
        }
    )
    // selectedProduct
}
handleSubmit(id){
    console.log(id)
    let newvalue = this.state.newtsk.filter(
        newtsks => newtsks.id !== id
    )
    this.setState(
        {
            newtsk:newvalue,
            
        }
    )
    // selectedProduct
}
  render() {
    console.log(this.state.newtsk);

    return (
      <div className="container">
       <div className="row">
       <div className="col-6">
       <input type="number" id="inputvalid" className = "class-control" placeholder = "Add Todo id"/>
       <input type="text" id="inputvaltitle" className = "class-control" placeholder = "Add Todo text"/>
       <button className="btn btn-primary" onClick = {
                                    ()=>{
                                        var valueid = document.getElementById('inputvalid').value
                                        var valuetext = document.getElementById('inputvaltitle').value
                                        this.addTOdo(valueid,valuetext);
                                    }
                                }>Submit</button>
       </div>
       </div>
        <div className="row">
         
        <p>Number of Tasks : {this.state.newtsk.length}</p>
          {this.state.newtsk.map(newtsk => (
            <Todo key={newtsk.id} data={newtsk} delete={this.handleSubmit}/>
          ))}
         
          
        </div>
      
      </div>
    );
  }
}
