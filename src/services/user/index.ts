import { User, PayloadUser } from "@/types/user";
import { AxiosResponse } from "axios";
import { api } from "../api/api";

const baseUrl = "/users";

export class UserService {
  static async post(data: PayloadUser): Promise<AxiosResponse<User>> {
    return api.post(baseUrl, {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      status: data?.status,
      permissao: data?.permissao
    });
  }

  static async update(id: number, data: PayloadUser): Promise<AxiosResponse<User>> {
    return api.put(baseUrl + `/${id}`, data);
  }

  static async getById(id: number): Promise<AxiosResponse<User>> {
    return await api
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  static async get(id: number): Promise<AxiosResponse<User>> {
    return await api
      .get(`/pessoas`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
}