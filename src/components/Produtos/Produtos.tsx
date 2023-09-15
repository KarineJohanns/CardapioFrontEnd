import { useState } from 'react';
import Categoria from '../Categoria/Categoria';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useCategoriaData } from '../../hooks/useCategoriaData';

const Produtos = () => {
	const { data } = useCategoriaData();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen((prev) => !prev);
	};
	return (
		<>
			<div>
				{data?.map((categoriaData) => (
					<Categoria
						key={categoriaData.nomeCategoria}
						nome={categoriaData.nomeCategoria}
					/>
				))}
			</div>
			<Button
				className='btnNew'
				onClick={() => handleOpenModal()}
				text='Novo'
			/>
			{isModalOpen && <Modal onClose={handleOpenModal} />}
		</>
	);
};

export default Produtos;
