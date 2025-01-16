"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  })

  const [statusMessage, setStatusMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!formData.name || !formData.email || !formData.project) {
      setStatusMessage("Please fill in all required fields")
      setIsSuccess(false)
      setIsLoading(false)
      return
    }

    try {
      const result = await emailjs.sendForm(
        'service_bx167ci',
        'template_ss4j82r',
        formRef.current!,
        'JR-eFsHXd41bYXZQ5'
      )

      if (result.text === "OK") {
        setStatusMessage("Message sent successfully")
        setIsSuccess(true)
        setFormData({ name: "", email: "", project: "", message: "" })

        setTimeout(() => {
          setStatusMessage("")
        }, 5000)
      } else {
        throw new Error("Unexpected response from EmailJS")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      if (error) {
        setStatusMessage("There's an issue with the email service authentication. Please contact the administrator.")
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again later.")
      }
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground">Get in touch</p>
        </div>

        <div className="grid md:grid-cols-[1fr,2fr] gap-16 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Call me</h3>
                <p className="text-muted-foreground">999 888 777</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Maharastra, Phaltan - 415523</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium">
                Project
              </label>
              <Input
                id="project"
                name="project"
                placeholder="Project name"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={7}
              />
            </div>

            {statusMessage && (
              <p className={`text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
              </p>
            )}

            <Button type="submit" size="lg" className="rounded-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}