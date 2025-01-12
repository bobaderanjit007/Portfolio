"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Palette } from 'lucide-react'
import { useTheme } from "next-themes"

export function Hero() {

  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Black hole video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rotate-180 opacity-30"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Content */}
      <div className="container mx-auto px-2 pt-20 md:pt-12 relative z-10">
        {/* Hello World text */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm">
            {'<'} Hello World {'>'}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://dribbble.com" target="_blank" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Palette className="h-6 w-6" />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight sm:text-6xl">
                Hi, I&apos;m Ranjit
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full stack developer
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                High level experience web design and knowledge, producing quality work.
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8"
              >
                Contact Me →
              </Button>
            </div>
          </div>

          {/* Profile Image with Blob Background */}
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto ">
            <Image
              src={`/images/${theme === "dark" ? "mainIconsdark.svg" : "mainIcons.svg"}`} alt="work icons"
              height={650}
              width={650}
            />
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            Scroll down
          </div>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

