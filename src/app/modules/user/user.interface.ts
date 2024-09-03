export interface IUser {
  userName: string;
  userNumber?: number;
  userEmail: string;
  password: string;
  role: string;
  refreshToken?: string;
}
