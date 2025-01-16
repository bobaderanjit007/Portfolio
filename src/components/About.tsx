import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Download } from 'lucide-react'

export function About() {
  return (
    <section className="py-16 md:py-24" id="about">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">My introduction</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/2.jpg"
            alt="About"
            width={400}
            height={400}
            className="rounded-2xl mx-auto"
          />
          <div>
            <p className="text-muted-foreground mb-8 text-center md:text-left">
              Web developer, with extensive knowledge and years of experience, working in web technologies 
              and Ui / Ux design, delivering quality work.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">04+</h3>
                <p className="text-sm text-muted-foreground">Years<br />experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">40+</h3>
                <p className="text-sm text-muted-foreground">Completed<br />projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">18+</h3>
                <p className="text-sm text-muted-foreground">World wide<br />clients</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/assets/RanjitCV.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}