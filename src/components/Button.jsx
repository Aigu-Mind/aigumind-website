import React from 'react'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white focus:ring-gray-500',
    outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
