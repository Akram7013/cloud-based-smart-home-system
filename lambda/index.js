exports.handler = async (event, context) => {
  console.log("Received event:", event);

  return {
    statusCode: 200,
    body: "received event"
  };
};
