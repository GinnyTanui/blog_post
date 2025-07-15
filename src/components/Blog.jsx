import React, { useEffect, useState } from "react";
import Image from '../images/pexels-divinetechygirl-1181263.jpg';
import Image2 from '../images/downloadfrontend.png';

const BlogPost = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-white font-sans">
      {/* SEO Meta Tags */}
      <head>
        <title>What is Frontend Development? | Dev Academy Blog</title> 
        <meta name="google-site-verification" content="VJn41jZ3Wcf9mohAgW_hRKk4BHxjhK6lc9gCFDohnWg" />
        <meta name="description" content="Learn what frontend development is, why it's essential in Kenya, and how to start with tools, mindset, and resources." />
        <meta name="keywords" content="Frontend Development Kenya, HTML CSS JavaScript, Web Development, Dev Academy" />
      </head>

      {/* Title */}
      <h1 className="text-4xl font-extrabold leading-tight mb-6 text-center">
        What is Frontend Development? <br className="hidden md:block" />
        <span className="text-blue-600">A Beginner’s Guide to Learning Web Development in Kenya</span>
      </h1>
      <p className="text-sm text-gray-500 text-center mb-6">⏱️ 6 min read · Last updated: July 14, 2025</p>

      {/* Image */}
      <div className="mb-6">
        <img
          src={Image}
          alt="Illustration of a person working on frontend web development in Kenya, showcasing tools like HTML, CSS, and JavaScript."
          className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
        />
        <p className="text-center text-sm text-gray-500 mt-2">
          Image: A representation of a Kenyan developer learning frontend technologies
        </p>
      </div>

      {/* Sticky Table of Contents */}
      <nav className="sticky top-0 bg-white py-4 z-10 border-b border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-2">Jump to:</h3>
        <ul className="flex flex-wrap gap-4 text-blue-600 text-sm">
          <li><a href="#introduction" className="hover:underline">Introduction</a></li>
          <li><a href="#what-is-frontend" className="hover:underline">What is Frontend Development?</a></li>
          <li><a href="#why-frontend-kenya" className="hover:underline">Why Frontend Matters in Kenya</a></li>
          <li><a href="#how-to-start" className="hover:underline">How to Start Learning</a></li>
          <li><a href="#tools" className="hover:underline">What You Need to Succeed</a></li>
          <li><a href="#conclusion" className="hover:underline">Conclusion</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="introduction" className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <p>There are many in-demand tech skills in Kenya, and one of the most popular is frontend development.</p>
        <p>Frontend development is the art of creating visually appealing and user-friendly websites using languages such as HTML, CSS, and JavaScript — especially great for beginners starting their tech journey.</p>
        <p>In this blog post, you’ll learn what frontend development is, why it matters, and some practical steps to help you break into it, even if you’re starting from scratch.</p>
      </section>

      <section id="what-is-frontend" className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">What is Frontend Development?</h2>
        <p>Frontend development is the process of building the parts of a website that users interact with directly — the layout, colors, buttons, images, and overall design.</p>
        <p>It involves using tools and programming languages like HTML (for structure), CSS (for styling), and JavaScript (for interactivity) to bring websites to life.</p>
        <p>As a frontend developer, your job is to make sure a website not only looks good but also works well on different devices like phones, tablets, and laptops.</p>
        <p>It's a great skill for beginners because you can actually see what you're building in real time, which makes learning both fun and motivating.</p>
      </section>

      <section id="why-frontend-kenya" className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">Why Frontend Development is a Great Skill in Kenya</h2>
        <p>With the rise of tech and digital jobs in Kenya, frontend development has become one of the most valuable skills to learn. You can freelance as a developer, work remotely for global companies, or even build your own tech startup.</p>
        <p>It also offers great career opportunities — why? Because most businesses and brands in Kenya today need websites for visibility, to enhance their services, showcase what they’re selling, and connect with customers online. You can even build personal projects to practice and show off your skills.</p>
        <p>The best part is, you don’t need a degree to get started. There are plenty of free resources online like YouTube tutorials, and you can also join coding programs or bootcamps like ALX, Moringa School, or even Dev Academy right here in Kenya.</p>
      </section>

      <section id="how-to-start" className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">How to Start Learning Frontend Development</h2>
        <p>Starting to learn frontend development in Kenya is not a complicated process, No background experience is needed and you might be surprised that you can actually start with a laptop, stable internet connection and the right resources. You can actually start by learning the basics, that is HTML for structuring the webpage, CSS for styling and Javascript to make things interactive. Each of these takes time to understand and that’s okay there is no need to rush.</p>
        <p>There are many great resources available online. YouTube is a goldmine for tutorials — one of my favorite channels is Bro Code. Platforms like FreeCodeCamp offer free beginner courses, and MDN Web Docs provides high-quality documentation to help deepen your coding knowledge.</p>
        <p>If you prefer structured learning, there are also coding bootcamps in Kenya such as Dev Academy, Moringa School, and ALX, where you'll find supportive communities and mentors to help you grow.</p>
        <p>And as you start and embark on this journey, know there will be tough moments but do not give up. Keep on practicing daily with small projects and know that its consistency that helps you grow as a frontend developer not speed.</p>
      </section>

      {/* Tools Setup Image */}
      <div className="mb-8">
        <img
          src={Image2}
          alt="Essential tools for frontend development including VS Code, Chrome browser, and a basic laptop setup"
          className="w-full rounded-lg shadow-md object-cover h-64 md:h-80"
        />
        <p className="text-center text-sm text-gray-500 mt-2">Image: Tools and environment setup for beginner frontend developers in Kenya</p>
      </div>

      <section id="tools" className="mb-10 space-y-4">
        <h2 className="text-2xl font-bold">What You Really Need to Succeed as a Frontend Developer in Kenya</h2>
        <p>Some of the tools you’ll need to succeed include a laptop or desktop (it doesn’t need to be fancy), a stable internet connection, a code editor like VS Code, and a browser like Chrome — these are more than enough to get you started.</p>
        <p>But tools alone aren’t enough. Mindset is key. Focus on growth, not perfection, and have grit — because there will be tough times. One thing that has helped me personally is curiosity. Real developers are always asking why things work the way they do. If you're curious about what code does and how tools work, that curiosity will set you apart.</p>
        <p>Be consistent. That’s how I’ve improved — from writing basic code to designing beautiful interfaces and even exploring SEO through blog writing like this.</p>
        <p>And don’t learn alone. Find communities on Discord, WhatsApp, or Twitter to stay motivated, ask questions, and stay accountable.</p>
        <p>Most importantly, have patience. This is a journey — and not just any journey, but one worth taking.</p>
      </section>

      <section id="conclusion" className="mb-16 space-y-4">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p>Frontend development is a powerful and practical skill — especially in Kenya, where digital jobs are on the rise. It’s beginner-friendly, flexible, and something you can start learning today with just a laptop, internet, and the right mindset.</p>
        <p>Throughout this blog, we’ve talked about what frontend development is, why it matters, and how you can get started — from learning HTML, CSS, and JavaScript, to building projects and joining local coding communities.</p>
        <p>Remember, everyone starts somewhere. You don’t need to have it all figured out. Just be consistent, stay curious, and keep showing up. That’s what matters.</p>
        <p>If you’ve been thinking about learning how to code, this is your sign — start small, explore free resources, and take your first step into tech. Your future self will thank you.</p>
      </section>

      {/* Footer CTA */}
      <footer className="border-t pt-8 mt-12 text-center text-gray-600 text-sm">
        <p className="mb-2">Written by <span className="font-semibold">Ginny — Frontend Developer & Tech Writer</span></p>
        <p>Learn with me or explore Dev Academy to get started with frontend skills in Kenya.</p> 
         <p className="mt-6 text-sm text-gray-500">Follow me on 
        <a href="https://x.com/TanuiGinny?t=d5AS5hTK8j-NUppKY6x_nw&s=09" className="text-blue-600 hover:underline ml-1">Twitter</a> or 
        <a href="https://www.linkedin.com/in/ginny-tanui-5228162b5"className="text-blue-600 hover:underline ml-1">LinkedIn</a>.
        </p>


        <div className="mt-4">
          <a href="http://devacademy-ruby.vercel.app/" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">Start Learning with Dev Academy</a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          ↑ Top
        </button>
      )}
    </article>
  );
};

export default BlogPost;
