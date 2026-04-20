// ✅ Client Component — usa un useHook
"client component";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { Button } from "../ui/atoms";

interface PropsHeader {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: PropsHeader) => {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <div className="header-auth">
        <Button
          onClick={toggleTheme}
          type="button"
          className="relative w-20 h-9 rounded-full transition-all duration-300
                 bg-gray-300 dark:bg-gray-800 shadow-inner"
        >
          <div
            className={`absolute top-1 left-1 w-7 h-7 rounded-full transition-transform duration-300 shadow-md
            ${theme === "dark" ? "translate-x-11 bg-blue-500" : "translate-x-0 bg-yellow-400"}`}
          />

          <div
            className={`absolute inset-0 rounded-full transition-opacity duration-300 ${theme === "dark" ? "bg-blue-500/10" : "bg-yellow-400/10"}`}
          />
        </Button>

        {isAuthenticated ? (
          <>
            <span>{user?.name}</span>

            <Button className="button danger" type="button" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button
            className="button primary"
            type="button"
            onClick={() =>
              login({ name: "Andres Zamora", email: "azamora@cenfotec.ac.cr" })
            }
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
};
