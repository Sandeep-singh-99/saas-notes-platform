import { NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/db";
import { generateToken } from "../../../../lib/auth";
import User from "../../../../model/User";


export async function POST(req: Request) {
  await ConnectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email }).populate("tenantId");
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken({
    userId: user._id,
    tenantId: user.tenantId._id,
    role: user.role,
  });

  return NextResponse.json({
    token,
    user: {
      email: user.email,
      role: user.role,
      tenant: user.tenantId.slug,
    },
  });
}
