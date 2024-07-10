"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Item_form() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [rent, setRent] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("jwtToken"); // Assuming token is stored in local storage
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("product_image", image);
    formData.append("per_day_rent", rent);

    try {
      const response = await axios.post("https://swiftly-p2p-rental.onrender.com/swiftly/product/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        router.replace("/items/bulk");
      }
    } catch (error) {
      console.error("Error uploading item:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add New Rental</CardTitle>
          <CardDescription>Fill out the details to list your rental.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Rental Name
              </Label>
              <Input
                id="name"
                placeholder="Cozy Mountain Cabin"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-sm font-medium">
                Upload Image
              </Label>
              <Input
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rent" className="text-sm font-medium">
                Rent per Day
              </Label>
              <Input
                id="rent"
                type="number"
                placeholder="$150"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Upload</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
