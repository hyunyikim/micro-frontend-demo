import React from 'react';

import './App.css';
import {useCallback, useEffect, useMemo} from 'react';
const MFA_PHOTO_HOST = import.meta.env.VITE_MFA_PHOTO_HOST;

interface Props {
	name: string;
}

function MicroFrontend({name}: Props) {
	console.log('render MicroFrontend ', name);

	const mfaContainer = useMemo(() => `${name}-container`, [name]);

	useEffect(() => {
		window.microFrontendContainer = true;

		console.log('call MicroFrontend useEffect', name, mfaContainer);
		const scriptId = `micro-frontend-script-${name}`;

		if (document.getElementById(scriptId)) {
			console.log('script existed');
			renderMicroFrontend();
			return;
		}

		fetch(`${MFA_PHOTO_HOST}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				const manifestFile = manifest?.files['main.js'];

				const script = document.createElement('script');
				script.id = scriptId;
				script.crossOrigin = '';
				script.src = `${MFA_PHOTO_HOST}${manifestFile}`;
				document.head.appendChild(script);

				script.onload = () => {
					renderMicroFrontend();
				};
			});

		return () => {
			window.microFrontendContainer = false;
			window[`unmount${name}`] && window[`unmount${name}`](mfaContainer);
		};
	}, [name, mfaContainer]);

	const renderMicroFrontend = useCallback(() => {
		window[`render${name}`] && window[`render${name}`](mfaContainer);
	}, [name, mfaContainer]);

	return <div id={`${name}-container`}></div>;
}

export default React.memo(MicroFrontend);
