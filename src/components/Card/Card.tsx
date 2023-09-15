import Button from '../Button/Button';
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
							onClick={() => onDelete(id)}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
