import React from 'react'

import '../assets/scss/main.scss'
import Navbar from './Navbar'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
          }`}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Faustina|Montserrat:400,600&display=swap"
          rel="stylesheet"
        />
        <div id="wrapper">
          <Navbar onToggleMenu={this.handleToggleMenu} />
          {children}
          <Footer />
        </div>
        {/* <Menu onToggleMenu={this.handleToggleMenu} /> */}
      </div>
    )
  }
}

export default Layout
