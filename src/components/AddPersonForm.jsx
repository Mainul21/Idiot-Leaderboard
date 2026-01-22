import React, { useState } from 'react';
import { UserPlus, Send } from 'lucide-react';

const AddPersonForm = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name.trim());
            setName('');
        }
    };

    return (
        <div className="glass p-6 rounded-3xl mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 w-full relative">
                    <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name to add to leaderboard..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!name.trim()}
                    className="w-full md:w-auto px-8 py-3 rounded-2xl primary-gradient text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
                >
                    Add Person
                    <Send className="w-4 h-4" />
                </button>
            </form>
        </div>
    );
};

export default AddPersonForm;
