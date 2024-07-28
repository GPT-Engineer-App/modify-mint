import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const blogPosts = [
  {
    title: "The Future of AI in Healthcare",
    description: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment planning.",
    image: "/ai-healthcare.png"
  },
  {
    title: "AI and Ethics: Navigating the Challenges",
    description: "Discussing the ethical considerations and potential societal impacts of advanced AI systems.",
    image: "/ai-ethics.png"
  },
  {
    title: "Machine Learning: Powering Next-Gen Applications",
    description: "An overview of how machine learning algorithms are driving innovation across various industries.",
    image: "/machine-learning.png"
  }
];

const BlogSection = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Latest AI Insights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;