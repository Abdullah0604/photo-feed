import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function PhotoDetails({ id, lang }) {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photo = await response.json();
  const dict = await getDictionary(lang);
  return (
    <div className="grid grid-cols-12 gap-4 2xl:gap-10">
      {/* main photo */}
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image
          className="max-w-full h-full max-h-[70vh] mx-auto object-cover"
          src={photo.url}
          alt={photo.title}
          width={800}
          height={600}
        />
      </div>

      {/* details card */}
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {photo.tags.map((tag) => `#${tag} `)}
        </div>

        {/* info rows */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">10M</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">10M</span>
          </div>
          <div className="flex justify-between">
            <span>{dict.uploadedOn}</span>
            <span className="font-bold">31 January 2024</span>
          </div>
        </div>

        {/* author info */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            {/* author header */}
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                src={photo.author.avatar}
                alt={photo.author.name}
                width={56}
                height={56}
              />
              <div className="space-y-1">
                <h6 className="lg:text-lg font-bold">{photo.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  420 {dict.followers}
                </p>
              </div>
            </div>
            {/* action */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image src="/follow.svg" alt="follow" width={20} height={20} />
              {dict.follow}
            </button>
          </div>

          {/* author bio */}
          <p className="text-xs lg:text-sm text-black/60">
            I am a portrait photographer in Michigan, and happily share my hard
            work so others can find and use my photos for FREE!
          </p>
        </div>

        {/* actions */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/heart.svg" alt="heart" width={20} height={20} />
              100
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/save.svg" alt="save" width={20} height={20} />
              Save
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image src="/share.svg" alt="share" width={20} height={20} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
