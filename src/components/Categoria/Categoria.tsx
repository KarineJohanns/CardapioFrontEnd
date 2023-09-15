import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import './categoria.css';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useCategoriaData } from '../../hooks/useCategoriaData';
import { deleteProdutoData } from '../../hooks/UseProdutoDataMutate';

interface CategoriaProps {
	nome: string;
}

const Categoria = ({ nome }: CategoriaProps) => {
	const { data } = useCategoriaData();
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

	const handleDeleteProduto = async (id) => {
		try {
			await deleteProdutoData(id);
		} catch (error) {
			console.error(`Erro ao excluir o produto com o id: ${id}`, error);
		}
		console.log(`Excluindo o produto com o ID: ${id}`);
	};

	return (
		<div className='category'>
			<div className='category-header' onClick={toggleMostrarProdutos}>
				<h2>{nome}</h2>

				<BiSolidRightArrow
					className={`seta ${mostrarProdutos ? 'aberta' : 'fechada'}`}
				/>
			</div>
			<div
				className={`produtos ${mostrarProdutos ? 'visible' : ''}`}
				style={{ maxHeight: `${alturaProdutos}px` }}
				ref={produtosRef}>
				<ul className='card-grid'>
					{data?.map((categoriaData) =>
						categoriaData.nomeCategoria === nome
							? categoriaData.produtos.map((produto) => (
									<li key={produto.id}>
										<Card
											nome={produto.nome}
											precoEmCentavos={(produto.preco / 100).toFixed(2)}
											descricao={produto.descricao}
											onDelete={() => handleDeleteProduto(produto.id)}
										/>
									</li>
							  ))
							: null
					)}
				</ul>
			</div>
		</div>
	);
};

export default Categoria;
