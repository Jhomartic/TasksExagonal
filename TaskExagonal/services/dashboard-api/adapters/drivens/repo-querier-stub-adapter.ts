import { User as RepoUser } from "../../../repository/app/schemas";
import { ForRepoQueries } from "../../ports/drivens/for-repo-queries";
import { User } from "../../ports/drivers/for-autenticating";

const userMock: RepoUser = {
    id: '123',
    email: "hola@gamil.com",
    name: "holamundo"
}

export class RepoQuerierStub implements ForRepoQueries {
    createUser(_user: User, _password: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock)
    }
}