import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users';
import axios from 'axios';

class  App extends Component {
  state = {
    users:[],
    loading:false //using to load spinner till data is fetched
  }
  async componentDidMount(){
    this.setState({loading:true}); // In React Class based component the state variable is changed using this.setState()vmethod
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users:res.data, loading:false});
  }

  render(){
    
    return (
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
 
}

export default App;
