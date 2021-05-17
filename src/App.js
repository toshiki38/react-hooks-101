import React, { useState } from 'react';

const App = () => {
	const init = 0;
  const [count,setCount] = useState(init);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
		
	const increment2 = () => setCount((previousCount) => {return previousCount+1;});
	const decrement2 = () => setCount(previousCount => previousCount - 1);

	const reset = () => setCount(init);
	const double = () => setCount(previousCount => previousCount * 2);
	const divideBy3 = () => setCount(previousCount => {
		if (previousCount % 3 === 0){
			return previousCount / 3;
		} else {
			return previousCount;
		}});

  return (
		<>
			<div>count: {count}</div>
			<div>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
			</div>
			<div>
				<button onClick={increment2}>+1</button>
				<button onClick={decrement2}>-1</button>
			</div>
			<div>
				<button onClick={reset}>Reset</button>
				<button onClick={double}>×2</button>
				<button onClick={divideBy3}>3の倍数の時だけ3で割る</button>
			</div>
		</>
  );
}

export default App;
