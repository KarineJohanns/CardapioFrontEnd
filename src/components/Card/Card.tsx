import { useState } from 'react';
import Button from '../Button/Button';
import ModalConfirmation from '../Modal/ModalConfirmation/modalConfirmation';
import './card.css';

interface ProdutoData {
	id: number;
	nome: string;
	descricao: string;
	precoEmCentavos: string;
	nomeCategoria: string;
	onDelete(id: number): void;
}

const Card = ({
	id,
	nome,
	descricao,
	precoEmCentavos,
	nomeCategoria,
	onDelete,
}: ProdutoData) => {
	const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

	const handleDeleteClick = () => {
		setShowConfirmDeleteModal(true);
	};

	const handleCancelDelete = () => {
		setShowConfirmDeleteModal(false);
	};

	const handleConfirmDelete = () => {
		onDelete(id);
		setShowConfirmDeleteModal(false);
	};

	return (
		<>
			<div className='card'>
				<div className='cardImage'>
					<img
						src='https://static.itdg.com.br/images/auto-auto/8374e8989ae0963c3cd4b395921718ba/macarrao-a-bolonhesa.jpg'
						alt='Imagem do prato'
					/>
				</div>
				<div className='cardInformation'>
					<div className='information'>
						<h4 className='title'>{nome}</h4>
						<h4 className='price'>
							<span>R${precoEmCentavos}</span>
						</h4>
					</div>
					<p className='description'>{descricao}</p>
					<div className='buttons'>
						<Button customClassName='btnCard' text={'Editar'} />
						<Button
							customClassName='btnCard'
							text={'Apagar'}
							onClick={handleDeleteClick}
						/>
					</div>
				</div>
			</div>
			{showConfirmDeleteModal && (
				<ModalConfirmation
					isOpen={showConfirmDeleteModal}
					onCancel={handleCancelDelete}
					onConfirm={handleConfirmDelete}
				/>
			)}
		</>
	);
};

export default Card;
