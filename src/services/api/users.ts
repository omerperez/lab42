import { BasicUserInfo } from "@/types";
import { clientApi } from "./config";

const basicUserKeys = 'firstName,lastName,email,phone,image';

const getBasicUserInfoById = async (
    id: number
): Promise<BasicUserInfo> => {
    return clientApi.get<BasicUserInfo>(
        `users/${id}`, {
        params: {
            select: basicUserKeys
        }
    }
    )
}

export const usersApi = {
    getBasicUserInfoById
}
