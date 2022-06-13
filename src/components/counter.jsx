import React, { Component } from 'react';


class Counter extends Component {
     state={
      value:this.props.counter.value,
      tag:["tag0","tag1","tag2"]
     };

    //  constructor(){

    //   super()
    //   console.log("constructor",this);
    //   this.handIncrement = this.handIncrement.bind(this)
    //  }
     
     renderTag(){
        if(this.state.tag.length === 0) return <p>There is no tag</p>;
       return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;

     }
     handIncrement = (product) =>{

      // console.log(product);
      this.setState({value: this.state.value+1});
     }
     dohandleincrement = () => {
       this.handIncrement({id :1})
     }

    render() { 
      // console.log("props",this.props);
      
      return   (
      <div>
        <h4>{this.props.counter.id}</h4>
        
        <span className={this.getbadgeclasses()}>{this.formatCount()}</span> 
        {/* <button onClick={this.handIncrement} className='btn btn-secondary btn-sm'>Increment </button> */}
        
        <button 
          //onClick={  this.dohandleincrement }
          onClick={() => this.props.onIncrement(this.props.counter) } 
          className='btn btn-secondary btn-sm'>
          Increment 
        </button>


        <button 
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>


        {/* {this.renderTag()} */}
        </div>
        );


      
    }

    getbadgeclasses() {
      let classes = 'btn m-2 btn-';
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }

    formatCount(){
      const {value: count} =this.props.counter;


      return count === 0 ? "Zero" : count;


    }
}
 
export default Counter;