"use client"

import { useState } from "react"
import { ChevronDown, Code2, Database, GitBranch } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const [openSection, setOpenSection] = useState<string>("frontend")

  const skills = {
    frontend: {
      title: "Frontend technologies",
      subtitle: "More than 2 years",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "Bootstrap", level: 85 },
        { name: "React Js", level: 80 },
        { name: "Angular Js", level: 60 },
      ]
    },
    backend: {
      title: "Backend technologies",
      subtitle: "More than 1 year",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 80 },
        { name: "Django", level: 70 },
        { name: "C++", level: 75 },
        { name: "Node Js", level: 70 },
        { name: "C#", level: 60 },
        { name: "MySQL", level: 90 },
      ]
    },
    other: {
      title: "Other technologies",
      subtitle: "More than 1 year",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 75 },
        { name: "Canva", level: 85 },
      ]
    }
  }

  return (
    <section className="py-16 md:py-24" id="skills">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">My technical level</p>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto">
          {Object.entries(skills).map(([key, section]) => (
            <Card key={key} className="border-2">
              <CardHeader
                className="cursor-pointer"
                onClick={() => setOpenSection(openSection === key ? "" : key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {section.icon}
                    <div>
                      <CardTitle>{section.title}</CardTitle>
                      <CardDescription>{section.subtitle}</CardDescription>
                    </div>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-6 w-6 transition-transform",
                      openSection === key && "transform rotate-180"
                    )} 
                  />
                </div>
              </CardHeader>
              <CardContent
                className={cn(
                  "grid gap-4 transition-all",
                  openSection === key ? "block" : "hidden"
                )}
              >
                {section.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

