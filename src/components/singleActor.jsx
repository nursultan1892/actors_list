import { Component } from "react";
import "../App.css";
import ModalComp from "./modal";

export default class SingleActor extends Component {
  render() {
    const { name, profile_path, id, gender, popularity, known_for } =
      this.props;
    return (
      <div className="container">
        <img src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt="" />
        <h4>{name}</h4>
        <p>Popularity Rate: {Math.round(popularity)}</p>
        <div className="ModalComp">
          <ModalComp known_for={known_for} />
        </div>
      </div>
    );
  }
}
