import { groq } from 'next-sanity';
import client from './sanity.client';

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]{
      _id,
      heading,
      content,
      "whiteImage": imgSrcWhite.asset->url,
      "blueImage": imgSrcBlue.asset->url
    }`
  );
}

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"]{
      _id,
      "image": skillImage.asset->url,
      "altText": skillImage.alt
    }`
  );
}

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      title,
      subtitle,
      description,
      "imgSrc": imgSrc.asset->url
    }`
  );
}
