import { fetchData } from "@/utils/fetchData";

export default async function BlogPost({
  params,
}: {
  params: Promise<{
    postId: string;
  }>;
}) {
  const postId = (await params).postId;
  const postContent = await fetchData(postId);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 shadow-md rounded-md w-80  py-3">
        <h1 className="m-2">
          <b className="text-green-500">Title:</b> {postContent.title}
        </h1>
        <p className="m-2">
          <b className="text-blue-500">Description:</b> {postContent.body}
        </p>
      </div>
    </div>
  );
}

// Note: one thing to notice , if you don't define a structured type for params and use any type ,then you have to await the params , because params is a promise. But if you define a structured type await will not have any effect on the params , and you will get and error in the console saying await is needed , but the app works without it.
