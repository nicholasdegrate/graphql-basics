import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
const app = express();

const schema = new Q();

app.use(
  "/graphql",
  graphqlHTTP({
    graphql: true,
  })
);

app.listen(5001, () => console.log("running on port"));
