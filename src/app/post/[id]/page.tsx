import Image from 'next/image'
import Link from 'next/link'

import { posts } from '../../data/posts'
import Comments from "../../components/comments"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    
    <div className="min-h-screen  bg-gray-600 ">
      <div className="container mx-auto pl-[330px] pt-[30px] pb-[30px]">
        <Link href="/" className="text-white hover:underline mb-4 inline-block">&larr; Back to Home</Link>
        <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden w-[600px] ">
          <Image src={post.imageUrl} alt={post.title} width={1200} height={600} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <p className="mb-8 text-gray-600">{post.content}</p>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  )
}