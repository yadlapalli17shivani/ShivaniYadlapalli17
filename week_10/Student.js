import React, { Component } from "react";
import Course from "./Course";

class Student extends Component {
  render() {
    return (
      <div>
        <h2>Student Component (Class)</h2>

        <p>Name: Pradeep</p>

        <Course />
      </div>
    );
  }
}

export default Student;