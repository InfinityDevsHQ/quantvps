import { StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import React from "react"

export default function TestimonialsTop() {
  return (
    <div className="mx-auto space-y-4 lg:block pt-1 overflow-hidden">
      <div className="flex gap-4 justify-evenly">
        <div className="highlight-card flex items-center gap-2 whitespace-nowrap rounded-lg border border-black/5 bg-black/5 py-1 pl-2 pr-3 font-bold text-card-foreground shadow">
          <Image
            alt="Boat Builder avatar"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow "
            src="/profile-img-1.png"
          />
          <div>
            <div className="text-sm font-bold text-card-foreground">
              Their insights are invaluable!
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-card-foreground">
              <div className="flex items-center">
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
              </div>
              Founder at LocalPortal
            </div>
          </div>
        </div>
        <div className="highlight-card flex items-center gap-2 whitespace-nowrap rounded-lg border border-black/5 bg-black/5 py-1 pl-2 pr-3 font-bold text-card-foreground shadow">
          <Image
            alt="Ernest avatar"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow "
            // style="color: transparent"
            src="/profile-img-2.png"
          />
          <div>
            <div className="text-sm font-bold text-card-foreground">
              {`If there's anyone I have confidence in, it's NinjaTraders.`}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-card-foreground">
              <div className="flex items-center">
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
              </div>
              Founder at Galactic Crew
            </div>
          </div>
        </div>
        <div className="highlight-card flex items-center gap-2 whitespace-nowrap rounded-lg border border-black/5 bg-black/5 py-1 pl-2 pr-3 font-bold text-card-foreground shadow">
          <Image
            alt="Nico avatar"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow "
            // style="color: transparent"
            src="/profile-img-3.png"
          />
          <div>
            <div className="text-sm font-bold text-card-foreground">
              I would highly recommend them!
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-card-foreground">
              <div className="flex items-center">
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
              </div>
              Founder at Talknotes
            </div>
          </div>
        </div>
        <div className="highlight-card flex items-center gap-2 whitespace-nowrap rounded-lg border border-black/5 bg-black/5 py-1 pl-2 pr-3 font-bold text-card-foreground shadow">
          <Image
            alt="Rafal avatar"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            data-nimg="1"
            className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow "
            // style="color: transparent"
            src="/profile-img-4.png"
          />
          <div>
            <div className="text-sm font-bold text-card-foreground">
              {`Don't miss out.`}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-card-foreground">
              <div className="flex items-center">
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
                <StarIcon width={16} height={16} color="yellow" />
              </div>
              Founder
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
