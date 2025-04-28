import React from 'react';
import clsx from 'clsx';

interface StepBarProps {
  steps: string[];
  activeIndexes: number[];
}

export const StepBar: React.FC<StepBarProps> = ({ steps, activeIndexes }) => {
  return (
    <div className="flex overflow-x-auto">
      {steps.map((label, index) => {
        const isActive = activeIndexes.includes(index);

        return (
          <div
            key={label}
            className='flex-shrink-0 w-18 h-8 flex items-center justify-center text-xs font-medium'
          >

            <div
              className={clsx(
                'w-0 h-0 border-y-[8px] border-l-[6px] border-x-transparent z-10',
                isActive ? 'border-teal-400 text-black-400' : 'border-gray-100 text-gray-400'
              )}
            />
            <span className={clsx(
              'h-4 w-24 flex items-center justify-center',
              isActive ? 'bg-teal-400 text-black-400' : 'bg-gray-100 text-gray-400'
            )}>{label}</span>
            {/* 右側の矢印の形状 */}
            <div
              className={clsx(
                'w-0 h-0 border-y-[8px] border-l-[6px] border-y-transparent z-10',
                isActive ? 'border-teal-400 text-black-400' : 'border-gray-100 text-gray-400'
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
