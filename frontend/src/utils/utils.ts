import { mockComponent } from "react-dom/test-utils";
import { Role } from "../types/IUser";
import moment from "moment";
export const BACKEND_URL = "http://localhost:9000";
export const FETCH_USER_LIST_URL = "/api/users";


const roleToCssMapper = {

    "Administrator": 'fill-blue h-75',
    "User": 'fill-turquoise h-75',
    "Viewer": 'fill-grey h-75'
};

export const getStyleBasedOnRole = (role: Role) => {

  return roleToCssMapper[role];

};

export const formatAddress = (street: string, city: string, state: string, zip: string ) => {

    if (zip.trim().length === 0) {
        return 'Incomplete address';
    } 

    return `${street} , ${city}, ${state} - ${zip}`;

}

export const formatPhoneNumber = (phoneNumber: string) => {

    let match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  else {
    return 'Incorrect phone number format';
  }

}

export const dateFormat = "M/DD/YY h:mm a";

export const formatDateTime = (date: string) => {
    const formated = moment(date).format(dateFormat);
    return formated;
}