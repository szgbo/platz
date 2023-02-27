// an api to fetch all file names in the posts directory

const fs = require('fs')
const path = require('path')


module.exports = {
    getPosts: () => {
        const dirRelativePath = 'posts'
        const postsDirectory = path.resolve('./pages', dirRelativePath)
        const fileNames = fs.readdirSync(postsDirectory)
        return fileNames
    }, 
    getRootPages: () => {
        const dirRelativePath = '/'
        const postsDirectory = path.resolve('./pages', dirRelativePath)
        const fileNames = fs.readdirSync('./pages')
        return fileNames
    }
}
