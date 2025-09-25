import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external = false,
  className = '',
  ...props
}) => {
  const baseClass = 'button';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <a
        href={href}
        className={classes}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;