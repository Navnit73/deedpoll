import React, { useState, useEffect, useRef } from 'react';
import { PaymentDetails } from '@/types/payment';

interface PaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: PaymentDetails) => void;
}

export function PaymentDialog({ isOpen, onClose, onSubmit }: PaymentDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setErrors({});
      // Auto focus on open
      setTimeout(() => nameInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (name.trim().length > 80) {
      newErrors.name = 'Name must be less than 80 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name: name.trim(), email: email.trim() });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 id="modal-title" className="text-xl font-bold text-gray-900">
            Your Details
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Please provide your details to receive your digital deed poll.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              ref={nameInputRef}
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-[#1d70b8]/20 focus:border-[#1d70b8]'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                  : 'border-gray-300 focus:ring-[#1d70b8]/20 focus:border-[#1d70b8]'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="pt-4 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d70b8] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#1d70b8] rounded-lg hover:bg-[#003078] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d70b8] transition-colors shadow-sm disabled:opacity-50"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
