export type UserRole = 'student' | 'mentor' | 'parent' | 'organization';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  thumbnail: string;
  modules: number;
  completed: number;
}

export interface ModuleCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  path: string;
}

export interface AssessmentQuiz {
  id: string;
  title: string;
  questions: number;
  timeLimit: number;
  dueDate: string;
}

export interface SkillCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  completion: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface ScholarshipScheme {
  id: string;
  title: string;
  provider: string;
  amount: string;
  eligibility: string;
  deadline: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  postedAt: string;
}
