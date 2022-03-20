import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
  const { loadedProduct } = props;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

//for dynamic routes we need to tell nextjs which instances of dynamic pages should be regenerated
//dynamic pages dont just need data: we also need to know which [id] values will be available
//so long story short we need to use getStaticPaths

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return { props: { loadedProduct: product } };
}

export default ProductDetailPage;
