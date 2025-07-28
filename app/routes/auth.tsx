import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => ([
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" },
])

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const Navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) Navigate(next);
  }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
          <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Welcome</h1>
              <p className="text-gray-600">Log In to Continue to Your Job Journey</p>
            </div>
            <div>
              {isLoading ? (
                <button className="auth-button animate-pulse">Sign you in...</button>
              ) : (
                <>
                  {auth.isAuthenticated ? (
                    <button className="auth-button" onClick={auth.signOut}>
                      <p>Log Out</p>
                    </button>
                  ) : (
                    <button className="auth-button" onClick={auth.signIn}>
                      <p>Log In</p>
                    </button>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
    </main>
  )
}

export default Auth