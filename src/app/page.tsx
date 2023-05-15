import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  const articles = [...Array(4)].map((_, index) => {
      return {
        id: index+1,
        title: "Learning Redux",
        content: "Lorem ipsum dolor sit amet consectetur. Enim eget id diam ullamcorper tellus tortor odio pulvinar orci. Nulla vulputate ultricies in adipiscing sit at tincidunt. Dui a arcu eu enim cras sit. Sed sit leo vitae tincidunt at arcu tincidunt viverra......",
        thumbnail: null,
        category: "Technology",
        date:"2023-05-30 16:00:00", 
        author:{
          name:"Rusdy Masykuri",
          photo:null
        }

      }
  })
  return (
    <div>
      <Head>
        <title>Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="w-[720px] mx-auto py-24"></div>
    </div>
  );
}
