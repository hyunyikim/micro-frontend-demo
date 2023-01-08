import {useLoaderData, Link} from 'react-router-dom';

export default function PhotoList() {
	const photoList = useLoaderData();
	return (
		<main
			style={{
				padding: '20px',
			}}>
			<h2>PhotoList</h2>
			{photoList?.map((photo) => (
				<Photo key={photo.id} data={photo} />
			))}
		</main>
	);
}

const Photo = ({data}) => {
	return (
		<Link to={`/${data.id}`}>
			<div>
				<h4>{data.title}</h4>
				<img src={data.thumbnailUrl} />
				<hr />
			</div>
		</Link>
	);
};
