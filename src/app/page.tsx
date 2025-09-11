import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const stories = [
    { name: "Brandon", slug: "brandon", image: "/brandon.jpeg" },
    { name: "Kiki", slug: "kiki", image: "/kiki.jpeg" },
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
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={story.image}
                    alt={`${story.name}'s photo`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="64px"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {story.name}&apos;s story
                  </h2>
                  <p className="mt-2 text-gray-600">Tap to read more →</p>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Download App CTA */}
          <div className="rounded-lg bg-gray-100 p-6 shadow-md opacity-60">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg bg-gray-300 flex items-center justify-center flex-shrink-0">
                <svg 
                  className="w-8 h-8 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-500">
                  Download Our App
                </h2>
                <p className="mt-2 text-gray-400">Coming Soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
