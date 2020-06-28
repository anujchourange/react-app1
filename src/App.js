import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class  App extends Component {
  state = {
    users:[],
    loading:false //using to load spinner till data is fetched
  }

  async componentDidMount(){
    this.setState({loading:true}); // In React Class based component the state variable is changed using this.setState()vmethod
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data, loading:false});
  }

  // Search Github Users
  searchUsers = async text =>{
    this.setState({loading:true}); 
    //console.log('in SearchUsers async method');
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data.items, loading: false});
   // console.log(res.data);
  };

  // clearUsers = async text =>{
  //   this.setState({loading:true}); 
  //   //console.log('in SearchUsers async method');
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users:res.data, loading: false});
  //  // console.log(res.data);
  // };

  clearUsers = () =>this.setState({ users:[] , loading:false});

  render(){
    
    return (
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={
          this.state.users.length > 0 ? true : false }/> 
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
 
}

export default App;
