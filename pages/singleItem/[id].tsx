import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import client from "../../lib/apollo-client";

const SingleItem = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [router]);

  const getData = async () => {
    try {
      const data = await client.query({
        query: gql`
            query {
              product(id: ${router.query.id}) {
                image
                name
                id
              }
            }
          `,
      });

      if (data.data) setData(data.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  return data ? (
    <div className="mx-auto max-w-6xl  grid grid-cols-4">
      <img src={data.image} alt="" />
    </div>
  ) : null;
};

export default SingleItem;
