import { DataSource } from "typeorm"
import { Parent } from "./entities/Parent" 
import { ChildOne } from "./entities/ChildOne"

export default  new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "dev",
    entities: [Parent,ChildOne],
    logging: true,
    synchronize: false,
})

