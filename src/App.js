import React from 'react';
import { CartList } from './components/index'
export default class App extends React.Component{
  render(){
    return(
        <div>
          <CartList  store={this.props.store}/>
        </div>
    )
  }
}