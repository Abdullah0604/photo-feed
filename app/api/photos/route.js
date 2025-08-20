import { getAllPhoto, getPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const photos = await getAllPhoto();
  const photosWithLimitedProperty = await getPhotos();
  return NextResponse.json(photosWithLimitedProperty);
}
