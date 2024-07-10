"use client"
import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://swiftly-p2p-rental.onrender.com/swiftly/signupp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('jwtToken', data.tokens.access);
      localStorage.setItem('user', JSON.stringify({
        username: data.user.username,
        fullName: formData.fullName,
        email: data.user.email
      }));

      // Redirect or update the UI as needed
      // rediredt to items/bulk
    
        router.replace('/items/bulk');
      
    

    } else {
      // Handle error
      console.error('Signup failed');
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Create Your Account</h1>
          <p className="mt-2 text-muted-foreground">Enter your full name, email, and password to sign up.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="fullName" className="block text-sm font-medium text-muted-foreground">
              Full Name
            </Label>
            <div className="mt-1">
              <Input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Email address
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
