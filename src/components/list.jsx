import React from 'react';

class List extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <ul className="list-group">
            {this.props.list.map((item) => <li className="list-group-item" key={item.key}>{item.text}</li>) }
        </ul>
      );
    }
  }
export default List;