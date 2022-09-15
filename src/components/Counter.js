import React from "react";

const { useState } = React;

function Counter() {
	const [counter, setCounter] = useState(0);

	const resetCounter = () => {
		setCounter(0);
	};

	const onButtonClick = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<button onClick={() => onButtonClick()}>click me</button>
			<button onClick={() => resetCounter()}>Reset</button>

			<h1>Current Count:{counter}</h1>
		</div>
	);
}

export default Counter;
