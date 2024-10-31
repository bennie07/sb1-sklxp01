import { Course, Journey } from './types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Project Management',
    description: 'Master the fundamentals of project management and team leadership with real-world case studies',
    instructor: 'Sarah Johnson',
    instructorTitle: 'Senior PM at TechCorp',
    progress: 65,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    duration: '8 weeks',
    category: 'Project Management',
    rating: 4,
    completedModules: 5,
    modules: [
      {
        id: 'm1',
        title: 'Project Management Fundamentals',
        description: 'Learn the core concepts of project management',
        duration: '2 hours',
        status: 'completed',
        lessons: []
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced Data Analytics',
    description: 'Deep dive into data analysis techniques and visualization tools with hands-on projects',
    instructor: 'Michael Chen',
    instructorTitle: 'Data Science Lead',
    progress: 32,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    duration: '12 weeks',
    category: 'Data Science',
    rating: 5,
    completedModules: 3,
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Data Analysis',
        description: 'Understanding data analysis fundamentals',
        duration: '3 hours',
        status: 'in-progress',
        lessons: []
      }
    ]
  },
  {
    id: '3',
    title: 'Leadership Excellence',
    description: 'Develop essential leadership skills for the modern workplace with expert guidance',
    instructor: 'Emma Thompson',
    instructorTitle: 'Leadership Coach',
    progress: 89,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    duration: '6 weeks',
    category: 'Leadership',
    rating: 5,
    completedModules: 8,
    modules: [
      {
        id: 'm1',
        title: 'Leadership Styles',
        description: 'Understanding different leadership approaches',
        duration: '2.5 hours',
        status: 'completed',
        lessons: []
      }
    ]
  }
];

export const journeys: Journey[] = [
  {
    id: '1',
    title: 'Digital Transformation Specialist',
    description: 'Complete pathway to master digital transformation',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    progress: 45,
    duration: '6 months',
    level: 'advanced',
    prerequisites: ['Basic Project Management', 'Digital Marketing Fundamentals'],
    skills: ['Change Management', 'Digital Strategy', 'Technology Implementation'],
    phases: []
  },
  {
    id: '2',
    title: 'Agile Leadership Path',
    description: 'Comprehensive journey to agile leadership mastery',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    progress: 22,
    duration: '4 months',
    level: 'intermediate',
    prerequisites: ['Basic Agile Knowledge', 'Team Management'],
    skills: ['Scrum', 'Kanban', 'Agile Coaching'],
    phases: []
  }
];