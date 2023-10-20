import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Configuration from "openai";
import OpenAI from "openai";

const openai = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!amount) {
      return new NextResponse("amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("resolution is required", { status: 400 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const response = await openai.Image.create({
      prompt,
      n = parseInt(amount, 10),
      size = resolution,
    });

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("IMAGE_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
