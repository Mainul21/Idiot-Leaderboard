import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import { AnimatePresence, motion } from 'framer-motion';

const Leaderboard = ({ data, activeTab, onTabChange, onIncrement, onRemove }) => {
    const sortedData = [...data].sort((a, b) => b[activeTab] - a[activeTab]);

    return (
        <div className="space-y-6">
            <div className="flex p-1.5 glass rounded-xl self-start w-fit mx-auto md:mx-0">
                {['weekly', 'monthly', 'yearly'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={`
              px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize
              ${activeTab === tab
                                ? 'primary-gradient text-white shadow-lg'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'}
            `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="glass rounded-3xl overflow-hidden min-h-[400px]">
                <div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-7">User</div>
                    <div className="col-span-2 text-center">Score</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>

                <div className="p-2 space-y-1 relative">
                    <AnimatePresence mode="popLayout">
                        {sortedData.map((item, index) => (
                            <LeaderboardItem
                                key={item.id}
                                item={item}
                                rank={index + 1}
                                activeScore={item[activeTab]}
                                onIncrement={() => onIncrement(item.id)}
                                onRemove={() => onRemove(item.id)}
                            />
                        ))}
                    </AnimatePresence>

                    {sortedData.length === 0 && (
                        <div className="py-20 text-center text-slate-500">
                            No participants yet. Add someone to start tracking!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
