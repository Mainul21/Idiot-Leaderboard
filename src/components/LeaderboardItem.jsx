import { motion } from 'framer-motion';
import { Plus, Medal, Trash2 } from 'lucide-react';

const LeaderboardItem = ({ item, rank, activeScore, onIncrement, onRemove }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-12 items-center px-4 py-3 rounded-2xl glass-hover group transition-colors"
        >
            <div className="col-span-1 flex justify-center">
                {rank <= 3 ? (
                    <div className={`
            w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
            ${rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                            rank === 2 ? 'bg-slate-300/20 text-slate-300' :
                                'bg-amber-600/20 text-amber-600'}
          `}>
                        {rank}
                    </div>
                ) : (
                    <span className="text-slate-500 font-medium">{rank}</span>
                )}
            </div>

            <div className="col-span-7 flex items-center gap-3">
                <div className="relative">
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10"
                    />
                    {rank === 1 && (
                        <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-0.5 shadow-lg">
                            <Medal className="w-3 h-3 text-black" />
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {item.name}
                    </h3>
                    <span className="text-xs text-slate-500">Active Performer</span>
                </div>
            </div>

            <div className="col-span-2 text-center">
                <span className="text-xl font-bold font-mono text-gradient">
                    {activeScore}
                </span>
            </div>

            <div className="col-span-2 text-right flex justify-end gap-2">
                <button
                    onClick={onIncrement}
                    className="p-2 rounded-xl bg-white/5 hover:bg-indigo-500 hover:text-white transition-all duration-300 active:scale-95 group/btn"
                    title="Increment Score"
                >
                    <Plus className="w-5 h-5" />
                </button>
                <button
                    onClick={onRemove}
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 active:scale-95 opacity-0 group-hover:opacity-100"
                    title="Remove Person"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
};

export default LeaderboardItem;
