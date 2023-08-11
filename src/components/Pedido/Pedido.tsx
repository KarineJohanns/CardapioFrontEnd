import React, { useState } from 'react';
import './pedido.css';
import ModalPedido from '../Modal/ModalPedido';
import { MdLocationPin } from 'react-icons/md';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';

const Pedido = () => {
	const [selecionado, setSelecionado] = useState('');

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div className='pedidoCard' onClick={() => handleOpenModal()}>
			<div className='pedidoCardData'>
				<h1>Nome do cliente</h1>
				<p>Data e hora do pedido</p>
				<div className='addressDelivery'>
					<MdLocationPin className='icon' />
					<p>Endereço de entrega</p>
				</div>
				<div className='addressDelivery'>
					<GiFullMotorcycleHelmet className='icon' />
					<p> Motoboy</p>
				</div>
			</div>
			{/* Numero do pedido */}
			<h1>123</h1>
			{isModalOpen && <ModalPedido onClose={handleOpenModal} />}
		</div>
	);
};

export default Pedido;
