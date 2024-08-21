import React from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  feature: any;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, feature }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out" 
         style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        &times;
      </button>
      <h2 className="text-lg font-bold mb-4">Feature Information</h2>
      {feature && Object.entries(feature.getProperties()).map(([key, value]) => (
        key !== 'geometry' && (
          <p key={key} className="mb-2">
            <strong>{key}:</strong> {String(value)}
          </p>
        )
      ))}
    </div>
  );
};

export default Drawer;