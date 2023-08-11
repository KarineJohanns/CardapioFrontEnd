import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	useNavigate,
} from 'react-router-dom'; // Importe o componente Link
import Produtos from './components/Produtos/Produtos';
import Pedidos from './components/Pedidos/Pedidos';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<h1 className='mainTitle'>Cardápio</h1>
					<nav>
						<ul className='tab-navigation'>
							<li>
								<NavLink to='/pedidos' className='tab-link'>
									Pedidos
								</NavLink>
							</li>
							<li>
								<NavLink to='/produtos' className='tab-link'>
									Produtos
								</NavLink>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route path='/produtos' element={<Produtos />} />
						<Route path='/pedidos' element={<Pedidos />} />
						{/* Página inicial */}
						<Route index element={<RedirectToPedidos />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

function RedirectToPedidos() {
	return <RouteRenderRedirect to='/pedidos' />;
}

// Função de redirecionamento para ser usada como renderização condicional
function RouteRenderRedirect({ to }) {
	const navigate = useNavigate();
	React.useEffect(() => {
		navigate(to);
	}, [navigate, to]);

	return null;
}

export default App;
