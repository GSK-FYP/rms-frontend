import React from 'react';

interface InitialAvatarProps {
  name: string;
  size?: number;
  fontSize?: number;
  backgroundColor?: string;
}

const InitialAvatar: React.FC<InitialAvatarProps> = ({
  name,
  size = 40,
  fontSize = 16,
  backgroundColor = '#3498db',
}) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const textColor = '#ffffff'; // White text

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: textColor,
        fontSize: `${fontSize}px`,
        fontWeight: 'bold',
      }}
    >
      {initials}
    </div>
  );
};

export default InitialAvatar;