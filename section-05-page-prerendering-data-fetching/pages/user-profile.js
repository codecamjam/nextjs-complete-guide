function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

//context in getServerSideProps gets access to req/res object
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req);
  console.log(res);
  return {
    props: {
      username: 'Max',
    },
  };
}

export default UserProfilePage;
