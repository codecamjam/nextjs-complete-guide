import { useState, useEffect } from 'react';
import useSWR from 'swr';

//useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    'https://nextjs-course-c067e-default-rtdb.firebaseio.com/sales.json',
    fetcher
  );

  async function fetcher(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return response.json();
  }

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to Load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // return fetch(
  //   'https://nextjs-course-c067e-default-rtdb.firebaseio.com/sales.json'
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const transformedSales = [];

  //     for (const key in data) {
  //       transformedSales.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }

  //     return {
  //       props: { sales: transformedSales },
  //       revalidate: 10,
  //     };
  //   });

  const response = await fetch(
    'https://nextjs-course-c067e-default-rtdb.firebaseio.com/sales.json'
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedSales },
    // revalidate: 10,
  };
}

export default LastSalesPage;
