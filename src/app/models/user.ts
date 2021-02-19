export interface User {
  FirstName: String;
  Surname: String;
  role?: String;
  password?: String;
  passwordChangedAt?: Date;
  passwordCornfirm?: String;
  passwordResetToken?: String;
  passwordResetExpires?: Date;
  email?: String;
  phoneNumber?: Number;
  idNumber: String;
  Province: String;
  ProfilePhoto?: string;
}
