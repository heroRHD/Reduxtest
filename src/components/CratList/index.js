import React, { Component } from 'react';
import {increment,decrement } from '../../actions/cart'
export default class CartList extends Component {
    constructor(){
        super()
        this.state= {
            cartList : []
        }
    }

    getstate = () => {
        this.setState({
            cartList:this.props.store.getState().cart
        })
    }

    // 挂载完毕的时候 获取数据放到state中
    componentDidMount(){
        this.getstate()
        this.props.store.subscribe(this.getstate)
    }

    render() {
        // console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 将获取到的数据渲染到页面上 */}
                    {
                        this.state.cartList.map( item => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.store.dispatch(decrement(item.id))
                                        }}>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => {
                                            this.props.store.dispatch(increment(item.id))
                                        }}>+</button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}