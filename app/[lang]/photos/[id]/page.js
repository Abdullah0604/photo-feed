import PhotoDetails from "@/components/PhotoDetails";
import React from "react";

const Photo = ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default Photo;
