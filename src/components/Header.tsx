import React, { useState } from 'react';
import { Bell, Search, Calendar, MessageSquare, HelpCircle, ChevronDown, Menu } from 'lucide-react';

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed right-0 left-0 lg:left-64 top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl text-gray-600"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 max-w-2xl hidden sm:block">
            <div className="relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, journeys, and more..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
              />
              <div className="hidden group-focus-within:block absolute top-full left-0 right-0 bg-white mt-2 rounded-xl shadow-xl border border-gray-200/80 p-4">
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 px-2">RECENT SEARCHES</h4>
                  <div className="space-y-1">
                    <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      Advanced Project Management
                    </button>
                    <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      Data Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-900 transition-all duration-300">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-900 transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2.5 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-900 transition-all duration-300">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>

            <button 
              className="relative p-2.5 hover:bg-gray-100 rounded-xl text-gray-600 hover:text-gray-900 transition-all duration-300"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
            
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            
            <div className="flex items-center gap-3 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-white shadow-md group-hover:shadow-lg transition-all duration-300"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">John Doe</p>
                <p className="text-xs text-gray-500">Product Manager</p>
              </div>
              <ChevronDown className="hidden sm:block w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 sm:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {showNotifications && (
        <div className="absolute top-full right-4 sm:right-8 mt-2 w-full sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200/80 p-4 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Notifications</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
              Mark all as read
            </button>
          </div>
          <div className="space-y-2">
            {[
              {
                title: "New Course Available",
                description: "Advanced Machine Learning course is now available",
                time: "2 hours ago",
                unread: true
              },
              {
                title: "Assignment Due",
                description: "Project Management final assignment due in 2 days",
                time: "5 hours ago",
                unread: false
              }
            ].map((notification, index) => (
              <div 
                key={index} 
                className={`flex gap-4 p-3.5 rounded-xl transition-colors duration-300 cursor-pointer ${
                  notification.unread ? 'bg-blue-50 hover:bg-blue-100/80' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${
                  notification.unread ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
                <div>
                  <h4 className="text-sm font-medium">{notification.title}</h4>
                  <p className="text-sm text-gray-600 mt-0.5">{notification.description}</p>
                  <span className="text-xs text-gray-500 mt-1.5 block">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}