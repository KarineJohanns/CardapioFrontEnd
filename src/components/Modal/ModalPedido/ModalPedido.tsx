import React from 'react';
import './modalPedido.css';
import Button from '../../Button/Button';
import { useState, useRef } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { BiSolidUser, BiSolidPhone } from 'react-icons/bi';
import { PiMotorcycleBold, PiPrinterFill } from 'react-icons/pi';
import { MdLocationPin } from 'react-icons/md';
import Select from 'react-select';

interface ModalProps {
	onClose(): void;
}
const options = [
	{ value: 'Pendente', label: 'Pendente' },
	{ value: 'Confirmado', label: 'Confirmado' },
	{ value: 'Enviado', label: 'Enviado' },
	{ value: 'Entregue', label: 'Entregue' },
];

const ModalPedido = ({ onClose }: ModalProps) => {
	const [selecionado, setSelecionado] = useState('');
	const modalRef = useRef(null);

	const handleSelecionarOpcao = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelecionado(event.target.value);
	};
	return (
		<ModalWrapper onClose={onClose}>
			<header className='detalheWrapper'>
				<section className='dadosPedido'>
					<section>
						<div className='detalhesWrapper'>
							<h4>Cliente</h4>
							<div>
								<div className='iconText'>
									<BiSolidUser className='icon' />
									<p>Karine</p>
								</div>
								<div className='iconText'>
									<BiSolidPhone className='icon' />
									<p>(49) 9 9995-6721</p>
								</div>
							</div>
						</div>
						<div className='detalhesWrapper'>
							<h4>Tipo de entrega</h4>
							<div className='iconText'>
								<PiMotorcycleBold className='icon' />
								<p>Para entregar</p>
							</div>
						</div>
						<div className='detalhesWrapper'>
							<h4>Endereço</h4>
							<div className='iconText'>
								<MdLocationPin className='icon' />
								<p>Rua Aimorés, 481, itaiba</p>
							</div>
						</div>
					</section>
					<section className='detalhesWrapper statusPedido'>
						<h2>Status do pedido:</h2>
						<Select options={options} className='custom-select' />
						<Button className='btnPrint'>
							<PiPrinterFill className='iconPrinter' />
							Imiprimir
						</Button>
					</section>
				</section>
				<section className='detalhesWrapper'>
					<h4>Detalhes do pedido</h4>
					<div className='detalhesPedido'>
						<table className='pedido-table'>
							<thead>
								<tr>
									<th>Qtd</th>
									<th>Descrição</th>
									<th>Preço</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>X-Burguer</td>
									<td>R$35,00</td>
								</tr>
							</tbody>
						</table>
						<table className='pedido-table'>
							<thead>
								<th>Entrega</th>
							</thead>
							<tbody>
								<td>R$35,00</td>
							</tbody>
						</table>
					</div>
				</section>
			</header>
		</ModalWrapper>
	);
};

export default ModalPedido;
