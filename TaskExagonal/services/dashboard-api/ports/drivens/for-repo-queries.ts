import { User as RepoUser} from "../../../repository/app/schemas";
import { User } from "../drivers/for-autenticating";


export interface ForRepoQueries{
    getUser(email: string) : Promise<RepoUser>;
    createUser(user: User, password: string) : Promise<RepoUser>;
}