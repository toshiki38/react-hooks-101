import React, { useEffect, useState } from 'react';

const App = props => {
	const [state, setState] = useState(props)
	const {name, price} = state

	useEffect(() => {
		console.log('This is like componentDidMount or componentDidupdate.')
	})

	useEffect(() => {
		console.log('this is like componentdidmount.')
	},[])

	useEffect(() => {
		console.log('this callback is for name only.')
	},[name])

	const renderPeriod = () => {
		console.log('renderPeriod renders period.')
		return '。'
	}

  return (
		<>
			<p>現在の{state.name}は、{state.price}円です{renderPeriod()}</p>
			<button onClick={() => setState({...state, price:price + 1})}>+1</button>
			<button onClick={() => setState({...state, price:price - 1})}>-1</button>
			<button onClick={() => setState(props)}>Reset</button>
			<input value={name} onChange={e => setState({...state, name: e.target.value})}/>
		</>
  );
}

App.defaultProps = {
	name:'サンプル',
	price: 1000
}

export default App;
