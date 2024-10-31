import React from 'react';
import { Clock, BookOpen, Star, Share2, ChevronRight } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
            <Star className="w-4 h-4 text-yellow-500 transition-transform duration-300 group-hover/btn:scale-110" />
          </button>
          <button className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
            <Share2 className="w-4 h-4 text-gray-600 transition-transform duration-300 group-hover/btn:scale-110" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1.5 bg-blue-600/95 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
            {course.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BookOpen className="w-4 h-4 text-gray-400" />
            <span>{course.modules.length} modules</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={`https://i.pravatar.cc/150?u=${course.instructor}`}
                alt={course.instructor}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900">{course.instructor}</span>
              <p className="text-xs text-gray-500">{course.instructorTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < course.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600 font-medium">{course.progress}% complete</span>
              <span className="text-blue-600 font-semibold">{course.completedModules}/{course.modules.length} modules</span>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-gray-50 hover:bg-blue-50 text-blue-600 rounded-xl font-medium transition-all duration-300 group/btn flex items-center justify-center gap-2">
            Continue Learning
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}