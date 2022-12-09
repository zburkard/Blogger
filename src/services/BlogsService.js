import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('[Got Projects]', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  setActiveBlog(blog) {
    AppState.activeBlog = blog
    logger.log(AppState.activeBlog, 'gotblog')
  }

  async getBlogsById(bloggerId) {
    const res = await api.get(`api/profiles/${bloggerId}/blogs`)
    AppState.blogs = res.data.map(b => new Blog(b))
  }
}

export const blogsService = new BlogsService()