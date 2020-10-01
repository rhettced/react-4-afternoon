import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    //console.log(this.props.match.params.class);
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        console.log(res.data);
        this.setState({ students: res.data });
      })
      .catch(err => console.log(err))
  }


  render() {

    const students = this.state.students.map((el, ind) => {
      return <Link key={ind} to={`/student/${el.id}`}>
               <h3 >{el.first_name} {el.last_name}</h3>
            </Link>
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}