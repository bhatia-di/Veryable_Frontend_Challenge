export default interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    role: Role,
    email: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    createdAt: string,
    lastLoggedIn: string
  }

  export enum Role {
    Administrator = "Administrator",
    User = "User",
    Viewer = "Viewer"
  }
  