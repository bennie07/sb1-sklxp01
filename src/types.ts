export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  progress: number;
  thumbnail: string;
  duration: string;
  category: string;
  rating: number;
  completedModules: number;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'not-started' | 'in-progress' | 'completed';
  lessons: Lesson[];
  assessment?: Assessment;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  status: 'not-started' | 'in-progress' | 'completed';
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  topics: Topic[];
  quizzes: Quiz[];
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link';
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  timeLimit?: number;
  passingScore: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  timeLimit: number;
  questions: Question[];
  passingScore: number;
  attempts: number;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  skills: string[];
  phases: Phase[];
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  modules: Module[];
}