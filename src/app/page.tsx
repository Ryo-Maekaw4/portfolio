import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"


// import { ScrollArea } from "@/components/ui/scroll-area"

const Tools: Array<string> = [
  // 'mac', 'php', 'html', 'mysql', 'postgres', 'microsoft sql server', 'oracle'
  'Mac', 'PHP', 'zendframework', 'Laravel10', 'MySQL', 'JIRA', 'Confluence', 'Git', 'Slack', 'Gather'
];

const Careers = {
  1: {
    'period_from': '2023-07',
    'period_to': '2024-07',
    'project': 'D社toCサービスシステム開発・保守',
    'detail': '■概要\n顧客の自社サービスのシステム基盤のモダナイズ及び、セキュリティ強化と保守性の担保\n\n■作業詳細\n・モダナイズ対象機能の調査、仕様書作成\n・プログラムコーディング\n・テスト設計\r\n・単体テスト、結合テスト\r\n・モダナイズ外の機能の改修対応',
    'member': '9',
    'tools': Tools,
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
    'tools': '',
    'position': 'SE',
    'fase': {
      1: ['基本設計', '詳細設計', '開発', 'テスト', '保守運用']
    }
  }
}

const calcMonths = (period_from: string, period_to: string) => {
  const from = new Date(period_from);
  const to = new Date(period_to);
  const diff = to.getTime() - from.getTime();
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  return months;
}

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center p-8 w-full ">
      <div className="">
        <Card className="max-w-md w-full shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="flex">
              <Avatar>
                <AvatarImage src="/assets/img/avatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="text-3xl font-bold mb-2">Ryo Maekawa</h1>
            </div>
            <p className="text-gray-600">システムエンジニア / PHP, Laravel, React 勉強中</p>
          </CardContent>
        </Card>
      </div>

      <div className="w-full">
        <Card className="w-full shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <h1>Careers</h1>
            {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4"> */}
            <Accordion type="single" collapsible>
              {Object.keys(Careers).map((key) => {
                const data = Careers[Number(key) as keyof typeof Careers];
                  return (
                    <AccordionItem key={key} value={key}>
                      <AccordionTrigger>
                        <p className="font-bold">{data.project} {data.period_from} ~ {data.period_to}（{calcMonths(data.period_from, data.period_to)}ヶ月）</p>
                      </AccordionTrigger>
                      <AccordionContent key={key}>
                        <p>メンバー数: {data.member}</p>
                        <p>ポジション: {data.position}</p>
                        <div className="grid grid-cols-3">
                          <Card className="col-span-2 rounded-2xl">
                            <CardContent className="p-6">
                              <p className="text-gray-600 whitespace-pre-wrap">{data.detail}</p>
                            </CardContent>
                          </Card>

                          <Card className="rounded-2xl">
                            <CardContent className="p-6">
                              <p>担当フェーズ</p>
                              <ul className="list-disc list-inside">
                                {Object.values(data.fase).flat().map((fase, index) => (
                                  <li key={index}>{fase}</li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>

                        <Card className="rounded-2xl">
                          <CardContent className="p-6">
                            <p>使用ツール</p>
                            {Object.values(data.tools).flat().map((tool, index) => (
                              <Badge key={index} variant="outline">{tool}</Badge>
                            ))}
                          </CardContent>
                        </Card>


                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
            </Accordion>
            {/* </ScrollArea> */}

          </CardContent>
        </Card>
      </div>

    </main>
  );
}
