import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

const Skills = {
  'php': 'php',
  'html': 'html',
  'mysql': 'mysql',
  'postgres': 'postgres',
  'microsoft sql server': 'microsoft sql server',
  'oracle': 'oracle'
}

const Careers = {
  1: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
  2: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
  3: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
  4: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
  5: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
  6: {
    'period_from': '2025-08',
    'period_to': 'now',
    'project': 'BtoB中間システム保守運用',
    'detail': '',
    'member': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  },
}

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center p-8">
      <div className="flex">
        <Card className="max-w-md w-full shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="text-3xl font-bold mb-2">Ryo Maekawa</h1>
            </div>
            <p className="text-gray-600">システムエンジニア / PHP, Laravel, React 勉強中</p>
          </CardContent>
        </Card>

        <Card className="max-w-md w-full shadow-xl rounded-2xl">
          <CardContent className="p-6">
            {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4"> */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Careers</AccordionTrigger>
                {Object.keys(Careers).map((key) => {
                  return (
                    <AccordionContent key={key}>
                      {Careers[key].project} {Careers[key].period_from} ~ {Careers[key].period_to}
                    </AccordionContent>
                  )
                })}
              </AccordionItem>
            </Accordion>
            {/* </ScrollArea> */}

          </CardContent>
        </Card>
      </div>

    </main>
  );
}
