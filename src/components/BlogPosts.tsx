import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    category: "BCS Preparation",
    title: "10 Tips to Crack BCS Preliminary in First Attempt",
    excerpt: "Expert strategies and time management techniques...",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    image: blog2,
    category: "Study Guide",
    title: "How to Create an Effective Study Schedule for Government Jobs",
    excerpt: "A step-by-step guide to planning your preparation...",
    date: "Jan 12, 2026",
    readTime: "7 min read",
  },
  {
    image: blog3,
    category: "Exam Strategy",
    title: "Why Previous Year Questions are Your Best Resource",
    excerpt: "Understanding the importance of practicing past papers...",
    date: "Jan 10, 2026",
    readTime: "4 min read",
  },
];

const BlogPosts = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow-text">STUDY MATERIALS & TIPS</p>
            <h2 className="section-heading">Latest from Our Blog</h2>
          </div>
          <a
            href="/blog"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-base font-semibold text-navy mt-2 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground/70 mt-4">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8">
          <a href="/blog" className="text-sm font-semibold text-primary">
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
