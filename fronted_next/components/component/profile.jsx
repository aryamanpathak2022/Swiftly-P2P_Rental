"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from 'react';

export function Profile() {
  const [user, setUser] = useState({ fullname: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder-user.jpg" />
         
        </Avatar>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{user.fullName}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div className="grid w-full gap-2">
          <Button variant="outline">Change Password</Button>
          <Button>Edit Profile</Button>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue={user.fullName} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={user.email} />
        </div>
      </div>
    </div>
  );
}
