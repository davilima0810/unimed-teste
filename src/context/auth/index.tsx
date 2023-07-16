'use client';
import { useRouter } from "next/navigation";
import React, { createContext } from "react";
import useStorage from "@/hooks/storage/useStorage";
import { localStorageAplicationData, localStorageToken } from "@/utils/constants";

export const AuthContext = createContext({} as any);

type StateProviderProps = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: StateProviderProps) => {
  const router = useRouter();
  const [dataToken, setDataToken, removeDataToken] =
    useStorage(localStorageToken);

  const [data, setData, removeData] = useStorage(localStorageAplicationData)

  function logout() {
    removeDataToken();
    removeData();
    router.push("/");
  }
  return (
    <AuthContext.Provider
      value={{
        data,
        setData,
        removeData,
        dataToken,
        setDataToken,
        removeDataToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
