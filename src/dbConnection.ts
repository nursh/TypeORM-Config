import { createConnection } from "typeorm";


export async function getConnection() {
  const connection = await createConnection();
  return connection;
}
