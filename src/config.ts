import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);
const {
  Port,
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB_TEST,
  BCRTPT_PASSWORD,
  SLART_ROUNDS,
  TOKEN_SECRET,
} = process.env;
export default {
  port: Port,
  database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_TEST,
  host: POSTGRES_HOST,
  dbport: POSTGRES_PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  pepper: BCRTPT_PASSWORD,
  salt: SLART_ROUNDS,
  token: TOKEN_SECRET,
};
