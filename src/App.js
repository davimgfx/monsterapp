import CardList from "./components/card-list/card-list.jsx";
import SearchBox from "./components/search-box/search-box.jsx";
import { useState, useEffect } from "react";
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value,setValue]
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters); // [value,setValue]
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  setFilterMonsters(newFilteredMonsters)
  
  }, [monsters, searchField]);


  return (
    <div>
      <header className="header mt-[2rem]">
        <h1 className="text-[3rem] font-bold">Monster Roledex 👾</h1>
        <div className="h-[0.2rem] w-[30rem] bg-[#363636] rounded mx-[auto] transform -translate-y-1  min450:hidden"></div>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Find your monster"
        />
        <CardList monsters={filteredMonsters} />
      </header>
    </div>
  );
};

export default App;
