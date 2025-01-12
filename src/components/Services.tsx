"use client"

import { useState } from "react"
import { Check, LayoutGrid, Pen,Code2, X } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Services() {
  const services = [
    {
      icon: <LayoutGrid className="h-6 w-6" />,
      title: "Ui/Ux Designer",
      description: [
        "Understand your users' needs and goals.",
        "Create low-fidelity and high-fidelity prototypes of your designs.",
        "Create the look and feel of your designs.",
        "Test your designs with users to see how easy they are to use.",
      ]
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Web Development",
      description: [
        "Create the visual look and feel of a website.",
        "Turn the designs into working software.",
        "Optimize the website for search engines.",
        "Keep the website up and running.",
      ]
    },
    {
      icon: <Pen className="h-6 w-6" />,
      title: "Content Creation",
      description: [
        "Write clear, concise, and engaging content.",
        "Make improvements to your content based on analytics data.",
        "Proofread and correct content for errors.",
        "Use content to attract and engage visitors.",
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground">What i offer</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group">
              <CardHeader>
                <div className="text-primary mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="px-0">
                      View More →
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{service.title}</DialogTitle>
                    </DialogHeader>
                    <ul className="grid gap-4">
                      {service.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

