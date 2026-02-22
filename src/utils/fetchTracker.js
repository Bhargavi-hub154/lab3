
const createFetchTracker = () => {
  let attempts = 0;
  let lastFetchTime = null;

  return () => {
    attempts++;
    lastFetchTime = new Date().toLocaleTimeString();

    return {
      attempts,
      lastFetchTime
    };
  };
};

export const fetchTracker = createFetchTracker();
