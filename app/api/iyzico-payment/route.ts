
import { NextResponse } from "next/server";
const Iyzipay = require("iyzipay");

export async function POST(req: Request) {
  return NextResponse.json({
    message: "iyzico endpoint ready. Configure API keys next."
  });
}
