function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

//only execs on the server after deployment but its not statically generated
export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Max',
    },
  };
}

export default UserProfilePage;
