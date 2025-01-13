"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Ecommerce Website",
    description: "Shop and explore products on our user-friendly Angular e-commerce platform.",
    image: "/projectImg/ecommerce.png",
    link: "https://angular-ecommerce-app-gold.vercel.app/"
  },
  {
    title: "Food Recipe Website",
    description: "Developed an Angular-based food recipe collection with step-by-step instructions.",
    image: "/projectImg/foodrecipe.png",
    link: "https://angular-food-recipe-app.vercel.app/"
  },
  {
    title: "Image Search Engine",
    description: "Developing an React Image Search App with Free unsplash API.",
    image: "/projectImg/imageSearch.png",
    link: "https://react-image-search-engine.vercel.app/"
  },
  {
    title: "Anime Pic Generator",
    description: "Generate diverse anime pictures with our dynamic and fun random image generator.",
    image: "/projectImg/anime.jpeg",
    link: "https://bobaderanjit007.github.io/Anime-pic-generator.github.io/"
  }
]

export function Portfolio() {
  return (
    <section className="py-16 md:py-24" id="projects">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Most recent work</p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader className="p-0">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <Button asChild>
                      <Link href={project.link} target="_blank">
                        Demo →
                      </Link>
                    </Button>
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

