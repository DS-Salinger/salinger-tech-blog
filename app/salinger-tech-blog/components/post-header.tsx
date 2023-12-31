import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: {
    url: string,
    width: number,
    height: number
  }
  date: string
  author: Author
  tags: string[]
}

const convertTagToPath = (tag: string): string => {
  switch (tag) {
    case "Data Science":
      return "ds";
    case "NLP":
      return "nlp";
    case "Architecture":
      return "arch";
    case "Other":
      return "other";
    default:
      return "other";
  }
}

const PostHeader = (
  { title, coverImage, date, author, tags }: Props
) => {
  const tagButtons = tags.map((tag) =>
    <button className="bg-mygray/20 text-white m-1
		       text:lg rounded px-1 py-1
		       shadow-md"
	    disabled
	    key={tag}>
      {tag}
    </button>
  )

  return (
    <div className="grid grid-cols-2
		    sm:w-full md:w-[58rem]
		    p-6">
      <div className="col-span-2 
		      justify-self-center place-item-center
		      pt-4 pb-2 mb-8">
        <CoverImage title={title}
		    src={coverImage.url}
		    width={coverImage.width}
		    height={coverImage.height}/>
      </div>
      <div className="col-span-2 text-xl">
	<Link href="/"
	      passHref legacyBehavior>
	  <a className="hover:underline">Home</a>
	</Link>
        &nbsp; / &nbsp; 
        <Link href={"/" + convertTagToPath(tags[0])}
	      passHref legacyBehavior>
	  <a className="hover:underline">{tags[0]}</a>
	</Link>
      </div>
      
      <div className="grid col-span-2 -mb-4">
	<PostTitle>{title}</PostTitle>
      </div>
      
      <div className="flow-root col-span-2 pb-6">
	{tagButtons}
      </div>

      <div className="mb-6 col-span-2 md:col-span-1 p-2">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="flex pb-0 md:pb-6 
		      m-2
		      -mt-4 md:mt-0
		      -mb-6 md:mb-0
		      text-xl md:text-xl col-span-2 md:col-span-1
		      items-center justify-end">
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostHeader
