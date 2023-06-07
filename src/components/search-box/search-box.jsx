import { Component } from "react";
import "./search-box.css"
class SearchBox extends Component {
  render() {
    return (
      <input
        className={`shadow appearance-none border rounded w-12rem mt-[1rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline search-box`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
