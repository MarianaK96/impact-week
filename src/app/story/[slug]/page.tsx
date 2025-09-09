import Link from "next/link";
import { notFound } from "next/navigation";

interface StoryPageProps {
  params: {
    slug: string;
  };
}

const stories = {
  fentse: {
    name: "Fentse",
    content: `Fentse's journey began in a small village in Lesotho, where access to education was limited and opportunities seemed scarce. Despite facing numerous challenges, including financial hardships and limited resources, Fentse never gave up on their dream of making a positive impact in their community.

Through determination and hard work, Fentse discovered their passion for technology and education. They started by teaching basic computer skills to local children using an old laptop donated by a charity organization. What began as informal sessions under a tree soon grew into structured classes that attracted learners of all ages.

Fentse's innovative approach to combining traditional learning methods with modern technology created a unique educational experience. They developed simple apps and games that helped students learn mathematics and literacy in their native language, making education more accessible and engaging for everyone.

Today, Fentse's initiative has grown into a thriving community learning center that serves over 200 students. Their story demonstrates that with passion, perseverance, and creativity, one person can transform an entire community and create lasting change that extends far beyond their initial vision.

The impact of Fentse's work continues to ripple through the community, inspiring others to pursue education and empowering a new generation of learners who will carry forward the torch of knowledge and innovation.`
  },
  mariana: {
    name: "Mariana",
    content: `Mariana's story is one of resilience and innovation in the face of environmental challenges. Growing up in a coastal community in Brazil, she witnessed firsthand the devastating effects of pollution on marine ecosystems and local fishing communities.

As a marine biology student, Mariana was deeply moved by the decline in fish populations and the accumulation of plastic waste in the ocean. Instead of accepting this as an inevitable reality, she decided to take action. She began organizing beach cleanups and educating local schools about marine conservation.

What started as weekend volunteer work evolved into a comprehensive environmental program. Mariana developed partnerships with local businesses, schools, and government agencies to create sustainable solutions for waste management and marine protection.

Her innovative approach included creating artificial reefs from recycled materials, establishing marine protected areas, and developing educational programs that teach children about ocean conservation through hands-on activities and interactive workshops.

Through her leadership, Mariana's community has reduced plastic waste by 40% and restored critical marine habitats. Her work has been recognized nationally, and she now mentors young environmental activists across Latin America.

Mariana's journey shows how individual passion can catalyze community-wide change and demonstrates that environmental conservation is not just about protecting nature, but about creating sustainable livelihoods and healthier communities for future generations.`
  },
  shane: {
    name: "Shane",
    content: `Shane's transformation from struggling student to community leader exemplifies the power of mentorship and second chances. Growing up in an underserved urban neighborhood, Shane faced numerous obstacles including poverty, family instability, and limited educational opportunities.

Despite these challenges, a dedicated teacher recognized Shane's potential and provided the support and encouragement needed to excel academically. This mentorship became a turning point, inspiring Shane to pursue higher education and eventually earn a degree in social work.

Understanding the importance of giving back, Shane returned to their community with a mission to provide the same type of support that had changed their own life. They established a youth mentorship program that pairs at-risk teenagers with positive role models and provides academic support, life skills training, and career guidance.

Shane's program has grown from serving 10 youth to over 150 participants annually. The initiative includes after-school tutoring, summer internships, college preparation workshops, and mental health support services. Many program graduates have gone on to attend college, secure stable employment, and become mentors themselves.

What makes Shane's approach unique is the emphasis on holistic support that addresses not just academic needs but also emotional, social, and practical life challenges. The program creates a supportive community where young people can build confidence, develop leadership skills, and envision positive futures for themselves.

Shane's story demonstrates that sometimes the most powerful way to heal from difficult circumstances is to help others facing similar challenges, creating cycles of positive change that strengthen entire communities.`
  }
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
        
        <article className="bg-white rounded-lg shadow-md p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {story.name}&apos;s Story
            </h1>
          </header>
          
          <div className="prose prose-gray max-w-none">
            {story.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'fentse' },
    { slug: 'mariana' },
    { slug: 'shane' },
  ];
}