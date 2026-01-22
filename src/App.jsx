import React, { useState, useEffect } from 'react';
import Leaderboard from './components/Leaderboard';
import AddPersonForm from './components/AddPersonForm';
import { Trophy, Users, TrendingUp, RefreshCcw } from 'lucide-react';
import { getLeaderboardData, incrementCounter, addPerson, removePerson, clearStorage } from './utils/storage';

function App() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('weekly');

    useEffect(() => {
        setData(getLeaderboardData());
    }, []);

    const handleIncrement = (id) => {
        const updatedData = incrementCounter(id, activeTab);
        setData(updatedData);
    };

    const handleAddPerson = (name) => {
        const updatedData = addPerson(name);
        setData(updatedData);
    };

    const handleRemovePerson = (id) => {
        const updatedData = removePerson(id);
        setData(updatedData);
    };

    const handleReset = () => {
        if (window.confirm('This will reset all scores and data to defaults. Are you sure?')) {
            const updatedData = clearStorage();
            setData(updatedData);
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
            <header className="mb-12 text-center animate-in fade-in slide-in-from-top duration-1000">
                <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl glass primary-gradient shadow-lg shadow-indigo-500/20">
                    <Trophy className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 p-4 text-gradient tracking-tight">
                    Death Rankings
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Tracking top f***ups across weekly, monthly, and yearly cycles.
                </p>
            </header>

            <main className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-1 w-full">
                        <AddPersonForm onAdd={handleAddPerson} />
                    </div>
                    <button
                        onClick={handleReset}
                        className="glass p-4 rounded-3xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all group flex items-center gap-2"
                        title="Reset to defaults"
                    >
                        <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                        <span className="md:hidden lg:inline">Reset</span>
                    </button>
                </div>

                <Leaderboard
                    data={data}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onIncrement={handleIncrement}
                    onRemove={handleRemovePerson}
                />
            </main>

            <footer className="mt-20 py-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>&copy; 2024 Idiot Leaderboard System. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
