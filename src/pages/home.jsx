import React from 'react';

import Input from '@/components/Input'
import List from '@/components/List'
import { Z_DATA_ERROR } from 'zlib';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          toDoList: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(text) {
      let newItem = {
        text,
        key: new Date()
      }
        let toDoList = [...this.state.toDoList, newItem];
        this.setState({
            toDoList
        });
    }
    render() {
      return (
        <div className="home">
            <Input addList={this.handleChange}></Input>
            <List list={this.state.toDoList} ></List>
        </div>
      );
    }
  }
export default Home;