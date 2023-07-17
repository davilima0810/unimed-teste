import { useContext } from "react";
import { AuthContext } from "@/context/auth";

function useDataAuth(): any {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { useDataAuth };
