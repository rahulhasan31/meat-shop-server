import jwt from "jsonwebtoken";

const generateAccessToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET!, {
    expiresIn: "5m",
  });
};

export default generateAccessToken;

export const generateRefreshToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });
};
