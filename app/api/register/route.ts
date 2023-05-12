import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const user = await prisma.user.create({
      data: { email, name, hashedPassword },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    const checkUserExists = await prisma.user.findUnique({
      where: { email },
    });

    if (checkUserExists) {
      return NextResponse.json(
        { message: "Email is already in use" },
        { status: 400 }
      );
    }
  }
}
