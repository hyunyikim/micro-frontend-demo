import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import App from './App';
import MicroFrontend from './MicroFrontend';

const VITE_MFA_PHOTO_HOST = import.meta.env.VITE_MFA_PHOTO_HOST;

const MfaPhoto = () => {
	return <MicroFrontend name="Photo" />;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MfaPhoto />,
			},
			{
				path: '/:idx',
				element: <MfaPhoto />,
			},
		],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
