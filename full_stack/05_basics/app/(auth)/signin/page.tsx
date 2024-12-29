export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 px-6 py-10 shadow-md rounded-md flex flex-col justify-center items-center gap-5">
        <input
          className="bg-transparent p-3 border border-gray-100 rounded-md"
          type="text"
          placeholder="username"
        />
        <input
          className="bg-transparent p-3 border border-gray-100 rounded-md"
          type="password"
          placeholder="password"
        />
        <button className="border border-gray-300 shadow-sm px-8 py-3 m-2 w-full rounded">
          SignIn
        </button>
      </div>
    </div>
  );
}
