import { Command } from 'cmdk'
import styles from '../styles/cmdk.module.scss'
import React from 'react';

// export default function CommandMenu({ posts: allPosts }: { posts: any }) {
export default function CommandMenu() {
    const fileNames = process.env.cmdk

    const allPosts = fileNames.map((post: any) => {
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
                setOpen((open) => !open);
            }
        }
        window.addEventListener('keydown', downHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    }, [])
    return (

        <Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu" className={`absolute w-[60vw] justify-center z-[80] mt-[30vh] ml-[20vw] bg-gray-800 p-4 rounded-lg`}>
            <Command.Input autoFocus placeholder="Search for posts..." className="border-none w-full text-lg p-5 outline-none text-white border-b-[1px] bg-gray-800 rounded-none m-0 placeholder:text-gray caret-slate-600" />
            <Command.Separator />
            <Command.List className={`${styles.cmdk}`}>
                <Command.Empty className={`${styles.cmdk}`}>No results found.</Command.Empty>
                {/* create an item for every post */}
                {allPosts.map((post: any) => (
                    <Command.Item key={post.link} className={`${styles.cmdk}`}><a href={`/posts/${post.link}`}>{post.title}</a></Command.Item>
                ))}
            </Command.List>
        </Command.Dialog>

        // </div>
    )
}