import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Product {
    id: ID
    createdAt: String
    updatedAt: String
    name: String
    price: String
    description: String
    currency: String
    editorId: Int
    active: Boolean
    adminId: Int
    image: String
    rating: String
  }

  type Query {
    products: [Product]
    product(id: Int): Product
  }
`;
