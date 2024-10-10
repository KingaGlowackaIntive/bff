export default $config({
  app(input) {
    return {
      name: "aws-lambda-stream",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const fn = new sst.aws.Function("MyFunction", {
      url: true,
      streaming: true,
      timeout: "15 minutes",
      handler: "index.handler",
    });

    return {
      url: fn.url,
    };
  },
});
