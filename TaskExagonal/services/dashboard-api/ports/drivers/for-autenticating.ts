export interface AutenticatedUser{
    id: string;
    email: string;
    name: string;
    token: string;
    tokenRefresh: string;
    admin: boolean;
    user: boolean
}

export type User = Pick<AutenticatedUser, 'email' | 'name'>

export interface ForAutenticating {
    login :(email: string , password : string) => Promise<AutenticatedUser>;
    register :(user: User, password: string) => Promise<AutenticatedUser>;
}