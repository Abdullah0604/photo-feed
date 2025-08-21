import { getAllPhoto, getPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export function GET() {
  const photos = getAllPhoto();
  // console.log(photos);
  return NextResponse.json(photos);
}
