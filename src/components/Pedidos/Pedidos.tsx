import Pedido from '../Pedido/Pedido';
import './pedidos.css';
const Pedidos = () => {
	return (
		<>
			<div className='pedidos'>
				<div className='pedidosList'>
					<div className='pendentes status'>
						<h2>Pendentes</h2>
						<Pedido />
					</div>
					<div className='confirmados status'>
						<h2>Confirmados</h2>
						<Pedido />
					</div>
					<div className='enviados status'>
						<h2>Enviados</h2>
						<Pedido />
					</div>
					<div className='entregues status'>
						<h2>Entregues</h2>
						<Pedido />
					</div>
				</div>
			</div>
		</>
	);
};
export default Pedidos;
