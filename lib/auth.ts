import jwt from "jsonwebtoken";
import { ConnectDB } from "./db";
import User from "../model/User";
import Tenant from "../model/Tenant";

const JWT_SECRET = process.env.JWT_SECRET!

export function generateToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
}

export function verifyToken(token: string) {
  if (!token) throw new Error("No token provided");
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Middleware for authenticating API routes
 */
export async function authMiddleware(req: any, res: any) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Missing token" });
    return null;
  }

  const token = authHeader.split(" ")[1];
  const payload = verifyToken(token) as any;

  if (!payload) {
    res.status(401).json({ error: "Invalid token" });
    return null;
  }

  await ConnectDB();

  // Find user and tenant
  const user = await User.findById(payload.userId);
  if (!user) {
    res.status(401).json({ error: "User not found" });
    return null;
  }

  const tenant = await Tenant.findById(user.tenantId);
  if (!tenant) {
    res.status(400).json({ error: "Tenant not found" });
    return null;
  }

  req.user = user;
  req.tenant = tenant;

  return { user, tenant };
}
