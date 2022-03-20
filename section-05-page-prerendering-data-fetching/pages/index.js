function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

//prepares props for your component
//ie the props param in HomePage(props)
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 'p1', title: 'Product 1' }],
    },
  };
}

export default HomePage;
