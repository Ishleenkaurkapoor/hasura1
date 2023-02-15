const endpoint = "https://flexible-crane-33.hasura.app/v1/graphql";
const headers = {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'yS76VgCSYUUVU1gygn14sQ0Q1t5h1NhYDZTS5sXueHjolz2TpeutL3Bkb4iAa46k'
};
const graphqlQuery = {
    "operationName": "MyQuery",
    "database_name":"public",
    "query": `query MyQuery {
        user {
          id
          mobile
          name
          role_id
        }
      }
      `,
    "variables": {}
};

const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(graphqlQuery)
};

async function fetchData(){
    const response = await fetch(endpoint, options);
    const data = await response.json();

    console.log(data.data); // data
    console.log(data.errors); //  
}

fetchData();