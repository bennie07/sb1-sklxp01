import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CourseCard } from './components/CourseCard';
import { courses, journeys } from './data';
import { Rocket, Trophy, Users, Navigation, TrendingUp, Calendar, BarChart2, ChevronRight } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="lg:ml-20 transition-all duration-300">
        <Header />
        
        <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-0">
              <div>
                <h1 className="text-2xl font-bold mb-2">Welcome back, John! 👋</h1>
                <p className="text-gray-600">Ready to continue your learning journey?</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule</span>
                </button>
                <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>View Progress</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {[
              { 
                icon: Rocket, 
                label: 'Active Courses', 
                value: '12',
                trend: '+2.5%',
                trendUp: true,
                color: 'blue'
              },
              { 
                icon: Navigation, 
                label: 'Learning Paths', 
                value: '3',
                trend: '+1.2%',
                trendUp: true,
                color: 'purple'
              },
              { 
                icon: Trophy, 
                label: 'Certifications', 
                value: '24',
                trend: '+12.5%',
                trendUp: true,
                color: 'yellow'
              },
              { 
                icon: Users, 
                label: 'Team Members', 
                value: '156',
                trend: '+5.8%',
                trendUp: true,
                color: 'green'
              },
            ].map(({ icon: Icon, label, value, trend, trendUp, color }) => (
              <div key={label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    color === 'yellow' ? 'bg-amber-50 text-amber-600' :
                    'bg-green-50 text-green-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    trendUp ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {trend}
                    <BarChart2 className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{value}</h3>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>

          {/* Learning Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-lg font-semibold">Learning Progress</h2>
                <select className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-4 overflow-x-auto">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                  <div key={day} className="flex flex-col items-center gap-2 min-w-[3rem]">
                    <div 
                      className="w-12 bg-blue-100 rounded-t-lg hover:bg-blue-200 transition-all duration-300 cursor-pointer"
                      style={{ height: `${Math.random() * 100 + 20}%` }}
                    >
                      <div 
                        className="w-full bg-blue-500 rounded-t-lg transition-all duration-300"
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold mb-6">Upcoming Sessions</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Project Management Workshop',
                    time: '2:00 PM - 3:30 PM',
                    instructor: 'Sarah Johnson'
                  },
                  {
                    title: 'Data Analytics Q&A',
                    time: '4:00 PM - 5:00 PM',
                    instructor: 'Michael Chen'
                  }
                ].map((session, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                    <h3 className="font-medium mb-1">{session.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{session.time}</p>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://i.pravatar.cc/150?u=${session.instructor}`}
                        alt={session.instructor}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{session.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Courses */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Current Courses</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300">
                View All Courses
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}