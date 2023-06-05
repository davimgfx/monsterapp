import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
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

  render() {
    return (
      <div>
        <header className="header">
          <h1>Monster app</h1>
          <div>
            <input
              className="search-box"
              type="search"
              placeholder="search monsters"
              onChange={(event) => {
                const searchString = event.target.value.toLowerCase();

                const filterMonster = this.state.monsters.filter((monster) => {
                  return monster.name.toLowerCase().includes(searchString);
                });

                this.setState(() => {
                  return { monsters: filterMonster };
                })
              }}
            />
            <button>Find</button>
          </div>
        </header>

        <div className="">
          {this.state.monsters.map((monster, index) => {
            return (
              <div key={index}>
                <h1>{monster.name}</h1>
                <h2>{monster.email}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
