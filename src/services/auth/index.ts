import { CredencialLogin } from "@/types/credencial";
import { api } from "../api/api";

export async function login(credenciais: CredencialLogin) {
  return api.post("/authentication", credenciais);
}
