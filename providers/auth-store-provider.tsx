"use client";

import { createAuthStore, type AuthStore } from "@/stores/auth-store";
import { createContext, useContext, useRef,  } from "react";
import { useStore } from "zustand";

type AuthStoreApi = ReturnType<typeof createAuthStore>;

const AuthStoreContext = createContext<AuthStoreApi | null>(null);

export const AuthStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AuthStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const store = useContext(AuthStoreContext);
  if (!store) {
    throw new Error("useAuthStore must be used inside AuthStoreProvider");
  }
  return useStore(store, selector);
};
