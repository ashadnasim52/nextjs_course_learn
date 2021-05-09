const User = ({ uid }) => {
	return (
		<div>
			USer
			<h1>User iD is {uid}</h1>
		</div>
	);
};

export default User;

export const getServerSideProps = async (ctx) => {
	console.log('Server side code.....');
	const { params } = ctx;

	const { uid } = params;

	return {
		props: {
			uid,
		},
	};
};
