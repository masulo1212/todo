import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="relative pt-1">
      <div className="flex items-center">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600">
            {percentage}%
          </span>
        </div>
        <div className="flex-grow overflow-hidden h-3 text-xs flex rounded-full bg-blue-100">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 rounded-full transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
