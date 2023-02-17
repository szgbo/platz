import { Command } from 'cmdk'
import React from 'react';

export default function CommandMenu() {
    const fileNames = process.env.cmdk

    const fileNamesArray = JSON.parse(JSON.stringify(fileNames))

    const allPosts = fileNamesArray.map((post: any) => {
        const component = require(`../pages/posts/${post}`)
        return {
            link: post.replace('.tsx', ''),
            title: component.title,
        }
    })
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
        const downHandler = (e: any) => {
            if (e.key === 'k' && e.metaKey || e.key === 'k' && e.ctrlKey) {
                e.preventDefault();
                setOpen((open) => !open)
            } else if (e.key === 'Escape') {
                setOpen(false)
            }
        }
        window.addEventListener('keydown', downHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    }, [])
    return (
        <div className={'fixed inset-0 justify-center items-center ' + (open ? 'backdrop-blur-sm bg-white/30 z-[100]' : '-z-[100]')}>
            <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu" className={'fixed z-[100] inset-0 block w-[640px] max-w-[90vw] min-h-[300px] max-h-[40vh] justify-center m-auto bg-zinc-800 p-4 rounded-lg overflow-hidden'}>
                <Command.Input autoFocus placeholder="Search for posts..." className="absolute w-full text-lg px-5 py-3 outline-none text-white bg-zinc-800 rounded-none m-0 placeholder:text-gray caret-cyan-600" />
                <Command.List className={'border-t-[1px] border-zinc-700 pt-0 mt-0 absolute bottom-0 block w-full ml-auto mr-auto overflow-y-scroll h-[85%] overscroll-contain select-none text-base text-white items-center py-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800'}>
                    <Command.Empty className='mx-[2%] px-[1%] py-4 text-center font-sans'>No results found.</Command.Empty>
                    {/* create an item for every post */}
                    {allPosts.map((post: any) => (
                        <Command.Item
                            key={post.link}
                            className='font-sans z-[99] px-[2%] h-12 flex items-center gap-3 py-4 text-white select-none transition-all duration-150 ease-in-out relative border-l-4 border-transparent aria-selected:bg-zinc-900 aria-selected:border-cyan-500 hover:cursor-pointer'
                            onSelect={() => window.location.href = `/posts/${post.link}`}>
                            {post.title}
                        </Command.Item>
                    ))}

                </Command.List>
            </Command.Dialog>
        </div>
    )
}