import { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import MentorMeetingModal from './components/MentorMeetingModal';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowMentorModal(true);
    setIsLoggedIn(true);
    }, 2000);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="w-16 h-16 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!isLoggedIn && !isLoading && <LoginPage onLogin={handleLogin} />}
      {isLoggedIn && showMentorModal && !isLoading && (
        <>
          <Dashboard onLogout={() => setIsLoggedIn(false)} />
          <MentorMeetingModal onConfirm={() => setShowMentorModal(false)} />
        </>
      )}
      {isLoggedIn && !showMentorModal && !isLoading && <Dashboard onLogout={() => setIsLoggedIn(false)} />}
    </>
  );
};

export default App;