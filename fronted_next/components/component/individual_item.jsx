
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Individual_item() {
  return (
    (<div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-primary">Hosted by John Doe</div>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">Hosted by John Doe</div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Item Image"
          width={800}
          height={500}
          className="w-full h-[400px] object-cover" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-2xl font-bold">$50 / day</div>
        <Button size="lg">Rent Now</Button>
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
    </div>)
  );
}

function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
