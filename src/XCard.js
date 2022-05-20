import React, { Component } from 'react'
class XCard extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="xcardListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Card"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Card </button>
          </form>
        </div>
      </div>
    )
  }
}
export default XCard
