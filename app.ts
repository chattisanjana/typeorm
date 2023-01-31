import * as express from "express";
import { Request, Response } from "express";
// import { User } from "./entity/User"
import { Parent } from "./entities/Parent";
import { ChildOne } from "./entities/ChildOne";
import myDataSource from "./app-data-source";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get("/parent", async function (req: Request, res: Response) {
  try {
    console.log(Parent);

    const users = await myDataSource.getRepository(Parent).find();
    res.json(users);
  } catch (error) {
    console.log(error);

    res.send("error");
  }
});

app.get("/insert", async function (req: Request, res: Response) {
  const user = await myDataSource
    .getRepository(Parent)
    .insert({ parentId: 2, pName: "TEST" });
  const results = await myDataSource.getRepository(Parent).save(new Parent);
  return res.send(results);
});

// app.put("/users/:id", async function (req: Request, res: Response) {
//     const user = await myDataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     myDataSource.getRepository(User).merge(user, req.body)
//     const results = await myDataSource.getRepository(User).save(user)
//     return res.send(results)
// })

// app.delete("/users/:id", async function (req: Request, res: Response) {
//     const results = await myDataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })

// start express server
app.listen(3000);
