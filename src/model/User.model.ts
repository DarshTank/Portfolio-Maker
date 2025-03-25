import mongoose, { Schema, model, models, Document } from "mongoose";

// Define Skills Schema
export interface Skills extends Document {
  content: string;
}

const SkillsSchema: Schema<Skills> = new Schema({
  content: {
    type: String,
    required: true,
  },
});

// Define Education Schema
const EducationSchema = new Schema({
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

// Define Projects Schema
const ProjectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings
    required: true,
  },
});

// Define User Schema
export interface User extends Document {
  username: string;
  fullname: string;
  role: string;
  brandTitle: string;
  profileImage?: string;
  about: string;
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  resumeUrl: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  skills: Skills[];
  education: { degree: string; institution: string; year: string; grade: string }[];
  projects: { title: string; description: string; github: string; image: string; technologies: string[] }[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  role: {
    type: String,
    required: true,
  },
  brandTitle: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  about: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+\@.+\..+/, "Please use a valid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verification code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verification code expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  skills: [SkillsSchema], // Array of skills
  education: [EducationSchema], // Array of education objects
  projects: [ProjectsSchema], // Array of projects
});

const UserModel = models.User || model<User>("User", UserSchema);

export default UserModel;
