import { IUser } from "./user.interface";
import { User } from "./user.model";

const registerUser = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const singleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const AllUser = async () => {
  const result = await User.find();
  return result;
};

const updateUserRole=async(id:string, data:string)=>{
  const result= await User.updateOne({ _id: id },
    { $set: { role: data } })
  return result
}
const deleteUser=async (id:string)=>{
 const result= await User.findByIdAndDelete(id)
 return result
}

export const UserService = {
  registerUser,
  singleUser,
  AllUser,
  updateUserRole,
  deleteUser,
  

};
