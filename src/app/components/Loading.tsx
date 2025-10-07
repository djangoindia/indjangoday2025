'use client';

import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ size = 'md', text = 'Loading...' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-yellow-500`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-600 font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
}
