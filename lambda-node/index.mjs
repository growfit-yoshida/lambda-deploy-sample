export const handler = async (event, context) => {
  console.log("Node.js Lambda invoked!");
  return {
    statusCode: 200,
    body: "Hello from Node.js Lambda!",
  };
};

// ローカル実行用
if (process.argv[1] === new URL(import.meta.url).pathname) {
  (async () => {
    const res = await handler({ foo: "bar" }, null);
    console.log(res);
  })();
}
