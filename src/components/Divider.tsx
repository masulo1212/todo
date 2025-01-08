import { ReactNode } from 'react';

interface DividerProps {
  children?: ReactNode;
}

export const Divider = ({ children }: DividerProps) => {
  return (
    <div className="border-y border-y-2 border-gray-300 py-4 space-y-4">
      {children}
    </div>
  );
};
