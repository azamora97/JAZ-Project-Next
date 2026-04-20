// ✅ Server Component — solo renderiza HTML
export const Text = ({ children }: { children: React.ReactNode }) => {
  return <p className="text">{children}</p>;
};
