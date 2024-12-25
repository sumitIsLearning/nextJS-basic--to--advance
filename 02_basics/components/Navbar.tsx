import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border border-gray-300 p-6 mb-2 flex justify-between">
      This is global layout
      <div className="flex gap-3">
        <a href={"/auth/signIn"}>
          <Button className="border border-gray-300 shadow-md">signIn</Button>
        </a>

        <a href={"/"}>
          <Button className="border border-gray-300 shadow-md">Home</Button>
        </a>
      </div>
    </header>
  );
}
