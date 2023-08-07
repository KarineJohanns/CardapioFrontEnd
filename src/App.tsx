import './App.css';
import Card from './components/Card/Card';

function App() {
	return (
		<>
			<div className='container'>
				<h1 className='mainTitle'>Cardápio</h1>
				<div className='card-grid'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}

export default App;
