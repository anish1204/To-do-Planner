import React, { Component } from "react";
import Plan from "./Plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (id) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDelete = id=>{
    console.log("deleted");
    const Olditems=[...this.state.items]
    console.log("Olditems",Olditems);
    const items=Olditems.filter((element,i)=>{

      return i !==id;
    })
    this.setState({items:items});
  }
  render() {
    return (
                 
      <div className="container-fluid my-4">
        <div className="pic" id="back"> </div>
        <div className="row">
          <div className="col-sm-7 mx-auto ">
            <div className="top">
              <h1 className="text-center">To do</h1>
            </div>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Your Plans"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning  px-6"
                  id="button"
                  onClick={this.handleAdd}
                >
                  Add
                </button>
              </div>

              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
              {
                this.state.items.map((value,i)=>{
                
                  return <   Plan key={i} id={i} value={value} 
                  sendData={this.handleDelete} />
                  
                })
              }
             
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
