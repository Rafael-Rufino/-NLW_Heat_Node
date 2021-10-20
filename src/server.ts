import { serverHttp } from "./app";

serverHttp.listen(3333, () =>
  console.log("🚀 Server is runniing on port 3333")
);
