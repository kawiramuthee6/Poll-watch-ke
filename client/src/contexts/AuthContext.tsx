import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on app load
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token to get user info (simple decode, in production use proper JWT library)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          id: payload.user.id,
          name: payload.user.name || '',
          email: payload.user.email || '',
          role: payload.user.role,
        });
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Login failed');
    }

    localStorage.setItem('token', data.token);
    // Decode token to set user
    const payload = JSON.parse(atob(data.token.split('.')[1]));
    setUser({
      id: payload.user.id,
      name: payload.user.name || '',
      email: payload.user.email || '',
      role: payload.user.role,
    });
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.msg || 'Registration failed');
    }

    localStorage.setItem('token', data.token);
    // Decode token to set user
    const payload = JSON.parse(atob(data.token.split('.')[1]));
    setUser({
      id: payload.user.id,
      name: payload.user.name || '',
      email: payload.user.email || '',
      role: payload.user.role,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};