"use client"

import Image from "next/image"
import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Lakhan Bichukale",
    role: "Client",
    image: "/assets/lakhan.png",
    content: "Outstanding service! Ranjit transformed my site beautifully. Their expertise and creativity truly impressed me."
  },
  {
    name: "Rutik Kapare",
    role: "Client",
    image: "/assets/rutik.png",
    content: "Exemplary service! Ranjit combined creativity to deliver a visually stunning, high-performing website"
  },
  {
    name: "Ketan Shinde",
    role: "Client",
    image: "/assets/ketan.png",
    content: "Highly impressed! Ranjit skillfully crafted a captivating website that perfectly represents my brand."
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Testimonial</h2>
          <p className="text-muted-foreground">My client saying</p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{testimonial.content}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious  className="left-2 sm:-left-12 lg:-left-12" />
          <CarouselNext  className="right-2 sm:-right-12 lg:-right-12"/>
        </Carousel>
      </div>
    </section>
  )
}