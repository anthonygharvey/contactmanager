import React, { Component } from "react";
import Contact from "./Contact";

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "333-333-333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "444-444-44444"
      }
    ]
  };

  render() {
    const contacts = this.state.contacts.map(contact => {
      return <Contact key={contact.id} contact={contact} />;
    });

    return <>{contacts}</>;
  }
}

export default Contacts;
