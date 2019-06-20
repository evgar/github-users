import { GITHUB_USERS } from './endpoints'

export const getUsersInAmount = number => `${GITHUB_USERS}?per_page=${number}`;

export const getNewUsers = number => `${GITHUB_USERgit addS}?since=${number}`;