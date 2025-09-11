"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Resource {
  title: string;
  description: string;
  url?: string;
}

interface Story {
  name: string;
  image: string;
  content: string;
  howResources: Resource[];
  getInvolvedResources: Resource[];
}

const stories: Record<string, Story> = {
  brandon: {
    name: "Brandon",
    image: "/brandon.jpeg",
    content: `From Construction to College

After Brandon finished high school in 2022, he worked in construction for a few months. He really wanted to study business, but his mom couldn't afford to pay for university. His aunt knew Brandon wanted to study, so she looked for schools and found Tsiba Business School in Woodstock. She secretly got all his papers together and filled out most of his application. Then she surprised him by telling him he just needed to finish a few parts of the application.

Getting Help to Study

In 2023, Brandon started studying for a Higher Certificate in Business at Tsiba. The school told him how much it would cost, but then he got an email saying someone else had already paid for everything. He had won the Young Living Foundation scholarship because of his good grades. The scholarship pays for all his classes and gives him money each month for transport and other things he needs. When he did well in his first year, he got the scholarship again for 2024 to study for his degree.

Still Studying Today

Brandon is now in his second year (2025) and still gets help from Young Living Foundation because he keeps getting good grades. He says the most important thing was working hard in school and doing well. But he knows his aunt was the key person who helped him - without her, he wouldn't even know about Tsiba. He thinks he would still be working construction today because his family didn't have money for university. Now he's studying business like he always wanted to.
`,
    howResources: [
      {
        title: "NSFAS (National Student Financial Aid Scheme)",
        description:
          "Government bursary and loan scheme for South African students",
        url: "https://www.nsfas.org.za",
      },
      {
        title: "Young Living Foundation",
        description: "Scholarships for future leaders",
        url: "https://www.younglivingfoundation.org/leadership-fund",
      },
      {
        title: "Your Bursary Application",
        description: "Tips to submitting your bursary application",
        url: "https://www.zabursaries.co.za/tips-to-submitting-a-bursary-application/",
      },
      {
        title: "University Bursary Offices",
        description:
          "Contact your university's financial aid office for institution-specific bursaries",
      },
    ],
    getInvolvedResources: [
      {
        title: "Tsiba Education Mentorship Program",
        description: "Become a mentor for current Tsiba students like Brandon",
        url: "https://www.tsiba.ac.za/mentorship",
      },
      {
        title: "Young Living Foundation Volunteer",
        description:
          "Help review scholarship applications and support students",
        url: "https://www.younglivingfoundation.org/volunteer",
      },
      {
        title: "Local Education Support Groups",
        description:
          "Connect with community organizations supporting student success",
      },
    ],
  },
  kiki: {
    name: "Kiki",
    image: "/kiki.jpeg",
    content: `From Small Town Dreams to Community Action

Born and raised in rural Eastern Cape, Kiki never left his small town until university. He always wanted to do something meaningful for his community. In 2021, he left his auditing job to pursue farming and approached his community about using available land. The community was willing to transfer the land to his group, but when they knocked on doors asking private corporations to invest, nobody responded.

Fighting for the Vision

While the community supported the idea, some people created problems. Some wanted personal benefits, and when they couldn't see immediate gain, they turned against the project. One of the chiefs even wanted to own the entire project and started speaking badly about Kiki and his team, forcing people in his area to follow his lead. But eventually, the community turned against this chief, and even the king had to get involved to resolve the conflict.

Building Success from the Ground Up

Deciding to move forward on their own, Kiki and the Buyelembo Group started farming on just 5 hectares. Their hard work and progress caught the government's attention, who came to see what they had achieved. This led to expansion to 500 hectares with funding from the Land Bank. Today, Kiki's Buyelembo Group employs 63 permanent workers and 100 seasonal employees, all from the local community across two municipalities, proving that homegrown solutions can create real change
`,
    howResources: [
      {
        title: "SEDA (Small Enterprise Development Agency)",
        description:
          "Government agency that provides support to small businesses in South Africa",
        url: "https://www.seda.org.za",
      },
      {
        title: "SEFA (Small Enterprise Finance Agency)",
        description:
          "Government agency that provides financial assistance to small businesses in South Africa",
        url: "https://www.sefa.org.za",
      },
      {
        title: "Land Bank Development Finance",
        description: "Agricultural financing and land development support",
        url: "https://www.landbank.co.za",
      },
    ],
    getInvolvedResources: [
      {
        title: "Buyelembo Group Partnership",
        description:
          "Connect with Kiki's farming cooperative for collaboration opportunities",
      },
      {
        title: "Rural Development Volunteer Programs",
        description:
          "Support agricultural initiatives in Eastern Cape communities",
      },
      {
        title: "Agricultural Mentorship Networks",
        description: "Share expertise with emerging farmers in rural areas",
      },
    ],
  },
};

export default function StoryPage({ params }: StoryPageProps) {
  const { slug } = use(params);
  const story = stories[slug as keyof typeof stories];
  const [showResources, setShowResources] = useState<"how" | "involved" | null>(
    null
  );

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={story.image}
              alt={`${story.name}'s photo`}
              fill
              style={{ objectFit: "cover" }}
              sizes="32px"
            />
          </div>
          <span>← Back to stories</span>
        </Link>

        <article className="bg-white rounded-lg shadow-md p-6 mb-6">
          <header className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={story.image}
                  alt={`${story.name}'s photo`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="80px"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                {story.name}&apos;s Story
              </h1>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            {story.content.split("\n\n").map((paragraph, index) => {
              // Skip empty paragraphs
              if (paragraph.trim().length === 0) {
                return null;
              }

              // Check if this is a heading (single line, no periods/long sentences)
              const isHeading =
                paragraph.split("\n").length === 1 &&
                paragraph.trim().length < 50 &&
                !paragraph.includes(".") &&
                !paragraph.includes("?") &&
                !paragraph.includes("!");

              if (isHeading) {
                return (
                  <h2
                    key={index}
                    className="text-xl font-semibold text-gray-900 mt-6 mb-3"
                  >
                    {paragraph.trim()}
                  </h2>
                );
              }

              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What would you like to do?
          </h2>
          <div className="space-y-4">
            <button
              onClick={() =>
                setShowResources(
                  showResources === "involved" ? null : "involved"
                )
              }
              className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-left cursor-pointer ${
                showResources === "involved"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>I want to get involved with {story.name}</span>
                <span className="text-xl">
                  {showResources === "involved" ? "↓" : "→"}
                </span>
              </div>
            </button>

            {showResources === "involved" && (
              <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Ways to get involved:
                </h3>
                {story.getInvolvedResources.map((resource, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-900 mb-1">
                      {resource.url ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 hover:underline"
                        >
                          {resource.title}
                        </a>
                      ) : (
                        resource.title
                      )}
                    </h4>
                    <p className="text-blue-700">{resource.description}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() =>
                setShowResources(showResources === "how" ? null : "how")
              }
              className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-left cursor-pointer ${
                showResources === "how"
                  ? "bg-green-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>I want to find out how {story.name} did this</span>
                <span className="text-xl">
                  {showResources === "how" ? "↓" : "→"}
                </span>
              </div>
            </button>

            {showResources === "how" && (
              <div className="bg-green-50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-green-900 mb-3">
                  Resources {story.name} used:
                </h3>
                {story.howResources.map((resource, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-900 mb-1">
                      {resource.url ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:text-green-900 hover:underline"
                        >
                          {resource.title}
                        </a>
                      ) : (
                        resource.title
                      )}
                    </h4>
                    <p className="text-green-700">{resource.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
