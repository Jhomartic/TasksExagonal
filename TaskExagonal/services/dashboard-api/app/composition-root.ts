import { ControlAutenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AutenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
   const controlAutenticatorStub = new ControlAutenticatorStub 
   const repoQuerierStub = new RepoQuerierStub
   const dashboardApiMock = new DashboardApi(controlAutenticatorStub, repoQuerierStub);

   const autenticatorProxyAdapter = new AutenticatorProxyAdapter(dashboardApiMock)

   return{
    autenticatorProxyAdapter
   }
} 

export const {autenticatorProxyAdapter} = compositionMock();

const registerMock = {
    name : 'jhon',
    email : 'john@gmail.com'
}

autenticatorProxyAdapter.register(registerMock, '12345678')
autenticatorProxyAdapter.login('john@gmail.com', '12345678')