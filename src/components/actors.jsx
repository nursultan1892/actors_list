import { Component } from "react";
import "../App.css";
import { act } from "react-dom/test-utils";
import SingleActor from "./singleActor";

export default class Actors extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="main-card">
        {data.map((actor) => (
          <SingleActor key={actor.id} {...actor} />
        ))}
      </div>
    );
  }
}
