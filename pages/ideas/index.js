import React, { Component } from 'react'
import firebase from '../../services/firebase'

export default class extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: null,
    }

    const database = firebase.database()
    const userId = firebase.auth().currentUser.uid
    database.ref('/users/' + userId).once('value').then((snapshot) => {
      this.setState({
        username: (snapshot.val() && snapshot.val().username) || 'Anonymous',
      })
      // ...
    })
  }

  render() {
    const { location: query } = this.props
    const { username } = this.state
    const user = firebase.auth().currentUser

    return (
      <div>
        {user.displayName} 的第{username}个想法：{query.idea}
      </div>
    )
  }
}