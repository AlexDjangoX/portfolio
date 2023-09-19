import { groq } from 'next-sanity';
import client from './sanity.client';

const revalidate = 1800;

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

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]{
      _id,
      heading,
      projectName,
      "image": projectImage.asset->url,
      "altText": projectImage.alt,
      technologies
    }`,
    { next: { revalidate } }
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonials"]{
      _id,
      content,
      headingName,
      subheadingName,
      "testimonialImage": testimonialImage.asset->url,
      "altText": testimonialImage.alt
    }`,
    { next: { revalidate } }
  );
}

export async function getCaseStudyDetails() {
  return client.fetch(
    groq`
      *[_type == "caseStudy"] {
        headingUnderline,
        heading,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt,
        demoSite,
        sourceCode,
        techStack[] {
          "imageUrl": asset->url,
          "imageAlt": alt
        },
        description,
        problemStatement,
        "problemStatementImageUrl": problemStatementImage.asset->url,
        "problemStatementImageAlt": problemStatementImage.alt,
        "figmaDesignUrl": figmaDesign.asset->url,
        "figmaDesignAlt": figmaDesign.alt,
        myProcess[] {
          "imageUrl": asset->url,
          "imageAlt": alt
        },
        challenges,
        learnings
      }
    `,
    { next: { revalidate } }
  );
}
