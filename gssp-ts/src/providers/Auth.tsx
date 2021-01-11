import React, { ReactNode, ReactElement, useEffect } from 'react';

type AuthContext = {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuthenticated: () => {}
});

/**
 * The initial value of `isAuthenticated` comes from the `authenticated`
 * prop which gets set by _app. We store that value in state and ignore
 * the prop from then on. The value can be changed by calling the
 * `setAuthenticated()` method in the context.
 */
export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [isAuthenticated, setAuthenticated] = React.useState<boolean>(false);
  useEffect(() => {
    async function checkAuth() {
      const response = await fetch('/api/checkAuth');
      if (response.status === 200) {
        try {
          const data = await response.json();
          if (data.auth) {
            setAuthenticated(true);
          }
        } catch(e) {
          // do nothing
        }
      }
    }
    checkAuth();
  })
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContext {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated(): boolean {
  const context = useAuth();
  return context.isAuthenticated;
}
