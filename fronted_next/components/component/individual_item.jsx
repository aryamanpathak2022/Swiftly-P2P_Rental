"use client"
import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname } from 'next/navigation';

export function Individual_item() {

  const pathname=usePathname()

  const itemId = pathname.split('/').pop();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        
        const response = await fetch("https://swiftly-p2p-rental.onrender.com/swiftly/product/1");
        const data = await response.json();
        setItemData(data);
        setLoading(false);
        // console.log(pathname);
      } catch (error) {
        console.error('Error fetching item data:', error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, [itemId]);


const handleClick = async () => {
    const jwtToken = localStorage.getItem('jwtToken');

    try {
      const response = await fetch(`https://swiftly-p2p-rental.onrender.com/swiftly/rent-product/${itemId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        // You can add a body here if your backend expects it
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const data = await response.json();
        setItemData(data);
        alert('Product rented successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error renting product:', error);
      alert('An error occurred while renting the product.');
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!itemData) {
    return <div>Error loading item data</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-primary">Hosted by {itemData.owner.fullName}</div>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">Hosted by {itemData.owner.fullName}</div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src={"/placeholder.svg"}
          alt="Item Image"
          width={800}
          height={500}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-2xl font-bold">${itemData.per_day_rent} / day</div>
        <Button onClick={handleClick} size="lg" >Rent Now</Button>
      </div>
      <Separator className="my-6" />
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Reviews</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Jane Doe</div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The item was exactly as described and the owner was very responsive. I had a great experience and
                  would rent from them again.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium">John Smith</div>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  I had a great experience renting this item. The owner was very helpful and the item was in excellent
                  condition. I would definitely rent from them again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  );
}
