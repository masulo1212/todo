interface BackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="min-h-dvh bg-gray-50 flex items-center justify-center p-4">
      {children}
    </div>
  );
};
