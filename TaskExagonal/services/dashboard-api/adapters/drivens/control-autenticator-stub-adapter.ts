import { AuthDetails, ForControlAutenticating, Permissions } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: '´123sdasdasd123',
    tokenRefresh: 'dlasmdnsjnsikand'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAutenticatorStub implements ForControlAutenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock)
    }
    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
    }
}