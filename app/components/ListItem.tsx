import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'
type Props = {
    post: BlogPost
}

export default function ListItem({post}: Props) {
    const {id,title,date} = post
    const formattedDate = getFormattedDate(date)
  return (
    <div>
        <li className="mt-4 text-2xl text-white/90">
            <Link className="underline hover:text-black/70 hover:text-blue-300 text-white " href={`/post/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1 text-white">{formattedDate}</p>
        </li>
    </div>
  )
}