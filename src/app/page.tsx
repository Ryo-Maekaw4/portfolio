// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <Card className="bg-muted text-foreground shadow-xl">

        <CardContent className="p-6">
        <h1 className="text-4xl font-extrabold text-center mb-2">Ryo Maekawa</h1>
          <p className="">PHP, Laravel, React</p>
        </CardContent>
      </Card>
    </main>
  );
}
