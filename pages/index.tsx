import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  const { data, loading, error, fetchMore } = useQuery(gql`
    query {
      products {
        id
        name
        image
      }
    }
  `);

  return (
    <div className="mx-auto max-w-6xl  grid grid-cols-4">
      {data?.products.map((item) => {
        return (
          <Link key={item.id} href={`/singleItem/${item.id}`}>
            <div className="h-56 w-50 m-2 rounded-md overflow-hidden shadow-md hover:shadow-xl  cursor-pointer transition-all ">
              <img
                className="rounded-md w-full object-cover mb-2 h-2/3"
                src={item.image}
                alt=""
              />
              <h1 className={"mx-2"}>{item.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
