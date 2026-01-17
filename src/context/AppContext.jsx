import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState({
    name: localStorage.getItem('userName') || 'Guest',
    type: localStorage.getItem('userType') || null,
    xp: parseInt(localStorage.getItem('userXP')) || 1240,
    level: parseInt(localStorage.getItem('userLevel')) || 5,
    streak: parseInt(localStorage.getItem('userStreak')) || 3,
    coins: parseInt(localStorage.getItem('userCoins')) || 450,
  });

  // Global Data State
  const [notifications, setNotifications] = useState([]);

  // Visual Preferences
  const [visualMode, setVisualMode] = useState(
    localStorage.getItem('visualMode') || 'playful'
  );

  // Persist User Data
  useEffect(() => {
    localStorage.setItem('userName', user.name);
    if (user.type) localStorage.setItem('userType', user.type);
    localStorage.setItem('userXP', user.xp);
    localStorage.setItem('userLevel', user.level);
    localStorage.setItem('userStreak', user.streak);
    localStorage.setItem('userCoins', user.coins);
  }, [user]);

  // Persist Visual Preferences
  useEffect(() => {
    localStorage.setItem('visualMode', visualMode);
  }, [visualMode]);

  // Actions
  const login = (name, type) => {
    setUser(prev => ({ ...prev, name, type }));
  };

  const logout = () => {
    localStorage.clear();
    setUser({ name: 'Guest', type: null, xp: 0, level: 1, streak: 0, coins: 0 });
  };

  const addXp = (amount) => {
    setUser(prev => {
      const newXp = prev.xp + amount;
      // Simple level up logic: Level up every 1000 XP
      const newLevel = Math.floor(newXp / 1000) + 1;
      
      if (newLevel > prev.level) {
        addNotification(`🎉 Level Up! You are now Level ${newLevel}!`);
      }
      
      return { ...prev, xp: newXp, level: newLevel };
    });
  };

  const addCoins = (amount) => {
    setUser(prev => ({ ...prev, coins: prev.coins + amount }));
  };

  const addNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message }]);
    // Auto remove after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const toggleVisualMode = () => {
    setVisualMode(prev => (prev === 'playful' ? 'calm' : 'playful'));
  };

  const value = {
    user,
    login,
    logout,
    addXp,
    addCoins,
    notifications,
    addNotification,
    visualMode,
    toggleVisualMode
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {/* Global Notification Toast */}
      <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
        {notifications.map(notif => (
          <div key={notif.id} className="bg-brand-dark text-white px-6 py-3 rounded-xl shadow-lg animate-slide-in pointer-events-auto flex items-center">
            <span className="text-xl mr-2">🔔</span>
            {notif.message}
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
