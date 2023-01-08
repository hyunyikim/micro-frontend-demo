export async function photoListLoader() {
	return await (
		await fetch(`https://jsonplaceholder.typicode.com/photos`)
	).json();
}

export async function photoDetailLoader({params}) {
	console.log('params', params);
	return await (
		await fetch(`https://jsonplaceholder.typicode.com/photos/${params.idx}`)
	).json();
}
