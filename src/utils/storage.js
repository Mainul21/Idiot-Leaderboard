export const getLeaderboardData = () => {
  const data = localStorage.getItem('leaderboard_data');
  if (!data) {
    const initialData = [
  { id: '1', name: 'Fahim',   weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fahim' },
  { id: '2', name: 'Mainul',  weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mainul' },
  { id: '3', name: 'Nahiyan', weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nahiyan' },
  { id: '4', name: 'Abrar',   weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Abrar' },
  { id: '5', name: 'Rafeed',  weekly: 0, monthly: 0,  yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafeed' },
  { id: '6', name: 'Samiha',  weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samiha' },
  { id: '7', name: 'Zarif',   weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zarif' },
  { id: '8', name: 'Amin',    weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amin' },
  { id: '9', name: 'Alim',    weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alim' },
  { id: '10', name: 'Baki',   weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Baki' },
  { id: '11', name: 'Sawkeen',weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sawkeen' },
  { id: '12', name: 'Asif',   weekly: 0, monthly: 0, yearly: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Asif' },
];

    localStorage.setItem('leaderboard_data', JSON.stringify(initialData));
    return initialData;
  }
  return JSON.parse(data);
};

export const incrementCounter = (id, period) => {
  const data = getLeaderboardData();
  const updatedData = data.map(person => {
    if (person.id === id) {
      return { 
        ...person, 
        [period]: person[period] + 1,
        // Also update other periods for consistency? Or just one? 
        // User asked: "when the counter for a person increases his name will go up in the leaderboard"
        // Let's increment all for simplicity or just the active one.
        // Actually, let's increment the specific one and also monthly/yearly if weekly is incremented?
        // Let's just increment all to show ranking changes easily.
        ...(period === 'weekly' ? { monthly: person.monthly + 1, yearly: person.yearly + 1 } : {}),
        ...(period === 'monthly' ? { yearly: person.yearly + 1 } : {}),
      };
    }
    return person;
  });
  localStorage.setItem('leaderboard_data', JSON.stringify(updatedData));
  return updatedData;
};

export const addPerson = (name) => {
  const data = getLeaderboardData();
  const newPerson = {
    id: Date.now().toString(),
    name,
    weekly: 0,
    monthly: 0,
    yearly: 0,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
  };
  const updatedData = [...data, newPerson];
  localStorage.setItem('leaderboard_data', JSON.stringify(updatedData));
  return updatedData;
};

export const removePerson = (id) => {
  const data = getLeaderboardData();
  const updatedData = data.filter(person => person.id !== id);
  localStorage.setItem('leaderboard_data', JSON.stringify(updatedData));
  return updatedData;
};

export const clearStorage = () => {
  localStorage.removeItem('leaderboard_data');
  return getLeaderboardData();
};
