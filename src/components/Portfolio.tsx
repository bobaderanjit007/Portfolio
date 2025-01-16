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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Github } from "lucide-react"

type projectType = {
  title: string,
  description: string,
  image: string,
  link: string,
  repoLink: string | null,
}

type ProjectCardProps = {
  project: projectType;
};

const projects: projectType[] = [
  {
    title: "Gym Management System",
    description: "A full-stack gym platform offering workout plans, membership management, and progress tracking, built with Next.js, Go, Tailwind CSS, Shadcn, and Postgres.",
    image: "/projectImg/stayfit.png",
    link: "https://stayfit-rfc.vercel.app",
    repoLink: null,
  },
  {
    title: "Pet Care Website",
    description: "A comprehensive pet care platform for pet owners, featuring services like grooming, health tracking, and adoption listings. Built with Next.js, Tailwind CSS, Prisma, and Shadcn.",
    image: "/projectImg/petcare.png",
    link: "https://next-js-pet-care-app.vercel.app/",
    repoLink: "https://github.com/bobaderanjit007/NextJs_PetCareApp"
  },
  {
    title: "Food Recipe Website",
    description: "An intuitive React-based food recipe collection with step-by-step cooking instructions, filtering options, and user-friendly design.",
    image: "/projectImg/foodrecipe.png",
    link: "https://react-fast-food-recipe.vercel.app/",
    repoLink: "https://github.com/bobaderanjit007/React_FastFoodRecipe"
  },
  {
    title: "Ecommerce Website",
    description: "Explore and shop for products on a user-friendly Angular e-commerce platform with categories, product details, and seamless checkout functionality.",
    image: "/projectImg/ecommerce.png",
    link: "https://angular-ecommerce-app-gold.vercel.app/",
    repoLink: "https://github.com/bobaderanjit007/Angular_EcommerceApp"
  },
  {
    title: "Image Search Engine",
    description: "A powerful React Image Search App with integration to the Free Unsplash API, offering real-time image searches and user-friendly navigation.",
    image: "/projectImg/imageSearch.png",
    link: "https://react-image-search-engine.vercel.app/",
    repoLink: "https://github.com/bobaderanjit007/React_Image_Search_Engine"
  },
  {
    title: "Anime Pic Generator",
    description: "Generate diverse anime pictures with dynamic filters and themes using this fun random image generator built with modern web technologies.",
    image: "/projectImg/anime.jpeg",
    link: "https://bobaderanjit007.github.io/Anime-pic-generator.github.io/",
    repoLink: "https://github.com/bobaderanjit007/Anime-pic-generator.github.io"
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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 h-full">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12 lg:-left-12" />
          <CarouselNext className="right-2 sm:-right-12 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  )
}


function ProjectCard({ project }: ProjectCardProps){

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4">
          {`${project.description.slice(0, 90)}...`}
        </CardDescription>
        <div className="mt-auto flex justify-between items-center">
          <Button asChild>
            <Link href={project.link} target="_blank">
              Demo →
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">More Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription className="pt-2">{project.description}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {project.repoLink ? (
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    <Link 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View on GitHub
                    </Link>
                  </div>
                ): (<small>Repository link is not available!</small>)}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}