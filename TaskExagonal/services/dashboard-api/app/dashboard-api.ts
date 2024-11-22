import { ForControlAutenticating, ForRepoQueries } from "../ports/drivens";
import { AutenticatedUser, ForAutenticating, User } from "../ports/drivers/for-autenticating";

export class DashboardApi implements ForAutenticating {
    constructor(
        private readonly controlAutenticating: ForControlAutenticating, 
        private readonly repoQueries: ForRepoQueries
    ) {}

    async login(email: string, password: string): Promise<AutenticatedUser> {
        const authDetails = await this.controlAutenticating.getAuthDetails(email, password);
        const permissions = await this.controlAutenticating.getPermissions(email, password);
        const user = await this.repoQueries.getUser(email);
        
        const result = {
            
            ...user,
            ...authDetails,
            ...permissions,
        }
        console.log("Login", result)

        return result
        
    }

    async register(user: User, password: string): Promise<AutenticatedUser> {
        const newUser = await this.repoQueries.createUser(user, password);
        const authDetails = await this.controlAutenticating.getAuthDetails(newUser.email, password);
        const permissions = await this.controlAutenticating.getPermissions(newUser.email, password);

        const result = {
            
            ...newUser,
            ...authDetails,
            ...permissions,
        }
        console.log("Register", result)

        return result
    }
}
