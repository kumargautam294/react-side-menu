import './App.css'
import React from 'react'

const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const messages = [
	'Past & Future',
	'Product Mindset',
	'Freezing Requirements',
	'Design Drafts',
	'Coding I',
	'Coding II',
	'Production Readiness',
	'Finishing Touches',
	'Refining Resume',
	'Mocks',
]

const App = () => {
	const [msg, setMsg] = React.useState(messages[0])
	function handleClick(e, w) {

		setMsg(messages[w - 1])
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
								class='btn btn-success w-100 rounded-0 border'
								onClick={(e) => handleClick(e, w)}
							>
								{`Week ${w}`}
							</div>
						)
					})}
				</div>
				<div className='content'>
					{' '}
					<WeekComponent value={msg} />
				</div>
			</div>
		</>
	)
}

function WeekComponent(props) {
	return (
		<div>
			<h1>{props.value}</h1>
		</div>
	)
}

export default App
