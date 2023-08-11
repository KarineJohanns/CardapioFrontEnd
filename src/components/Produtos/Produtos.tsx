import { useState } from 'react';
import Categoria from '../Categoria/Categoria';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Produtos = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen((prev) => !prev);
	};
	return (
		<>
			<div>
				<Categoria />
				<Categoria />
				<Categoria />
			</div>
			<Button className='btnNew' onClick={() => handleOpenModal()}>
				Novo
			</Button>
			{isModalOpen && <Modal onClose={handleOpenModal} />}
		</>
	);
};

export default Produtos;
