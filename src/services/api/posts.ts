import { DEFAULT_COMMENTS_LIMIT, DEFAULT_POSTS_LIMIT } from "@/constants";
import { BasicPostInfo, Comment, Post } from "@/types";
import { clientApi } from "./config";

interface PostsResponse<T> {
    posts: T[],
    total: number,
    skip: number,
    limit: number
}

const getTotalPostsCount = async () => {
    const { total } = await clientApi.get<PostsResponse<Post>>("posts", {
        params: {
            limit: 1,
            select: null
        }
    });
    return total;
}


interface PostsFetchParams {
    skip: number,
    limit?: number,
}

const basicPostKeys = 'title,id,tags,userId'

const getPosts = (
    { skip, limit = DEFAULT_POSTS_LIMIT, }: PostsFetchParams
): Promise<PostsResponse<BasicPostInfo>> => {

    return clientApi.get<PostsResponse<BasicPostInfo>>("posts", {
        params: {
            skip,
            limit,
            select: basicPostKeys
        }
    });
};


interface SearchPostsFetchParams {
    skip: number,
    search: string,
    limit?: number,
}

const searchPosts = (
    { skip, limit = DEFAULT_POSTS_LIMIT, search }: SearchPostsFetchParams
): Promise<PostsResponse<BasicPostInfo>> => {

    return clientApi.get<PostsResponse<BasicPostInfo>>("posts/search", {
        params: {
            q: search,
            skip,
            limit,
            select: basicPostKeys
        }
    });
};


const getPostById = (
    id: number
): Promise<Post> => clientApi.get<Post>(`posts/${id}`);


interface CommentFetchParams {
    postId: number;
    page?: number;
    limit?: number;
}

export interface CommentsResponse {
    comments: Comment[],
    total: number,
    skip: number,
    limit: number
}

const getCommentsByPostId = (
    { postId, page = 1, limit = DEFAULT_COMMENTS_LIMIT }: CommentFetchParams
): Promise<CommentsResponse> => {
    return clientApi.get<CommentsResponse>(
        `posts/${postId}/comments`, {
        params: {
            skip: page,
            limit
        }
    }
    );
};


export const postsApi = {
    getTotalPostsCount,
    getPosts,
    searchPosts,
    getPostById,
    getCommentsByPostId,
}