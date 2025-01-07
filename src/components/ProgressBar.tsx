import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="relative pt-1">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mt-2 text-xs flex rounded bg-blue-100">
        <div
          style={{ width: `${percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
        />
      </div>
    </div>
  );
}