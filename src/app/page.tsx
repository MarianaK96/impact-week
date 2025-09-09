import Link from "next/link";

export default function Home() {
  const stories = [
    { name: "Fentse", slug: "fentse" },
    { name: "Mariana", slug: "mariana" },
    { name: "Shane", slug: "shane" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-5xl font-bold text-white bg-amber-400 p-4 rounded-full">
          Impact Week Stories
        </h1>

        <div className="space-y-4">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/story/${story.slug}`}
              className="block rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {story.name}&apos;s story
              </h2>
              <p className="mt-2 text-gray-600">Tap to read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
