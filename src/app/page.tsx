import Link from "next/link";

export default function Home() {
  const stories = [
    { name: "Fentse", slug: "fentse" },
    { name: "Mariana", slug: "mariana" },
    { name: "Shane", slug: "shane" },
    { name: "James", slug: "james" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md">
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
