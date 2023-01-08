import {useLoaderData, Link} from 'react-router-dom';

export default function PhotoDetail() {
	const data = useLoaderData();

	return (
		<div>
			<h2>PhotoDetail</h2>
			<div>
				<h4>{data.title}</h4>
				<img src={data.thumbnailUrl} />
			</div>
			<Link to={-1}>Go back</Link>
		</div>
	);
}
