import { Link, createFileRoute } from '@tanstack/react-router'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-24">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader className="items-center gap-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              edges.studio
            </CardTitle>
            <CardDescription>
              We are rebuilding our home page. Stay tuned for updates.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            In the meantime, you can review our legal policies below.
          </p>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button asChild className="w-full">
            <a href="mailto:info@edges.studio">Contact us</a>
          </Button>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
