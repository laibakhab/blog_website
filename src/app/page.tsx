

import Link from 'next/link';
import Image from 'next/image';
import { posts } from './data/posts';


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8  min-h-screen">

      <h1 className="text-4xl font-bold mb-4 text-black text-center">Welcome to Car Blog Website!!!!</h1>
      <h1 className="text-base  mb-8 text-gray-500 text-center">
      Cars are one of the most significant inventions in modern history, revolutionizing transportation and mobility. They are motor vehicles designed for transporting passengers, typically powered by internal combustion engines or, increasingly, by electric motors.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover  "
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
