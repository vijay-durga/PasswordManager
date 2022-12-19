import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import Information from '../Information/index'

class PasswordManager extends Component {
  state = {
    passwordManagerList: [],
    id: '',
    password: '',
    userName: '',
    webSite: '',
    isChecked: false,
    searchedInput: '',
  }

  onSearchingInput = event => {
    this.setState({searchedInput: event.target.value})
  }

  onClickingAddButton = event => {
    event.preventDefault()
    const {webSite, userName, password} = this.state
    const newItem = {
      id: v4(),
      webSite,
      userName,
      password,
    }

    if (
      webSite.length !== 0 &&
      userName.length !== 0 &&
      password.length !== 0
    ) {
      this.setState(prevState => ({
        passwordManagerList: [...prevState.passwordManagerList, newItem],
        webSite: '',
        userName: '',
        password: '',
      }))
    }
  }

  enterWebsiteDetails = event => {
    this.setState({webSite: event.target.value})
  }

  enterUserDetails = event => {
    this.setState({userName: event.target.value})
  }

  enterPasswordDetails = event => {
    this.setState({password: event.target.value})
  }

  deletePassword = id => {
    const {passwordManagerList} = this.state
    const toDeletingPassword = passwordManagerList.filter(
      each => each.id !== id,
    )
    this.setState({
      passwordManagerList: toDeletingPassword,
    })
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {isChecked, passwordManagerList, searchedInput} = this.state
    const count = passwordManagerList.length
    const updatedList = passwordManagerList.filter(each =>
      each.webSite.toLowerCase().includes(searchedInput.toLowerCase()),
    )

    return (
      <div className="bg-cont">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="bg-cont-1">
          <form type="submit" className="form">
            <h1 className="head-1">Add New Password</h1>

            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="text"
                onChange={this.enterWebsiteDetails}
              />
            </div>

            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="text"
                onChange={this.enterUserDetails}
              />
            </div>

            <div className="input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="password-11"
                onChange={this.enterPasswordDetails}
              />
            </div>

            <div className="add-btn-cont">
              <button
                type="submit"
                className="add-btn"
                onClick={this.onClickingAddButton}
              >
                Add
              </button>
            </div>
          </form>

          <div className="img-password-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="bg-cont-3">
          <div className="bg-cont-sub-cont">
            <div className="pass-score-cont">
              <h1 className="header">Your Passwords</h1>
              <p className="para">{count}</p>
            </div>
            <div className="search-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input
                type="search"
                className="search-input"
                onChange={this.onSearchingInput}
              />
            </div>
          </div>
          <hr className="line" />

          <div className="last-cont">
            <div className="checkbox">
              <input
                type="checkBox"
                id="check"
                checked={isChecked}
                onChange={this.onChecked}
              />
              <label htmlFor="check" value="checkBox" className="check">
                Show Passwords
              </label>
            </div>

            {count === 0 ? (
              <div>
                <div className="no-password-cont">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords"
                  />
                </div>
                <p className="para-pass">No Passwords</p>
              </div>
            ) : (
              <ul className="ul-list">
                {updatedList.map(each => (
                  <Information
                    key={each.id}
                    each={each}
                    deletePassword={this.deletePassword}
                    isChecked={isChecked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
