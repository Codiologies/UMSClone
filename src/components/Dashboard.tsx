import React, { useState } from 'react';
import { 
  Home, 
  Smartphone, 
  Heart, 
  Users, 
  Gauge, 
  ChevronDown, 
  Search, 
  Bell,
  User,
  BookOpen,
  CreditCard,
  FileText,
  Calendar,
  Award,
  Building,
  Phone,
  Briefcase,
  GraduationCap,
  Info,
  DollarSign,
  ClipboardList,
  CalendarDays,
  TrendingUp,
  MessageSquare,
  LogOut
} from 'lucide-react';

interface NavigationItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface QuickAction {
  name: string;
  color: string;
  icon: React.ReactNode;
}

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');

  const navigationItems: NavigationItem[] = [
    { id: 'dashboard', name: 'Dashboard', icon: <Gauge className="w-5 h-5" />, active: true },
    { id: 'ums-home', name: 'UMS Home', icon: <Home className="w-5 h-5" /> },
    { id: 'lpu-touch', name: 'LPU Touch', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'my-class', name: 'My Class', icon: <Heart className="w-5 h-5" /> },
    { id: 'yourdost', name: 'YourDost', icon: <Users className="w-5 h-5" /> },
  ];

  const quickActions: QuickAction[] = [
    { name: 'Hostel Booking', color: 'bg-[#f68121]', icon: <Building className="w-4 h-4" /> },
    { name: 'Apply for Edu-Revolution', color: 'bg-[#f68121]', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'RMS', color: 'bg-blue-600', icon: <FileText className="w-4 h-4" /> },
    { name: 'Fee Dashboard', color: 'bg-blue-600', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Issued Books', color: 'bg-[#f68121]', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Academic Calendar', color: 'bg-blue-600', icon: <Calendar className="w-4 h-4" /> },
    { name: 'Emergency Numbers', color: 'bg-blue-600', icon: <Phone className="w-4 h-4" /> },
    { name: 'Certificate Request', color: 'bg-blue-600', icon: <Award className="w-4 h-4" /> },
    { name: 'Part-time job Application', color: 'bg-blue-600', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.svg" alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <img src="/ums.svg" alt="UMS University Management System" className="h-8 object-contain" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Academics', 'Administrative', 'Important Links', 'Student Services', 'Quick Links'].map((item) => (
              <div key={item} className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 cursor-pointer">
                <span className="text-sm">{item}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">Sarthak Singh</p>
                <p className="text-xs text-gray-500">VID: 12216879 | Section: K22CA</p>
                <p className="text-xs text-gray-500">B.Tech. (Computer Science and Engineering)</p>
                <p className="text-xs text-gray-500">(P132)</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img src="/download.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <button 
                onClick={onLogout}
                style={{ backgroundColor: '#f68121' }}
                className="text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Password Notification */}
        <div className="bg-orange-100 border-l-4 border-[#f68121] px-6 py-2">
          <p className="text-sm text-orange-700">
            UMS Pwd will expire after 84 days. Do change your pwd on or before 17-09-2025
          </p>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-[#f68121] to-[#f89b29] min-h-screen shadow-lg">
          <div className="p-6">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active || activeSection === item.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links and Information</h2>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-opacity`}
                >
                  {action.icon}
                  <span>{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* University Ranking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-[#f68121]" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-[#f68121] mb-2">27th</div>
                  <p className="text-sm text-gray-700">amongst all Government and Private Universities in India</p>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium inline-block">
                  NIRF Rankings 2024
                </div>
              </div>
            </div>

            {/* Happening Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#f68121]" />
                </div>
                <span className="text-lg font-semibold text-gray-800">Happening</span>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Master's of Your University Career 2025 in Germany
                  </h4>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    LPU Hosts On-Campus Freshmen Induction for Ph.D. Scholars: A Transformative Start to a Research Journey
                  </h4>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    LPU&#8217;s Human Resource Development Center Inaugurates 12-Day Refresher Course on e-Content and MOOCs Development
                  </h4>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  View More
                </button>
              </div>
            </div>

            {/* My Messages Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-[#f68121]" />
                </div>
                <span className="text-lg font-semibold text-gray-800">My Messages</span>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    Feedback For RMS - By Administrator (Jun 18, 2025)
                  </h4>
                  <p className="text-xs text-gray-600">
                    Dear Student, We kindly request your participation in a brief survey titled "RMS Feedback"...
                  </p>
                </div>
                <div className="border-l-4 border-[#f68121] pl-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    Information Regarding NPTEL/SWAYAM Exam Clashes - By Sanchit Singla (May 06, 2025)
                  </h4>
                  <p className="text-xs text-gray-600">
                    Dear Student, The students who had a clash between their regular schedule...
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  All Messages
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* My Courses - Full width on large screens */}
            <div className="bg-white rounded-xl shadow-lg p-6 border col-span-1 lg:col-span-4">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-[#f68121]" />
                </div>
                <span className="text-lg font-semibold text-gray-800">My Courses</span>
              </div>
              <div className="text-center py-8">
                {/* Course List Start */}
                <div className="space-y-6">
                  {/* Example Course Item */}
                  {[
                    {
                      code: 'CSE205',
                      name: 'DATA STRUCTURES AND ALGORITHMS',
                      attendance: 100,
                      classInfo: '',
                    },
                    {
                      code: 'CSE343',
                      name: 'TRAINING IN PROGRAMMING',
                      attendance: 0,
                      classInfo: '',
                    },
                    {
                      code: 'INT345',
                      name: 'COMPUTER VISION',
                      attendance: 100,
                      classInfo: 'Class Today at : 04-05 PM Room:MyClass',
                    },
                    {
                      code: 'INT354',
                      name: 'MACHINE LEARNING-I',
                      attendance: 100,
                      classInfo: 'Class Today at : 01-02 PM Room:MyClass,12-01 PM Room:MyClass',
                    },
                    {
                      code: 'INT426',
                      name: 'GENERATIVE ARTIFICIAL INTELLIGENCE',
                      attendance: 100,
                      classInfo: 'Class Today at : 03-04 PM Room:MyClass',
                    },
                    {
                      code: 'MTH302',
                      name: 'PROBABILITY AND STATISTICS',
                      attendance: 100,
                      classInfo: 'Class Today at : 09-10 AM Room:MyClass',
                    },
                    {
                      code: 'PEL134',
                      name: 'UPPER INTERMEDIATE COMMUNICATION SKILLS-II',
                      attendance: 100,
                      classInfo: 'Class Today at : 02-03 PM Room:MyClass',
                    },
                  ].map((course, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-4 shadow-sm">
                      {/* Attendance Circle */}
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${course.attendance === 100 ? 'border-green-500' : 'border-gray-300'}`}
                          style={{ background: '#fff' }}>
                          <span className={`text-xl font-bold ${course.attendance === 100 ? 'text-green-600' : 'text-gray-400'}`}>{course.attendance}%</span>
                        </div>
                      </div>
                      {/* Course Info */}
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-gray-800 text-base whitespace-nowrap overflow-x-auto" style={{maxWidth: '600px'}}>{course.code}:{course.name}</div>
                        {course.classInfo && (
                          <div className="text-xs text-gray-500 mt-1">{course.classInfo}</div>
                        )}
                      </div>
                      {/* Buttons */}
                      <div className="flex flex-col space-y-2 ml-4">
                        <div className="flex flex-wrap gap-2">
                          <button className="border border-[#f68121] text-[#f68121] rounded-full px-3 py-1 text-xs font-medium">IP</button>
                          <button className="border border-[#f68121] text-[#f68121] rounded-full px-3 py-1 text-xs font-medium">Syllabus</button>
                          <button className="border border-[#f68121] text-[#f68121] rounded-full px-3 py-1 text-xs font-medium">OER</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="border border-[#f68121] text-[#f68121] rounded-full px-3 py-1 text-xs font-medium">Timetable</button>
                          <button className="border border-[#f68121] text-[#f68121] rounded-full px-3 py-1 text-xs font-medium">View Books</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Course List End */}
                {/* CGPA and Attendance Summary */}
                <div className="flex justify-between items-center text-sm mt-6">
                  <div>
                    <span className="text-gray-600">CGPA:</span>
                    <span className="font-bold text-blue-600 ml-1">4.00</span>
                    <Info className="w-4 h-4 text-gray-400 inline ml-1" />
                  </div>
                  <div>
                    <span className="text-gray-600">ATTENDANCE:</span>
                    <span className="font-bold text-blue-600 ml-1">100%</span>
                    <Info className="w-4 h-4 text-gray-400 inline ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second row: Pending Assignments and Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {/* Pending Assignments */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <ClipboardList className="w-5 h-5 text-[#f68121]" />
                </div>
                <span className="text-lg font-semibold text-gray-800">Pending Assignments</span>
              </div>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No Assignments Available</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  View Assignments
                </button>
              </div>
            </div>
            {/* Events */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <CalendarDays className="w-5 h-5 text-[#f68121]" />
                </div>
                <span className="text-lg font-semibold text-gray-800">Events</span>
              </div>
              <div className="text-center py-4">
                <p className="text-sm text-gray-600 mb-4">
                  Get your event listed here through email events@lpu.co.in
                </p>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium mb-2 transition-colors">
                  View Details
                </button>
                <br />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  All Events
                </button>
              </div>
            </div>
          </div>

          {/* Placement Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 border">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Placement Details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recently Placed */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-[#f68121]" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Recently Placed</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 h-32 flex items-center justify-center">
                  <p className="text-gray-500">No recent placements to display</p>
                </div>
              </div>

              {/* Today's Placement Drives */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-[#f68121]" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Today's Placement Drives</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-500 mb-2">COSCOT - Batch 2025</p>
                    <p className="text-sm text-gray-400">Check your email for updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;