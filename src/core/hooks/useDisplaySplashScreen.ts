import { useEffect, useState } from 'react';

const SPLASH_DURATION = 2500; // 5000 milliseconds = 5 seconds

const useDisplaySplashScreen = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const currentDate = new Date().toLocaleDateString();

    if (lastVisitDate !== currentDate) {
      setShowSplash(true);
      localStorage.setItem('lastVisitDate', currentDate);

      setTimeout(() => {
        setShowSplash(false);
      }, SPLASH_DURATION);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    showSplash,
  };
};

export default useDisplaySplashScreen;
