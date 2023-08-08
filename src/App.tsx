import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Cardapio from './components/Cardapio/Cardapio';
import Modal from './components/Modal/Modal';

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
			<Button className='btnNew' onClick={() => handleOpenModal()}>
				Novo
			</Button>
			{isModalOpen && <Modal onClose={handleOpenModal} />}
		</>
	);
}

export default App;
