import React, { Component } from 'react';
import UserCard from './components/UserCard';
import "./app.modules.scss"
import Data from "./data.js"

class App extends Component {
  render() {
    let UserCardData = Data.map(function (user) {
      return (
        <UserCard
          key={user.id}
          fullName={`${user.firstName} ${user.lastName}`}
          titleText={user.title}
          description={user.description}
          imgSrc={user.profilePicture}
          contactsArr={user.contacts}
        />
      );
    });

    return (
      <React.Fragment>
        <ul className="cardsContainer">
          {UserCardData}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;