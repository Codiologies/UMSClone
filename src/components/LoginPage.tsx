import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, ChevronDown, Mail } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('HeadOffice');
  const [selectedDashboard, setSelectedDashboard] = useState('Dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      if (username === '12216879' && password === '1234') {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
    }, 100);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side - Fixed Image */}
      <div className="hidden lg:block lg:w-1/2 h-screen fixed left-0 top-0 z-0">
        <img
          src="/lpuposter.jpg"
          alt="LPU Placement Poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>

      {/* Right Side - Scrollable Login Form */}
      <div className="w-full lg:w-1/2 ml-auto h-screen overflow-y-auto flex flex-col items-center justify-center p-8 relative z-10 bg-[#fff9f6]">
        
        {/* Logos */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <img src="/logo.svg" alt="Logo" className="h-20" />
          <img src="/ums.svg" alt="UMS" className="h-12" />
        </div>

        {/* Login Card */}
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-12">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Log in</h2>
            <div className="relative">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="pl-4 pr-10 py-[5px] bg-[#fff0e6] border-none rounded-lg text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#f78c30]"
              >
                <option value="HeadOffice">HeadOffice</option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Admin">Admin</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-[5px] pr-12 bg-[#fff0e6] rounded-lg focus:outline-none text-gray-700"
                placeholder="User Id"
                required
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-[5px] pr-12 bg-[#f0f5fa] rounded-lg focus:outline-none text-gray-700"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Dashboard Dropdown */}
            <div className="relative">
              <select
                value={selectedDashboard}
                onChange={(e) => setSelectedDashboard(e.target.value)}
                className="w-full pl-4 pr-10 py-[5px] bg-[#fff0e6] border-none rounded-lg text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#f78c30]"
              >
                <option value="Dashboard">Dashboard</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <button type="button" className="text-sm text-gray-600 hover:text-gray-800 font-medium">
                Forgot your password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{ backgroundColor: '#f78c30' }}
              className="w-full text-white font-semibold py-[5px] px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
            {error && (
              <div className="text-red-600 text-center pt-2 font-semibold">{error}</div>
            )}
          </form>
        </div>

        {/* Student Mail Link */}
        <div className="text-center mt-12">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <Mail className="w-5 h-5" />
            <span>Student Mail</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;