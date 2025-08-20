import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <div>{dict.views}</div>
      <div>{dict.share}</div>
      <div>{dict.uploadedOn}</div>
      <div>{dict.save}</div>
      <div>{dict.followers}</div>
      <div>{dict.follow}</div>
    </div>
  );
}
