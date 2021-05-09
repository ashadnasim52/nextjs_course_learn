import path from 'path';
import fs from 'fs';

const ProductDetail = ({ product }) => {
	if (!product) {
		return <p>Loading.... </p>;
	}
	return (
		<div>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
		</div>
	);
};

async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFileSync(filePath);
	const data = JSON.parse(jsonData);

	return data;
}

export default ProductDetail;
export const getStaticProps = async (ctx) => {
	const { params } = ctx;
	const { pid } = params;

	const { products } = await getData();
	console.log(products);

	const product = products.find((prod) => prod.id === pid);
	return {
		props: {
			product,
		},
		notFound: true,
	};
};

export const getStaticPaths = async () => {
	const { products } = await getData();
	console.log(products);

	const ids = products.map((prod) => prod.id);
	const path = ids.map((id) => ({
		params: { pid: id },
	}));
	return {
		paths: path,
		fallback: true, // fallback is set to false because we already know the slugs ahead of time
	};
};
