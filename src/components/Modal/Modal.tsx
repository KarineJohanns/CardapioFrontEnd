import React, { useEffect, useState } from 'react';
import './modal.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ModalWrapper from './ModalWrapper';
import { produtoData } from '../../interface/ProdutoData';
import Select from '../Input/Select';
import { useCategoriaData } from '../../hooks/useCategoriaData';
import { useProdutoDataMutate } from '../../hooks/UseProdutoDataMutate';

interface ModalProps {
	onClose(): void;
}

const Modal = ({ onClose }: ModalProps) => {
	const [nome, setNome] = useState('');
	const [preco, setPreco] = useState(0);
	const [nomeCategoria, setNomeCategoria] = useState('');
	const [descricao, setDescricao] = useState('');

	const handleSelectChange = (value: string) => {
		console.log(value);
		setNomeCategoria(value);
	};
	const { data } = useCategoriaData();

	const {
		mutate,
		isSuccess,
		isLoading: postButtonLoading,
	} = useProdutoDataMutate();

	const criarNovoProduto = () => {
		const produtoData: produtoData = {
			nome,
			descricao,
			preco,
			nomeCategoria,
		};
		handleSelectChange(nomeCategoria);
		console.log(produtoData);
		mutate(produtoData);
	};

	useEffect(() => {
		if (!isSuccess) return;
		onClose();
	}, [isSuccess]);

	return (
		<ModalWrapper onClose={onClose}>
			<div className='input-grid'>
				<Input label='Produto' value={nome} updateValue={setNome} />
				<Input label='Preço' value={preco} updateValue={setPreco} />
				<Select
					label='Categoria'
					value={nomeCategoria}
					data={data}
					updateValue={setNomeCategoria}
				/>
				<Input label='Descrição' value={descricao} updateValue={setDescricao} />
				<Input label='Imagem' value='' />
			</div>
			<Button
				text='Criar'
				onClick={criarNovoProduto}
				isLoading={postButtonLoading}
			/>
		</ModalWrapper>
	);
};

export default Modal;
