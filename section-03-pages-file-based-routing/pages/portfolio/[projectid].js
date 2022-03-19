import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // [projectid].something {projectid: 'something'}

  //if it was an id, we could send a request to some server
  //to fetch teh piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
