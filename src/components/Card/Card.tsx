import Button from '../Button/Button';
import './card.css';

function Card() {
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
						<h4 className='title'>Macarrão</h4>
						<h4 className='price'>
							<span>R$35,00</span>
						</h4>
					</div>
					<p className='description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae
						vel possimus? Recusandae atque velit saepe, laudantium pariatur,
						omnis quidem veritatis deleniti beatae dolorum molestiae, doloremque
						harum consequuntur ratione odio.
					</p>
					<div className='buttons'>
						<Button customClassName='btnCard'>Editar</Button>
						<Button customClassName='btnCard'>Apagar</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
