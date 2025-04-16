// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <Card className="max-w-md w-full shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-2">前川 凌</h1>
          <p className="text-gray-600">システムエンジニア / PHP, Laravel, React 勉強中✨</p>
        </CardContent>
      </Card>
    </main>
  );
}
