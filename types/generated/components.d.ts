import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.String;
    endDate: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    currentlyWorking: Attribute.String;
    workSummery: Attribute.Text;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'skills';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
    }
  }
}
