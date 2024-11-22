import { DashboardApi } from "../../app/dashboard-api";
import { AutenticatedUser, ForAutenticating, User } from "../../ports/drivers/for-autenticating";

export class AutenticatorProxyAdapter implements ForAutenticating{
    constructor(private readonly dashboardApi: DashboardApi){}
    async login(email: string, password: string): Promise<AutenticatedUser> {
        return await this.dashboardApi.login(email, password)
    }
    async register(user: User, password: string) :Promise<AutenticatedUser> {
        return await this.register(user, password)
    }
}