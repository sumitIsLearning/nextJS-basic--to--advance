import { Button } from "@/components/ui/button";

export default function AuthNav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {children}
      <footer className="border border-gray-300 p-6 mb-2 flex justify-between">
        This is a sublayout
        <a href="/todos">
          <Button className="border border-gray-300 shadow-md">Todos</Button>
        </a>
      </footer>
    </div>
  );
}
