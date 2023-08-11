import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import './categoria.css';
import { BiSolidRightArrow } from 'react-icons/bi';

const Categoria = () => {
	const [mostrarProdutos, setMostrarProdutos] = useState(false);
	const produtosRef = useRef(null);
	const [alturaProdutos, setAlturaProdutos] = useState(0);

	const toggleMostrarProdutos = () => {
		setMostrarProdutos(!mostrarProdutos);
		if (produtosRef.current) {
			if (!mostrarProdutos) {
				setAlturaProdutos(produtosRef.current.scrollHeight);
			} else {
				setAlturaProdutos(0);
			}
		}
	};
	return (
		<div className='category'>
			<div className='category-header' onClick={toggleMostrarProdutos}>
				<h2>Massas</h2>

				<BiSolidRightArrow
					className={`seta ${mostrarProdutos ? 'aberta' : 'fechada'}`}
				/>
			</div>
			<div
				className={`produtos ${mostrarProdutos ? 'visible' : ''}`}
				style={{ maxHeight: `${alturaProdutos}px` }}
				ref={produtosRef}>
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
		</div>
	);
};

export default Categoria;
