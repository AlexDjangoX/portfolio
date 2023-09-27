import { groq } from 'next-sanity';
import client from './sanity.client';

const revalidate = 1800;

export async function getProfile() {
  try {
    const data = await client.fetch(
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
    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

export async function getServices() {
  try {
    const data = await client.fetch(
      groq`*[_type == "services"]{
        _id,
        heading,
        content,
        "whiteImage": imgSrcWhite.asset->url,
        "blueImage": imgSrcBlue.asset->url,
        "blueImagePrimaryDark": imgSrcBluePrimaryDark.asset->url
      }`,
      { next: { revalidate } }
    );
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getSkills() {
  try {
    const data = await client.fetch(
      groq`*[_type == "skills"]{
        _id,
        "image": skillImage.asset->url,
        "altText": skillImage.alt
      }`
    );
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getWork() {
  try {
    const data = await client.fetch(
      groq`*[_type == "work"]{
        _id,
        title,
        subtitle,
        description,
        certified,
        certificateLink,
        "imgSrc": imgSrc.asset->url
      }`,
      { next: { revalidate } }
    );
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getProjects() {
  try {
    const data = await client.fetch(
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
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getTestimonials() {
  try {
    const data = await client.fetch(
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
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getCaseStudies() {
  try {
    const data = await client.fetch(
      groq`*[_type == "caseStudies"]{
        _id,
        heading,
        projectName,
        subHeading,
        "image": image.asset->url,
        "altText": image.alt
      }`
    );
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export async function getCaseStudyDetails() {
  try {
    const data = await client.fetch(
      groq`
        *[_type == "caseStudy"] {
          headingUnderline,
          heading, 
          projectName,
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
        }`,
      { next: { revalidate } }
    );

    return data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}

export async function getCaseStudyByProjectName(projectName: string) {
  try {
    const data = await client.fetch(
      groq`
        *[_type == "caseStudy" && projectName == $projectName] {
          headingUnderline,
          heading,
          projectName,
          startDate,
          endDate,
          myRole,
          "imageUrl": image.asset->url,
          "imageAlt": image.alt,
          demoSite,
          sourceCode,
          techStack[] {
            "imageUrl": asset->url,
            "imageAlt": alt
          },
          description[]{
            ...,
            children[]{
              text,
              marks[]
            },
            markDefs[]
          },
          problemStatement,
          "problemStatementImageUrl": problemStatementImage.asset->url,
          "problemStatementImageAlt": problemStatementImage.alt,
          "figmaDesignUrl": figmaDesign.asset->url,
          "figmaDesignAlt": figmaDesign.alt,
          myProcess[] {
            "imageUrl": image.asset->url,
            "imageAlt": alt,
            title
          },
          challenges,
          learnings,
          otherCaseStudies[] {
            "otherCaseStudyImageUrl": otherCaseStudyImage.asset->url,
            "otherCaseStudyImageAlt": otherCaseStudyImage.alt,
            otherCaseStudyHeading,
            otherCaseStudyDescription
          }
          
        }[0]
      `,
      { projectName },
      { next: { revalidate } }
    );

    return data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    throw error;
  }
}
