import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import {photoListLoader, photoDetailLoader} from './loader';

import PhotoList from './PhotoList';
import PhotoDetail from './PhotoDetail';

const router = createBrowserRouter([
	{
		path: '/',
		loader: photoListLoader,
		element: <PhotoList />,
	},
	{
		path: '/:idx',
		loader: photoDetailLoader,
		element: <PhotoDetail />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
