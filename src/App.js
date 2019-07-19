import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/CardList/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/searchbox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = (e) =>{
    this.setState({ searchfield: e.target.value });
  }
  render() {
    const { monsters, searchfield } = this.state;
    const filterMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="App">
      <h1>
        Monster Rolodex
      </h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search monsters"
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
