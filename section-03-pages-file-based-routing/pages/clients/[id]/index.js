import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); //{id: 'max'}

  function loadProjectHandler() {
    //load data...
    // router.push('/clients/max/projecta');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projectA' },
    });
    //router.replace('/clients/max/projecta'); //this means we cant go back after
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
