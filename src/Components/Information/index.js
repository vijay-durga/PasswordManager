import {Component} from 'react'

import './index.css'

class Information extends Component {
  render() {
    const {each, deletePassword, isChecked} = this.props
    const {id, userName, webSite, password} = each
    const initial = userName[0].toUpperCase()

    const passwordItem = isChecked ? (
      <p className="password">{password}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="star-img"
      />
    )

    const onDelete = () => {
      deletePassword(id)
    }

    return (
      <li className="password-lists-item-container">
        <div className="list-item-container">
          <div className="initial-container">{initial}</div>
          <div className="text-container">
            <p className="website-name">{webSite}</p>
            <p className="username">{userName}</p>
            {passwordItem}
          </div>
          <div className="button-container">
            <button
              type="button"
              className="delete-btn"
              onClick={onDelete}
              testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
                className="delete-image"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default Information
