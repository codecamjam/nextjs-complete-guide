import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//prepares props for your component
//ie the props param in HomePage(props)
export async function getStaticProps(context) {
  console.log('regenerating');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    //we dont have a no data route but this is how you'd do it
    return { redirect: { destination: '/no-data' } };
  }

  if (data.products.length === 0) {
    return { notFound: true }; //404 error if true
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
