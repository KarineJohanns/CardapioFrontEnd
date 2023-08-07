import Card from '../Card/Card';
import './cardapio.css';

const Cardapio = () => {
	return (
		<div className='category'>
			<h2>Massas</h2>
			<ul className='card-grid'>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
				<li>
					<Card />
				</li>
			</ul>
		</div>
	);
};

export default Cardapio;
