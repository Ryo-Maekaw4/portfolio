import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { StepBar } from "@/components/ui/step-bar";


// import { ScrollArea } from "@/components/ui/scroll-area"

const Fases: Record<number, string> = {
  1: '調査分析',
  2: '要件定義',
  3: '基本設計',
  4: '詳細設計',
  5: '開発',
  6: '単体試験',
  7: '結合試験',
  8: '総合試験',
  9: '運用保守'
};


const Os: Record<number, string> = {
  1: 'windows',
  2: 'mac'
};

const Careers = {
  1: {
    'period_from': '2023/07',
    'period_to': '2024/07',
    'project': 'D社toCサービスシステム開発・保守',
    'detail': '■概要\n顧客の自社サービスのシステム基盤のモダナイズ及び、セキュリティ強化と保守性の担保\n\n■作業詳細\n・モダナイズ対象機能の調査、仕様書作成\n・プログラムコーディング\n・テスト設計\r\n・単体テスト、結合テスト\r\n・モダナイズ外の機能の改修対応',
    'member': 9,
    'os': Os[2],
    'lang': ['php', 'mysql'],
    'tools': ['zendframework', 'Laravel10', 'JIRA', 'Confluence', 'Slack', 'Gather'],
    'position': 'SE',
    'fase': [1, 5, 6].map((key) => Fases[key])
  },
  2: {
    'period_from': '2023/04',
    'period_to': '2023/06',
    'project': 'リペアサービス事業のマッチングシステム構築',
    'detail': '■概要\n企業と加盟店間のB2Bリペアサービス案件のマッチングを行うシステムの設計\n\n■作業詳細\n・詳細設計ドキュメント作成\n・画面設計\n・テーブル設計\n',
    'member': 9,
    'os': Os[1],
    'lang': [],
    'tools': ['Slack', 'Backlog'],
    'position': 'SE',
    'fase': [1].map((key) => Fases[key])
  },
  3: {
    'period_from': '2023/01',
    'period_to': '2023/03',
    'project': '企業向け学習講座配信サイトの開発',
    'detail': '■概要\n1次フェーズ2次フェーズと分かれており\n1次フェーズの全体的な改修作業\n\n■作業詳細\n・詳細設計書作成\n・2次フェーズに向けフロントとバックの要改修箇所の調査\n・調査内容に基づくリファクタリング\n・開発環境の改善(slackへのgit通知機能作成、コード整形導入)',
    'member': 5,
    'os': Os[2],
    'lang': ['php'],
    'tools': ['Laravel8', 'Docker', 'Slack', 'Backlog', 'VSCode', 'Sourcetree'],
    'position': 'SE',
    'fase': [1, 5].map((key) => Fases[key])
  },
  4: {
    'period_from': '2022/08',
    'period_to': '2022/12',
    'project': '食品宅配サイト改修',
    'detail': '■概要\n食品宅配サイトの機能改修\n\n■作業詳細\n・検索機能の改修内容の調査\n・テストケース作成\n・非同期APIの負荷調査、及びリファクタリング\n',
    'member': 4,
    'os': Os[2],
    'lang': ['php'],
    'tools': ['Windows', 'Laravel8', 'Docker', 'Slack', 'VSCode', 'Dbeaver',],
    'position': 'SE',
    'fase': [1, 5].map((key) => Fases[key])
  },
  5: {
    'period_from': '2021/12',
    'period_to': '2022/07',
    'project': '美容系サロン向けECサイト連携システム',
    'detail': '■概要\necforceと連携したサロン専売品販売システムの開発\n\n\n■作業詳細\n・APIドキュメントツールの調査\n・使用ツールの調査、選定\n・ECサイトとのAPI仕様の調査\n・テーブル設計、ER図の作成\n・APIの作成（55本）、テスト（UnitTest）\n・バッチ作成\n',
    'member': 4,
    'os': Os[2],
    'lang': ['php', 'mysql'],
    'tools': ['Ubuntu20.04LTS', 'Laravel9', 'CloudSQL for MySQL(8.0)', 'L5-Swagger', 'Slack', 'Trello', 'Sourcetree', 'VSCode', 'DBeaver', 'A5:SQL Mk-2'],
    'position': 'SE',
    'fase': [1, 3, 5, 6, 8].map((key) => Fases[key])
  },
  6: {
    'period_from': '2021/02',
    'period_to': '2021/11',
    'project': '大学向けオンライン出願システム開発支援、改修',
    'detail': '■概要\n大学向けオンライン出願システム各種申込画面、管理画面\nの追加改修\n\n\n■作業詳細\n・EXCELによる回帰テスト仕様書作成\n・追加機能の詳細設計書作成\n・管理画面の検索機能に検索項目を追加\n・年度毎の試験内容に合わせた申込画面改修\n　出願者の入力項目を追加、バリデーションを更新\n　出願可能試験の変更、試験日と会場のパターン変更\n　複数出願時の検定料計算を改修',
    'member': 10,
    'os': Os[1],
    'lang': ['php7.2', 'mysql'],
    'tools': ['Laravel4', 'Phpstorm'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  7: {
    'period_from': '2020/08',
    'period_to': '2021/01',
    'project': '不動産向け管理システムの開発改修',
    'detail': '■概要\n不動産事業者向けの管理画面\n及び追加機能の開発\n\n■作業詳細\n・詳細設計\n・管理画面の作成\n　物件管理画面の登録、検索、編集、削除機能\n　エージェント管理画面の登録、検索、編集、削除機能\n・モンキーテストによる動作テスト\n・利用者の問い合わせ画面にAPIを追加\n　問い合わせたユーザーの管理機能（登録、削除）を追加',
    'member': 4,
    'os': Os[1],
    'lang': ['php7.4'],
    'tools': ['Laravel7'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  8: {
    'period_from': '2019/11',
    'period_to': '2020/05',
    'project': '簡易決済システムの調査、テスト',
    'detail': '■概要\n携帯での簡易決済システムの機能追加\n\n■作業詳細\n・バッチの作成\n・詳細設計\n・テストデータを作成してテスト実行',
    'member': 10,
    'os': Os[1],
    'lang': ['php7.2'],
    'tools': ['Yii2', 'Phpstorm'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  9: {
    'period_from': '2019/05',
    'period_to': '2019/10',
    'project': '求人情報サイトの保守運用',
    'detail': '■概要\n医療専門求人情報サイトの保守運用\n・クリニック用ランディングページの作成\n\n■作業詳細\n・既存バグの修正\n・フロント部分とバック部分の機能追加',
    'member': 5,
    'os': Os[1],
    'lang': ['php7.2'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  10: {
    'period_from': '2018/12',
    'period_to': '2019/03',
    'project': 'コールセンターサポートシステム',
    'detail': '■概要\nコールセンター向けのパッケージシステムの開発\n\n■作業詳細\n・SOAP通信を使用した問い合わせ機能の実装\n・作成されたテスト項目書に沿ってのテスト実行',
    'member': 5,
    'os': Os[1],
    'lang': ['php7.2'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  11: {
    'period_from': '2017/04',
    'period_to': '2018/11',
    'project': '社内向けシステム',
    'detail': '■概要\n社内の派遣社員の管理システムの機能追加、研修\n\n■作業詳細\n・HTML,CSS,jQueryを使用したフロントの実装\n・担当機能のテスト仕様書作成、テスト実行\n・PHPUnitを使用したテストコードの実装\n・Vagrantを使用した仮想環境構築',
    'member': 5,
    'os': Os[1],
    'lang': ['php7.1'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  }
}

const calcMonths = (period_from: string, period_to: string) => {
  const [fromYear, fromMonth] = period_from.split('/').map(Number);
  const [toYear, toMonth] = period_to.split('/').map(Number);
  return (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;
};

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
                        <Card className="rounded-2xl">
                          <CardContent className="flex p-6">
                            <div className="w-full">
                              <div className="space-y-1 flex">
                                <h1 className="w-full font-bold">{data.project}</h1>
                                <p className="min-w-[200px] text-sm text-muted-foreground text-right">メンバー数: {data.member} ポジション: {data.position}</p>
                              </div>
                              <Separator className="my-4" />
                              <div className="flex h-60% max-h-400 items-center space-x-4 text-sm">
                                <div className="w-[70%]">
                                  <p className="text-gray-600 whitespace-pre-wrap">{data.detail}</p>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="w-[30%]">
                                  <p>OS: {data.os}</p>
                                  <p>使用ツール:</p>
                                  {Object.values(data.tools).flat().map((tool, index) => (
                                    <Badge key={index} variant="outline" className="m-1">{tool}</Badge>
                                  ))}
                                </div>
                              </div>
                              <Separator className="my-4" />

                              <div className="py-2">
                                <StepBar
                                  steps={Object.values(Fases)}
                                  activeIndexes={Object.keys(Fases).reduce<number[]>((acc, key, index) => {
                                    if (data.fase.includes(Fases[Number(key)])) {
                                      acc.push(index);
                                    }
                                    return acc;
                                  }, [])}
                                />
                              </div>
                            </div>
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
