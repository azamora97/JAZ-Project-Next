// ✅ Client Component — usa un useHook
"use client";
import React, { useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { Button } from "../ui/atoms";
import { Icon } from "../ui/atoms/Icon";

interface PropsHeader {
  title: string;
  description?: string;
}

export const CustomHeader = React.memo(function CustomHeader({
  title,
  description,
}: PropsHeader) {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <header className="header">
      <div className="header-image">
        <Icon />
        <h1>{title}</h1>
      </div>
      {description && <p>{description}</p>}
      <div className="header-auth">
        <Button
          onClick={handleToggleTheme}
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

            <Button
              className="button danger"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            className="button primary"
            type="button"
            onClick={() =>
              login({
                name: "Andres Zamora",
                email: "azamora@cenfotec.ac.cr",
              })
            }
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
});
