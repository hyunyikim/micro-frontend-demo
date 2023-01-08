import {Outlet} from 'react-router-dom';

import Header from './Header';

function App() {
	return (
		<main className="App">
			<Header />
			<Outlet />
		</main>
	);
}

export default App;
