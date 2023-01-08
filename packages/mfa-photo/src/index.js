import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('mfa-photo', window.microFrontendContainer);

// mfa로 접근
if (window.microFrontendContainer) {
	window.renderPhoto = (containerId, history) => {
		const root = ReactDOM.createRoot(document.getElementById(containerId));
		root.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	};

	window.unmountPhoto = (containerId) => {
		const root = ReactDOM.createRoot(document.getElementById(containerId));
		root.unmount();
	};
} else {
	// 직접 접근
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
