const Profile = ({ data }) => {
	return (
		<div>
			Profile
			<h1>{data}</h1>
		</div>
	);
};

export default Profile;

export const getServerSideProps = async (ctx) => {
	return {
		props: {
			data: 'MAX',
		},
	};
};
