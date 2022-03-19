import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  // url: http://localhost:3000/clients/max/project1
  console.log(router.query); //{id: 'max', clientprojectid: 'project1'}

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
