import { CheckIcon } from "@heroicons/react/20/solid"
import React from "react"

export default function Pricing() {
  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto text-center">
              <h2 className="mx-auto mb-2 max-w-xl text-xl font-bold tracking-tight md:text-4xl">
                NinjaTrader VPS Pricing
              </h2>
              <div className="mb-6 font-bold md:text-xl lg:mb-12">
                <p className="mb-4">Instant Deployment & Free Tech Support</p>
              </div>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="btn relative flex flex-col rounded-lg bg-neutral-900 bg-card px-6 py-4 text-left shadow">
                  <h3 className="mb-2 text-2xl font-bold">VPS Lite</h3>
                  <div className="flex items-center gap-2">
                    <s className="text-lg font-bold text-muted-foreground">
                      $38
                    </s>
                    <span className="text-4xl font-black">
                      $19
                      <span className="ml-2 text-base font-bold text-muted-foreground">
                        50% off first month
                      </span>
                    </span>
                  </div>
                  <ul className="mt-4 flex-1 text-center">
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>4x AMD vCPU</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>8GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>160GB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Instant Deployment</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Perfect For Running (1) Strategy</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://seoroast.org/"
                      className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6 w-full font-bold"
                    >
                      Deploy VPS Lite
                    </a>
                  </div>
                </div>
                <div className="btn relative flex flex-col rounded-lg bg-neutral-900 bg-card px-6 py-4 text-left shadow">
                  <h3 className="mb-2 text-2xl font-bold">VPS Pro</h3>
                  <div className="flex items-center gap-2">
                    <s className="text-lg font-bold text-muted-foreground">
                      $58
                    </s>
                    <span className="text-4xl font-black">
                      $29
                      <span className="ml-2 text-base font-bold text-muted-foreground">
                        50% off first month
                      </span>
                    </span>
                  </div>
                  <ul className="mt-4 flex-1 text-center">
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>8x AMD vCPU</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>8GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>160GB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Instant Deployment</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Perfect For Running (2-3) Strategy</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://seoroast.org/"
                      className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6 w-full font-bold"
                    >
                      Deploy VPS Pro
                    </a>
                  </div>
                </div>
                <div className="btn relative flex flex-col rounded-lg bg-neutral-900 border bg-card px-6 py-4 text-left shadow border-primary">
                  <div className="absolute inset-x-0 -top-4 mx-auto w-fit rounded-full bg-primary px-3 py-1 font-bold text-white">
                    Popular
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">VPS Max</h3>
                  <div className="flex items-center gap-2">
                    <s className="text-lg font-bold text-muted-foreground">
                      $128
                    </s>
                    <span className="text-4xl font-black">$39</span>
                  </div>
                  <ul className="mt-4 flex-1 text-center">
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>12x AMD vCPU</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>8GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>160GB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Instant Deployment</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Perfect For Running (4-7) Strategy</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://get.magicspace.agency/monitoring"
                      className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6 w-full font-bold"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="btn relative flex flex-col rounded-lg bg-neutral-900 bg-card px-6 py-4 text-left shadow">
                  <h3 className="mb-2 text-2xl font-bold">VPS Ultra</h3>
                  <div className="flex items-center gap-2">
                    <s className="text-lg font-bold text-muted-foreground">
                      $167
                    </s>
                    <span className="text-4xl font-black">$49</span>
                  </div>
                  <ul className="mt-4 flex-1 text-center">
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>24x AMD vCPU</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>32GB DDR4 RAM</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>1TB NVMe Storage</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Instant Deployment</span>
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <CheckIcon
                        color="rgb(34 197 94)"
                        width={20}
                        height={20}
                      />
                      <span>Perfect For Running (8+) Strategy</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      href="https://get.magicspace.agency/retainer"
                      className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6 w-full font-bold"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
