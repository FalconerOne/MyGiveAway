// Auto-patched stub for critical UI components
import React from 'react';

export const Select = ({ children }: { children: React.ReactNode }) => <select>{children}</select>;
export const Input = ({ ...props }: any) => <input {...props} />;
export const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
export const Card = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const Label = ({ children, ...props }: any) => <label {...props}>{children}</label>;
export const Switch = ({ ...props }: any) => <input type="checkbox" {...props} />;
export const ProgressBar = ({ value }: { value: number }) => <progress value={value} max={100} />;
export const Dialog = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const Tooltip = ({ children }: { children: React.ReactNode }) => <span>{children}</span>;
export const Toast = ({ message }: { message: string }) => <div>{message}</div>;
