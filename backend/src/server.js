import  app  from "./app.js";

const PORT = process.env.PORT||3300;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

