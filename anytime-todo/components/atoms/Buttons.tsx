import React from 'react';

interface ButtonsProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string;
  type?: "button" | "submit" | "reset";
}

const Buttons: React.FC<ButtonsProps> = ({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Buttons;
