import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return { props: { loadedProduct: product } };
}

//the goal of this function is tell nextjs which instances of
//this dynamic page should be generated
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'p1' } }, //we want to prerender this
      //{ params: { pid: 'p2' } }, //dont want to pregenerate
      //{ params: { pid: 'p3' } }, //dont want to pregenerate
    ],
    fallback: true, //tell nextjs that even pages not listed here
    //can be valid values that should be loaded when they are visited
    //they arent pregenerted they are instead generated
    //when a request reaches the server

    //BUT THE PROBLEM IS YOU CANT REACH THOSE OTHER ID ROUTES IF YOU
    //NAVIGATE TO THEM VIA THE URL INSTEAD OF A LINK
    //so need to add a guard in the component above

    //fallback: 'blocking'
    //this will wait until all data is loaded first
    //if you use fallback: blocking, you don't need to add the above guard
  };
}

export default ProductDetailPage;
