export async function photoListLoader() {
	return await (
		await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
	).json();
}

export async function photoDetailLoader({params}) {
	return await (
		await fetch(`https://jsonplaceholder.typicode.com/photos/${params.idx}`)
	).json();
}
