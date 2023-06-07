import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.jsx";
import SearchBox from "./components/search-box/search-box.jsx";
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
        <header className="header mt-[2rem]">
          <h1 className="text-[3rem] font-bold">Monster Roledex 👾</h1>
          <div className="h-[0.2rem] w-[30rem] bg-[#363636] rounded mx-[auto] transform -translate-y-1  min450:hidden"></div>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="Find your monster"
          />
        </header>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
