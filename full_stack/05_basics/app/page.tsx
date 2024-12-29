import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      This is Home page.
      <Link href={"/signup"}>
        <button>SignUp</button>
      </Link>
      <Link href={"/signup"}>
        <button>SignIn</button>
      </Link>
    </div>
  );
}
