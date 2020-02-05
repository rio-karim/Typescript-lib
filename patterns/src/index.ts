import { User } from './User';
import { CompanyMap } from './CustomMap';
import { Company } from './Company';

const user = new User();
const company = new Company();
const companyMap = new CompanyMap('map');

companyMap.addUserMarker(user);
companyMap.addUserMarker(company);
