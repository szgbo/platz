// an api to fetch all file names in the posts directory

import fs from 'fs'
import path from 'path'

export default function getPosts() {
    // const postsDirectory = path.join(process.cwd(), 'posts')
    const dirRelativePath = 'posts'
    const postsDirectory = path.resolve('./pages', dirRelativePath)
    const fileNames = fs.readdirSync(postsDirectory)
    // res.status(200).json(fileNames)
    return fileNames
}