import { fetchData } from "@/utils/fetchData";


interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostIds {
  params: Promise<{
    postIds: string[];
  }>;
}

type TPostArray = IPosts[];

export default async function BlogPosts({ params }: IPostIds) {
  const postIds = (await params).postIds;
  const posts: TPostArray = await Promise.all(
    postIds.map((postId: string) => fetchData(postId))
  );


  return (
    <>
      <div className="flex justify-center items-center min-h-screen gap-5">
        {posts.map((postContent: IPosts) => (
          <div
            key={postContent.id}
            className="border border-gray-300 shadow-md rounded-md w-80 h-full py-3"
          >
            <h1 className="m-2">
              <b className="text-green-500">Title:</b> {postContent.title}
            </h1>
            <p className="m-2">
              <b className="text-blue-500">Description:</b> {postContent.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
