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
        <div className={'fixed inset-0 justify-center items-center transition-all ' + (open ? 'backdrop-blur-sm bg-white/30 z-[60]' : '-z-[100]')}>
            <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu" className={'fixed z-[80] inset-0 block w-[60vw] max-h-[50vh] justify-center m-auto bg-gray-800 p-4 rounded-lg overflow-hidden '}>
                <Command.Input autoFocus placeholder="Search for posts..." className="absolute border-none w-full text-lg p-5 outline-none text-white border-b-[1px] bg-gray-800 rounded-none m-0 placeholder:text-gray caret-slate-600 h-[15%]" />
                <Command.List className={'absolute bottom-0 block w-full ml-auto mr-auto overflow-y-scroll h-[80%] overscroll-contain select-none text-base text-white items-center py-2'}>
                    <Command.Empty className='mx-[2%] px-[1%] text-center'>No results found.</Command.Empty>
                    {/* create an item for every post */}
                    {allPosts.map((post: any) => (
                        <Command.Item
                        key={post.link}
                        className='mx-[2%] px-[1%] rounded-lg h-12 text-lg flex items-center gap-3 py-4 text-white select-none transition-all duration-150 ease-in-out relative aria-selected:bg-slate-500 hover:cursor-pointer'
                        onSelect={() => window.location.href = `/posts/${post.link}`}>
                                {post.title}
                        </Command.Item>
                    ))}

                </Command.List>
            </Command.Dialog>
        </div>
    )
}