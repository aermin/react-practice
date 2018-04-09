import React, {Component} from 'react';
import {increment, decrement, reset} from '../../redux/actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
	render() {
		return (<div>
			<div>当前计数为{this.props.counter.count}</div>
			<button onClick={() => this.props.increment()}>自增
			</button>
			<button onClick={() => this.props.decrement()}>自减
			</button>
			<button onClick={() => this.props.reset()}>重置
			</button>
		</div>)
	}
}

//把redux的state，转为组件的Props
const mapStateToProps = (state) => {
	return {counter: state.counter}
};

//分发actions的方法，转为Props属性函数。
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		reset: () => {
			dispatch(reset())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
