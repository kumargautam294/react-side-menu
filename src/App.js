import './App.css';
import React from 'react'

import Week1Component from './components/Week1';
import Week2Component from './components/Week2';
import Week3Component from './components/Week3';
import Week4Component from './components/Week4';
import Week5Component from './components/Week5';
import Week6Component from './components/Week6';
import Week7Component from './components/Week7';
import Week8Component from './components/Week8';
import Week9Component from './components/Week9';
import Week10Component from './components/Week10';

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
	const [week, setWeek] = React.useState(1)
	function handleClick(e, w) {
		const value = e.target.innerText
		setWeek(w)
	}
	return (
		<>
			<div className='brand'>
				<h1>Pesto Ninja Training</h1>
			</div>

			<div className='App'>
				<div className='sidebar'>
					{weeks.map((w) => {
							return (
								<div
									className='btn btn-warning w-100 rounded-0 border border-success py-3'
									onClick={(e) => handleClick(e, w)}
								>
									{`Week ${w}`}
								</div>
							)
						})
					}
				</div>
				<div className='content'>
					{' '}
					<WeekComponent value={week} />
				</div>
			</div>
		</>
	)
}

function WeekComponent(props) {
	return (
		<>
			{props.value == 1 && <Week1Component/> }
			{props.value == 2 && <Week2Component/> }
			{props.value == 3 && <Week3Component/> }
			{props.value == 4 && <Week4Component/> }
			{props.value == 5 && <Week5Component/> }
			{props.value == 6 && <Week6Component/> }
			{props.value == 7 && <Week7Component/> }
			{props.value == 8 && <Week8Component/> }
			{props.value == 9 && <Week9Component/> }
			{props.value == 10 && <Week10Component/> }
		</>
	)
}

export default App;
