import Link from "next/link";
import { notFound } from "next/navigation";

interface StoryPageProps {
  params: {
    slug: string;
  };
}

const stories = {
  eric: {
    name: "Eric",
    content: `Growing up in a small township outside Cape Town, I watched my mother work multiple jobs just to keep food on our table and a roof over our heads. University felt like an impossible dream – something meant for other people's children, not for someone like me whose family counted every rand twice. When I finished matric with distinctions in Mathematics and Physical Science, the acceptance letters felt bittersweet because I knew we simply couldn't afford the fees, accommodation, or even the textbooks. I remember sitting at our kitchen table, staring at the University of Cape Town acceptance letter, feeling like I was holding someone else's future in my hands.

    Everything changed when my teacher told me about bursaries and encouraged me to apply, even though the deadlines were approaching fast. I spent sleepless nights filling out applications, writing motivation letters, and gathering documents I never knew existed. When I received that life-changing phone call telling me I'd been awarded a full bursary covering tuition, accommodation, meals, and even a monthly allowance for personal expenses, I couldn't stop crying. Now, three years into my Engineering degree, I'm not just surviving at university – I'm thriving. I've joined societies, taken on leadership roles, and maintained academic excellence, all because someone believed that financial circumstances shouldn't determine a person's potential.

    If you're reading this and facing similar financial challenges, please don't give up on your dreams. South Africa offers numerous bursary opportunities through the National Student Financial Aid Scheme (NSFAS), private companies, foundations, and universities themselves. Start by visiting the NSFAS website, speak to your school's career guidance counselor, and research bursaries specific to your field of interest. Many applications open as early as August for the following year, so start early and apply widely. Remember, your current circumstances don't define your future – there are people and organizations ready to invest in your potential. Your story of success could be the next one inspiring someone else to keep pushing forward.`,
    resources: [
      {
        title: "NSFAS (National Student Financial Aid Scheme)",
        description:
          "Government bursary and loan scheme for South African students",
        url: "https://www.nsfas.org.za",
      },
      {
        title: "Bursary Motivational Letters",
        description: "How to write a bursary motivational letter",
        url: "https://www.zabursaries.co.za/how-to-write-a-bursary-motivational-letter/",
      },
      {
        title: "Your Bursary Application",
        description: "Tips to submitting your bursary application",
        url: "https://www.zabursaries.co.za/tips-to-submitting-a-bursary-application/",
      },
      {
        title: "How to get free education in South Africa",
        description:
          "Contact your university's financial aid office for institution-specific bursaries",
        url: "https://www.zabursaries.co.za/how-to-get-free-education-in-south-africa/",
      },
      {
        title: "University Bursary Offices",
        description:
          "Contact your university's financial aid office for institution-specific bursaries",
      },
    ],
  },
};

export default function StoryPage({ params }: StoryPageProps) {
  const story = stories[params.slug as keyof typeof stories];

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to stories
        </Link>

        <article className="bg-white rounded-lg shadow-md p-6 mb-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {story.name}&apos;s Story
            </h1>
          </header>

          <div className="prose prose-gray max-w-none">
            {story.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {story.resources && story.resources.length > 0 && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-4">
              {story.resources.map((resource, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {resource.url ? (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {resource.title}
                      </a>
                    ) : (
                      resource.title
                    )}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ slug: "eric" }];
}
