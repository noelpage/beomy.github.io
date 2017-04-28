import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  accessToken = "";

  constructor(props) {
    super(props);
    
    var pageAddress = "http://localhost:3000";
    var accessToken = this.accessToken = new URLSearchParams(location.hash).get("#access_token");
    if (accessToken === undefined || accessToken == null || accessToken == '') {
      location.href = "https://www.tistory.com/oauth/authorize?client_id=17bc9e4ee96c19b8dd086f8977fa54c4&redirect_uri=" + pageAddress + "&response_type=token";
    }
  }

  render() {
    return (
      <div>
        {this.accessToken}
      </div>
    );
  }
}

export default App;
