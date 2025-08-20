import { getAllPhoto } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id: photoID } = params;
  const allPhotos = await getAllPhoto();

  const singlePhoto = allPhotos.find((photo) => photo.id === photoID);

  return NextResponse.json(singlePhoto);
}
