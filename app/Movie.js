import Link from "next/link"
import Image from "next/image"

const Movie = ({title, id, poster_path, release_date}) => {
    const imagepath = "https://image.tmdb.org/t/p/original"
  return (
    <div> 
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={`/${id}`}>
        <Image src={imagepath + poster_path} width={800} height={800} alt={title}/>
        </Link> 
    </div>
  )
}

export default Movie

