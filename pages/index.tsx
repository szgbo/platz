import { Command } from 'cmdk'
import getPosts from './api/getPosts'
import React from 'react';

import InfiniteCanvas from '../components/infiniteCanvas'
import HomePage from '../components/homePage'

// import Dock from '../components/dock';

function CommandMenu({ posts: allPosts }: { posts: any }) {
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const downHandler = (e: any) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open);
      }
    }
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])
  // return a command menu with all posts in pages/posts
  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu" className='fixed top-0 left-0 right-0 m-auto w-[45vw] mt-[20vh] bg-slate-600 p-4 rounded-lg'>
      <Command.Input className='w-full bg-slate-600 rounded-lg border p-1 border-solid border-black mb-2' autoFocus placeholder="Search for posts..." />
      <Command.List className='text-white'>
        <Command.Empty >No results found.</Command.Empty>
        {/* create an item for every post */}
        {allPosts.map((post: any) => (
          <Command.Item key={post.link} className='m-2 '><a href={`/posts/${post.link}`}>{post.title}</a></Command.Item>
        ))}
      </Command.List>
    </Command.Dialog>
  )
}

export default function Home({ allPosts }: any) {
  // infinite canvas is a higher order component that takes a component as an argument
  const InfiniteContent = InfiniteCanvas(HomePage)
  // position and zoom values are arbitrary and serve as placeholders
  return (
    <div>
      <CommandMenu posts={allPosts} />
      <InfiniteContent x={0} y={0} zoom={1}/>
    </div>
  )
}

// fetch all posts from pages/posts
export async function getStaticProps() {
  // use getPosts api to get all posts
  const posts = getPosts()
  // map all posts to get their titles and names
  const allPosts = posts.map((post: any) => {
    const component = require(`./posts/${post}`)
    return {
      link: post.replace('.tsx', ''),
      title: component.title,
    }
  })
  return {
    props: { allPosts },
  }
}