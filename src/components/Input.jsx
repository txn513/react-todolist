import React from 'react';

class Input extends React.Component {
    constructor() {
      super();
      this.state = {
        value: ''
      };
      this.handleChange = this.handleChange.bind(this);      
      this.handleAdd = this.handleAdd.bind(this);      
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleAdd(event){
      event.preventDefault()
      this.props.addList(this.state.value)
      this.setState({value: ''});
    }
    render() {
      return (
        
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleAdd}>Go!</button>
          </span>
        </div>
      );
    }
  }
  export default Input;