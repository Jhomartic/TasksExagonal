export interface AuthDetails{
    token: string;
    tokenRefresh: string;
}

export interface Permissions{
    admin: boolean;
    user: boolean;
}

export interface ForControlAutenticating{
    getAuthDetails(email: string, password: string) : Promise<AuthDetails>;
    getPermissions(email: string, password: string) : Promise<Permissions>;
}