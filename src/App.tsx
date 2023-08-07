import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Cardapio from './components/Cardapio/Cardapio';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen((prev) => !prev);
	};
	return (
		<>
			<div className='container'>
				<h1 className='mainTitle'>Cardápio</h1>
				<Cardapio />
			</div>
			<Button>Novo</Button>
		</>
	);
}

export default App;
