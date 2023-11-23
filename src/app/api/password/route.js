import { encryptedPassword } from "@/utils/encrypt";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const encryptedString = encryptedPassword("1234");
  return NextResponse.json({
    encryptedPassword: encryptedString,
  });
}
