import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Article from "./components/Article";
import Category from "./components/Category";

export default function Home() {
  const categories = [...Array(10)].map((_, index) => {
    return {
      id: index + 1,
      slug: "technology",
      name: "Technology",
    };
  });

  const articles = [...Array(5)].map((_, index) => {
    return {
      id: index + 1,
      title: "Learning Redux",
      slug: "how-to-learn-redux",
      content:
        "Lorem ipsum dolor sit amet consectetur. Enim eget id diam ullamcorper tellus tortor odio pulvinar orci. Nulla vulputate ultricies in adipiscing sit at tincidunt. Dui a arcu eu enim cras sit. Sed sit leo vitae tincidunt at arcu tincidunt viverra......",
      thumbnail: "/images/image.png",
      category: "Technology",
      date: "2023-05-30 16:00:00",
      author: {
        name: "Rusdy Masykuri",
        photo: "images/people.svg",
      },
    };
  });
  return (
    <div>
      <Head>
        <title>Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-[720px] mx-auto py-24">
        <div className="mb-16">
          <p className="font-sans text-slate-900 text-sm mb-4">Your Categories</p>
          <div className="flex flex-wrap gap-3">
          {categories.map((category) => 
          <Category key={category.id} label={category.name}/>)}
          </div>
          
        </div>
        {articles.map((article) => (
          <Article
            key={article.id}
            url={`/articles/${article.slug}`}
            title={article.title}
            content={article.content}
            thumbnail={article.thumbnail}
            category={article.category}
            date={article.date}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
}
