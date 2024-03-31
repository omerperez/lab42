import { BasicPostInfo } from "./BasicPostInfo";

export type Post = BasicPostInfo & {
    body: string,
    reactions: number
}

export type { BasicPostInfo };
