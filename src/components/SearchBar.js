import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  onInputChange = e => {
    this.setState({ term: e.target.value })
  }

  onSubmitForm = e => {
    e.preventDefault()
  }

  render () {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onSubmitForm}>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
