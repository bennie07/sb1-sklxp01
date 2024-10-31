import React, { useState } from 'react';
import { BookOpen, Navigation, BarChart2, Users, Settings, LogOut, Compass, GraduationCap, ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationItems = [
    { 
      icon: Compass,
      label: 'Dashboard',
      active: true,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Navigation,
      label: 'Journeys',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    { 
      icon: GraduationCap,
      label: 'Courses',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
  ];

  const generalItems = [
    { 
      icon: BarChart2,
      label: 'Progress',
      color: 'text-amber-500',
      bgColor: 'bg-amber-50'
    },
    { 
      icon: Users,
      label: 'Teams',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    { 
      icon: Settings,
      label: 'Settings',
      color: 'text-gray-500',
      bgColor: 'bg-gray-50'
    },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'}`}>
        <div className="p-2 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        {!isCollapsed && <span className="text-xl font-bold">LearnHub</span>}
      </div>
      
      <div className="flex-1 px-4">
        {/* Learning Section */}
        <div className="mb-8">
          {!isCollapsed && (
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 px-3">
              Learning
            </h3>
          )}
          <nav className="space-y-1">
            {navigationItems.map(({ icon: Icon, label, active, color, bgColor }) => (
              <button
                key={label}
                className={`flex items-center w-full p-3 rounded-xl transition-all duration-300 group ${
                  active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${bgColor}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                {!isCollapsed && (
                  <span className={`ml-3 ${active ? 'font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* General Section */}
        <div>
          {!isCollapsed && (
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2 px-3">
              General
            </h3>
          )}
          <nav className="space-y-1">
            {generalItems.map(({ icon: Icon, label, color, bgColor }) => (
              <button
                key={label}
                className="flex items-center w-full p-3 rounded-xl transition-all duration-300 group hover:bg-gray-50"
              >
                <div className={`p-2 rounded-lg ${bgColor}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                {!isCollapsed && (
                  <span className="ml-3 text-gray-600 group-hover:text-gray-900">
                    {label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Sign Out Button */}
      <div className="p-4 mt-auto">
        <button className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors duration-300 w-full p-3 rounded-xl hover:bg-gray-50">
          <div className="p-2 bg-gray-50 rounded-lg">
            <LogOut className="w-5 h-5" />
          </div>
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div 
        className={`hidden lg:block fixed top-0 left-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`lg:hidden fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity z-50 ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-full sm:w-96 bg-white transform transition-transform duration-300 ease-in-out ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-xl"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          {sidebarContent}
        </div>
      </div>

      {/* Desktop Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed left-0 bottom-8 w-6 h-12 bg-white border border-gray-200 rounded-r-lg shadow-lg items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-50 hidden lg:flex"
        style={{ left: isCollapsed ? '76px' : '252px' }}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </>
  );
}