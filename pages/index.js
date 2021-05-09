import path from 'path';
import fs from 'fs';
import Link from 'next/link';
const HomePage = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<li key={product.id}>
					<Link href={`/products/${product.id}`}>{product.title}</Link>
				</li>
			))}
		</ul>
	);
};

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	console.log(filePath);
	const jsonData = await fs.readFileSync(filePath);
	console.log(jsonData);
	const { products } = JSON.parse(jsonData);
	console.log(products);
	return {
		props: {
			products,
		},
		// notFound: true,
		// redirect: {
		// 	destination: '/home',
		// },
	};
}

export default HomePage;
