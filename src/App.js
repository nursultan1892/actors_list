import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
import { NavbarBrand } from "reactstrap";
import Actors from "./components/actors";
import { Spinner } from "reactstrap";
import DropDownComp from "./components/dropDownComp";

export default class App extends Component {
  state = {
    data: [],
    filterGender: [],
    dataLoaded: false,
  };
  handleFilter = (param) => {
    const { data, filterGender } = this.state;
    let filteredData;
    if (param === "female") {
      filteredData = data.filter((actor) => actor.gender === 1);
    } else if (param === "male") {
      filteredData = data.filter((actor) => actor.gender === 2);
    } else {
      filteredData = data.sort((a, b) => a.popularity - b.popularity);
    }
    this.setState({ filterGender: filteredData });
    console.log(filteredData);
  };
  fetchData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en"
    );
    const data = await res.json();
    this.setState({ data: data.results, dataLoaded: true });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { data, dataLoaded, filterGender } = this.state;
    return (
      <div className="App">
        <div className="navbar">
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://th.bing.com/th/id/R.daba84e035b7b96f470108008a18191c?rik=ngTyp3Z4sD66rA&riu=http%3a%2f%2forig13.deviantart.net%2ff10e%2ff%2f2012%2f096%2fd%2f2%2funiversity_theater_logo_by_durnesque-d336cg1.jpg&ehk=KM4EuQ5R%2fvk5kSYbyrZ4B9bJqJhaayqcE978IwpIP3w%3d&risl=&pid=ImgRaw&r=0"
              style={{
                height: 40,
                width: 40,
              }}
            />
            Actors Info
          </NavbarBrand>
          <DropDownComp handleFilter={this.handleFilter} />
        </div>
        {dataLoaded ? (
          <Actors data={filterGender.length ? filterGender : data} />
        ) : (
          <Spinner color="info">Loading...</Spinner>
        )}
      </div>
    );
  }
}
