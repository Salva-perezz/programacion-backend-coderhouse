import axios from "axios";

const graphqlMutation = {
  operationName: "createPersona",
  query: `mutation createPersona {
    createPersona(datos: { nombre: "Salva", edad: 20 }) {
      id
      nombre
      edad
    }
  }`,
};

const graphqlQuery = {
  operationName: "queryPepe",
  query: `query queryPepe {
        getPersona(id: "ae87ad7822479f3d9594") {
            nombre
            edad
            id
        }
    }`,
};

const options = {
  url: "http://localhost:3000/graphql",
  method: "POST",
  data: graphqlQuery,
};

const response = await axios(options);

console.log(response.data.data);
