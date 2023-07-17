'use client'
// import ToastAnimated, { showToast } from "components/molecules/Toast";
import { useRouter , usePathname} from "next/navigation";
import { useEffect } from "react";
import { localStorageToken } from "@/utils/constants";

import { api } from "./api";

const AxiosInterceptor = () => {
  const apis = [api];
  const router = useRouter();
  const path = usePathname()?.split("?")[0];

  useEffect(()=>{
    if (path !== "/") {
      const localToken = !!localStorage && localStorage.getItem(localStorageToken);

      if(!localToken) {
        router.push("/");
      }
    }
  }, [])

  useEffect(() => {
    const localToken = localStorage.getItem(localStorageToken);
    if (path !== "/") {
      apis.forEach((api) => {
        let token: string;

        if (localToken) {
          token = localToken.replaceAll('"', "");
        }

        api.interceptors.request.use((config: any) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        });

        api.interceptors.response.use(
          (response) => {
            return response;
          },
          (error) => {
            if (error.response?.status === 403) {
              // showToast({
              //   type: "error",
              //   message: "Sessão expirada Realize novamente o login",
              // });
              // <ToastAnimated />;
              router.push("/");
              return;
            }

            return Promise.reject(error);
          }
        );
      });
    }
  }, [path]);
  return <> </>;
};

export { AxiosInterceptor };
