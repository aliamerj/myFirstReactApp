import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
    
    };
    list = []
    
    handleIncrement = ()=> {
        this.setState({count : this.state.count +1});
       this.list.push({ id : this.state.count,
                       tag : `tag`})
     }
     handleDelete = (list)=>{
         const newList = this.list.filter(i => i.id !== list);
         this.setState({count : this.state.count - 1});
         this.list = newList;
      
     }
     // add later
     handleSetProductName = () =>{
        <input type="text" placeholder ="product name" onChange={nameProduct => this.handleIncrement}></input>
         
     }
     

    render() { 
        return ( 
        <React.Fragment>

            <span className={this.getBadgeClass()}>
                {this.formatCount()}
            </span>
            <button type="button" className="btn btn-secondary" onClick={this.handleIncrement}>increment</button>
            <div>{this.renderTags()}</div>


        </React.Fragment>
        );
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
    getBadgeClass(){
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning text-dark " : "primary";
        return classes;
     
    }
    renderTags(){
        const {list} = this;
        let massage = list.length === 0 ? "there are no tags please add new tags" : 
        <ul>
            {this.list.map((list) => 
            <li className="list-group-item" key={list.id} value={list.tag}>{list.tag} <button onClick={()=>this.handleDelete(list.id)} className="btn btn-danger">delete</button></li>
            )
            
            }
        </ul>
        return massage;
    }




}
 
export default Counter;