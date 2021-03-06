import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    static propTypes = {
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
    }
    state={
        text:''
    }

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        

    };

    onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
               <form action="" onSubmit={this.onSubmit} className='form'>
                <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>    
               </form> 
               {this.props.showClear && (
                   <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
               )}
               
            </div>
        )
    }
}

export default Search
