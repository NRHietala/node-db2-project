const server = require("./data/server");

const PORT = process.env.PORT || 5555;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
