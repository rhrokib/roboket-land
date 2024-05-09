'use client';
import React, { useState } from 'react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`ml-2 ${isOpen ? 'text-green-500' : ''}`}>
          {isOpen ? '👇' : '👉'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
}
