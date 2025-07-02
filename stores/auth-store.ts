import { createStore } from "zustand/vanilla";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

export type AuthActions = {
  login: (user: User) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

const defaultState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const createAuthStore = (initState: AuthState = defaultState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    login: (user) => set({ user, isLoggedIn: true }),
    logout: () => {
      fetch("/api/logout", { method: "POST" });
      set({ user: null, isLoggedIn: false });
    },
    checkAuth: async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();
        if (data?.loggedIn) {
          set({ isLoggedIn: true, user: data.user });
        } else {
          set({ isLoggedIn: false, user: null });
        }
      } catch (err) {
        console.error("Auth Check Failed", err);
        set({ isLoggedIn: false, user: null });
      }
    },
  }));
};
