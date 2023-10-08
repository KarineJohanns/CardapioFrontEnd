import React, { useEffect, useState } from 'react';
import './modal.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ModalWrapper from './ModalWrapper/ModalWrapper';
import { produtoData } from '../../interface/ProdutoData';
import SelectOption from '../Input/Select';
import { useCategoriaData } from '../../hooks/categoria/useCategoriaData';
import { useProdutoDataMutate } from '../../hooks/produto/UseProdutoDataMutate';
import { useCategoriaMutate } from '../../hooks/categoria/useCategoriaMutate';

interface ModalProps {
	onClose(): void;
}

const Modal = ({ onClose }: ModalProps) => {
	const [nome, setNome] = useState('');
	const [preco, setPreco] = useState<number | undefined>(undefined);
	const [nomeCategoria, setNomeCategoria] = useState('');
	const [descricao, setDescricao] = useState('');
	const [novaCategoria, setNovaCategoria] = useState('');

	const handleSelectChange = (value: string) => {
		if (value === 'Nova categoria') {
			setNovaCategoria('');
		}
		setNomeCategoria(value);
	};
	const { data, refetchCategoriaData } = useCategoriaData();

	const {
		mutate,
		isSuccess,
		isLoading: postButtonLoading,
	} = useProdutoDataMutate();

	const { mutate: mutateCategoria } = useCategoriaMutate();

	const criarNovaCategoria = async () => {
		try {
			await mutateCategoria(novaCategoria);
		} catch (error) {
			console.error('Erro ao adicionar nova categoria: ', error);
		}
	};

	const criarNovoProduto = async () => {
		if (nomeCategoria === 'Nova categoria' && novaCategoria.trim() === '') {
			console.error('Nome da nova categoria não pode estar vazio.');
			return;
		}

		let categoriaSelecionada = nomeCategoria;

		if (nomeCategoria === 'Nova categoria') {
			await criarNovaCategoria();
			categoriaSelecionada = novaCategoria;
		}
		console.log(categoriaSelecionada);

		const produtoData: produtoData = {
			nome,
			descricao,
			preco: preco || 0,
			nomeCategoria: categoriaSelecionada,
		};

		handleSelectChange(nomeCategoria);
		mutate(produtoData);
	};

	useEffect(() => {
		if (!isSuccess) return;
		onClose();
		refetchCategoriaData();
	}, [isSuccess]);
	useEffect(() => {}, [data]);

	return (
		<ModalWrapper onClose={onClose}>
			<div className='input-grid'>
				<Input label='Nome' value={nome} updateValue={setNome} />
				<Input label='Preço' value={preco} updateValue={setPreco} />
				<SelectOption
					label='Categoria'
					value={nomeCategoria}
					data={data}
					updateValue={setNomeCategoria}
				/>
				{nomeCategoria === 'Nova categoria' && (
					<Input
						label='Nova categoria'
						value={novaCategoria}
						updateValue={setNovaCategoria}
						placeholder='Digite uma nova categoria'
					/>
				)}
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
