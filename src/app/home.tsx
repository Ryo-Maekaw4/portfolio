// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <Card className="bg-muted text-foreground shadow-xl">

        <CardContent className="p-6">
        <h1 className="text-4xl font-dela">Ryo Maekawa</h1>
          <p className="text-gray-600 font-dela">システムエンジニア / PHP, Laravel, React</p>
        </CardContent>
      </Card>
    </main>
  );
}
