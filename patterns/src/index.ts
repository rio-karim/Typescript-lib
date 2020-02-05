import { User } from './User';
import { CompanyMap } from './CompanyMap';

const user = new User();
const companyMap = new CompanyMap('map');

companyMap.addUserMarker(user);
