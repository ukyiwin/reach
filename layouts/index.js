import { Avatar, BackTop, Breadcrumb, Col, Divider, Icon, Layout, Menu, Rate, Row, Switch } from 'antd'
import React, { Component } from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'
import Link from 'umi/link'
import firebase, { initFirebase } from '../services/firebase'
import Header from './Header'
import Sidebar from './Sidebar'

const { Content, Footer } = Layout

initFirebase()

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false // Local signed-in state.
    }
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    // callbacks: {
    //   // Avoid redirects after sign-in.
    //   signInSuccess: () => false,
    // },
    signInSuccessUrl: '/',
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user }),
    )
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { children } = this.props

    return (
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">主页</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/get">想法</Link></Breadcrumb.Item>
            <Breadcrumb.Item>JimmyLv</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sidebar />
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {
                this.state.isSignedIn ? children : <div>
                  <h1>请登录</h1>
                  <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                </div>
              }
            </Content>
          </Layout>
        </Content>
        <BackTop />
        <Footer style={{ textAlign: 'center' }}>
          Reach ©2018 Created by JimmyLv.
        </Footer>
      </Layout>
    )
  }
}