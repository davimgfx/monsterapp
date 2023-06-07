import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.jsx";
import SearchBox  from "./components/search-box/search-box.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <header className="header">
          <h1>Monster app</h1>
          <SearchBox onChangeHandler={onSearchChange}/>
          <CardList
            monsters={filteredMonster}
          />
        </header>
      </div>
    );
  }
}

export default App;
