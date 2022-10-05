import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
            _limit: 9
        }
    })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        {
          this.state.persons
            .map(person =>
                <div className="card-information">
                    <div>
                        <img src="./star.png" />
                        <div>
                            <h5 key={person.id}>{person.name}</h5>
                            <label>{person.email}</label>
                        </div>
                    </div>
                    <img src="./check.png" />
                </div>
            )
        }
      </div>
    )
  }
}