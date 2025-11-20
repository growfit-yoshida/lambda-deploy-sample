export const handler = async (event, context) => {
  console.log("Node.js Lambda invoked!");
  return {
    statusCode: 200,
    body: "Hello from Node.js Lambda!",
  };
};
