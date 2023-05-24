import Image from "next/image";
import { parseISO, format } from "date-fns";
import Link from "next/link";

type Props = {
  title: string;
  content: string;
  url: string;
  thumbnail: string;
  category: string;
  date: string;
  author: {
    name: string;
    photo: string;
  };
};

const Article: React.FC<Props> = ({
  title,
  content,
  url,
  thumbnail,
  category,
  date,
  author,
}) => {
  const formattedDate = format(parseISO(date), "MMM dd");

  return (
    <Link href={url}>
      <div className="border-b border-slate-200 py-8">
        <div className="flex items-center">
          <Image
            className="h-6 w-6 object-cover rounded-full mr-2"
            src={author.photo}
            alt={author.name}
            height={100}
            width={100}
          />
          <p className="font-sans text-xs text-slate-900">{author.name}</p>
          <span className="bg-slate-400 w-[2px] h-[2px] rounded-full mx-2"></span>
          <p className="font-sans text-xs text-slate-400">{formattedDate}</p>
        </div>
        <div className="flex items-center mt-3">
          <div className="mr-10">
            <h1 className="font-sans text-2xl flont-semibold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="font-serif text-slate-900 text-sm">{content}</p>
          </div>
          <Image
            className="w-32 h-32 object-cover"
            src={thumbnail}
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div className="h-6 bg-slate-200 px-3 flex items-center w-fit rounded-full mt-[27px]">
          <p className="font-sans text-slate-900 text-xs">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
