import { AppState } from "../AppState"
import { Account } from "../models/Account"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BloggersService {

    async getBloggerById(bloggerId) {
        const res = await api.get('api/profiles/' + bloggerId)
        logger.log(res.data, 'gotbloggerbyid')
        AppState.activeBlogger = new Account(res.data)
    }
}

export const bloggersService = new BloggersService()