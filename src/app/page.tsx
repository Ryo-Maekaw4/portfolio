"use client";

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
import { Button } from "@/components/ui/button"

import { useState } from "react"


// import { ScrollArea } from "@/components/ui/scroll-area"
const Skills: Record<string, string[]> = {
  'OS': ['windows', 'mac'],
  'データベース': ['mysql', 'sqlite', 'postgresql', 'microsoft sql server', 'oracle'],
  '言語': ['php', 'HTML', 'CSS', 'javascript'],
  'フレームワーク': ['laravel', 'Symfony', 'Codeignighter', 'Yii', 'React', 'Next.js']
};

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
    'period_from': '2024/08',
    'period_to': null,
    'project': '不動産会社向け　顧客・商品情報管理システムの保守運用',
    'detail': '■概要\n顧客情報/商品情報を管理する機能開発（フロントエンド/バックエンド）\n\n■作業詳細\n・業務ツールの維持保守対応と新規機能開発\n・外部周辺各機能から呼び出さされるAPIの維持保守対応と各機能新規開発時の対応\n・外部DBへのクエリチューニング',
    'member': 4,
    'os': Os[2],
    'lang': ['PHP8.0'],
    'tools': ['laravel8', 'PostgreSQL', 'Oracle', 'Microsoft SQL Server'],
    'position': 'SE',
    'fase': [1, 3, 4, 5, 6, 7, 8, 9].map((key) => Fases[key])
  },
  2: {
    'period_from': '2023/07',
    'period_to': '2024/07',
    'project': 'D社toCサービスシステム開発・保守',
    'detail': '■概要\n顧客の自社サービスのシステム基盤のモダナイズ及び、セキュリティ強化と保守性の担保\n\n■作業詳細\n・モダナイズ対象機能の調査、仕様書作成\n・プログラムコーディング\n・テスト設計\r\n・単体テスト、結合テスト\r\n・モダナイズ外の機能の改修対応',
    'member': 9,
    'os': Os[2],
    'lang': ['PHP'],
    'tools': ['zendframework', 'laravel10', 'MySQL', 'JIRA', 'Confluence', 'Slack', 'Gather'],
    'position': 'SE',
    'fase': [1, 5, 6].map((key) => Fases[key])
  },
  3: {
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
  4: {
    'period_from': '2023/01',
    'period_to': '2023/03',
    'project': '企業向け学習講座配信サイトの開発',
    'detail': '■概要\n1次フェーズ2次フェーズと分かれており\n1次フェーズの全体的な改修作業\n\n■作業詳細\n・詳細設計書作成\n・2次フェーズに向けフロントとバックの要改修箇所の調査\n・調査内容に基づくリファクタリング\n・開発環境の改善(slackへのgit通知機能作成、コード整形導入)',
    'member': 5,
    'os': Os[2],
    'lang': ['PHP'],
    'tools': ['laravel8', 'Docker', 'Slack', 'Backlog', 'VSCode', 'Sourcetree'],
    'position': 'SE',
    'fase': [1, 5].map((key) => Fases[key])
  },
  5: {
    'period_from': '2022/08',
    'period_to': '2022/12',
    'project': '食品宅配サイト改修',
    'detail': '■概要\n食品宅配サイトの機能改修\n\n■作業詳細\n・検索機能の改修内容の調査\n・テストケース作成\n・非同期APIの負荷調査、及びリファクタリング\n',
    'member': 4,
    'os': Os[2],
    'lang': ['PHP'],
    'tools': ['Windows', 'laravel8', 'Docker', 'Slack', 'VSCode', 'Dbeaver',],
    'position': 'SE',
    'fase': [1, 5].map((key) => Fases[key])
  },
  6: {
    'period_from': '2021/12',
    'period_to': '2022/07',
    'project': '美容系サロン向けECサイト連携システム',
    'detail': '■概要\necforceと連携したサロン専売品販売システムの開発\n\n\n■作業詳細\n・APIドキュメントツールの調査\n・使用ツールの調査、選定\n・ECサイトとのAPI仕様の調査\n・テーブル設計、ER図の作成\n・APIの作成（55本）、テスト（UnitTest）\n・バッチ作成\n',
    'member': 4,
    'os': Os[2],
    'lang': ['PHP'],
    'tools': ['Ubuntu20.04LTS', 'laravel9', 'CloudSQL for MySQL(8.0)', 'L5-Swagger', 'Slack', 'Trello', 'Sourcetree', 'VSCode', 'DBeaver', 'A5:SQL Mk-2'],
    'position': 'SE',
    'fase': [1, 3, 5, 6, 8].map((key) => Fases[key])
  },
  7: {
    'period_from': '2021/02',
    'period_to': '2021/11',
    'project': '大学向けオンライン出願システム開発支援、改修',
    'detail': '■概要\n大学向けオンライン出願システム各種申込画面、管理画面\nの追加改修\n\n\n■作業詳細\n・EXCELによる回帰テスト仕様書作成\n・追加機能の詳細設計書作成\n・管理画面の検索機能に検索項目を追加\n・年度毎の試験内容に合わせた申込画面改修\n　出願者の入力項目を追加、バリデーションを更新\n　出願可能試験の変更、試験日と会場のパターン変更\n　複数出願時の検定料計算を改修',
    'member': 10,
    'os': Os[1],
    'lang': ['PHP7.2'],
    'tools': ['laravel4', 'PHPstorm', 'MySQL'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  8: {
    'period_from': '2020/08',
    'period_to': '2021/01',
    'project': '不動産向け管理システムの開発改修',
    'detail': '■概要\n不動産事業者向けの管理画面\n及び追加機能の開発\n\n■作業詳細\n・詳細設計\n・管理画面の作成\n　物件管理画面の登録、検索、編集、削除機能\n　エージェント管理画面の登録、検索、編集、削除機能\n・モンキーテストによる動作テスト\n・利用者の問い合わせ画面にAPIを追加\n　問い合わせたユーザーの管理機能（登録、削除）を追加',
    'member': 4,
    'os': Os[1],
    'lang': ['PHP7.4'],
    'tools': ['laravel7'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  9: {
    'period_from': '2019/11',
    'period_to': '2020/05',
    'project': '簡易決済システムの調査、テスト',
    'detail': '■概要\n携帯での簡易決済システムの機能追加\n\n■作業詳細\n・バッチの作成\n・詳細設計\n・テストデータを作成してテスト実行',
    'member': 10,
    'os': Os[1],
    'lang': ['PHP7.2'],
    'tools': ['Yii2', 'PHPstorm'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  10: {
    'period_from': '2019/05',
    'period_to': '2019/10',
    'project': '求人情報サイトの保守運用',
    'detail': '■概要\n医療専門求人情報サイトの保守運用\n・クリニック用ランディングページの作成\n\n■作業詳細\n・既存バグの修正\n・フロント部分とバック部分の機能追加',
    'member': 5,
    'os': Os[1],
    'lang': ['PHP7.2'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  11: {
    'period_from': '2018/12',
    'period_to': '2019/03',
    'project': 'コールセンターサポートシステム',
    'detail': '■概要\nコールセンター向けのパッケージシステムの開発\n\n■作業詳細\n・SOAP通信を使用した問い合わせ機能の実装\n・作成されたテスト項目書に沿ってのテスト実行',
    'member': 5,
    'os': Os[1],
    'lang': ['PHP7.2'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  },
  12: {
    'period_from': '2017/04',
    'period_to': '2018/11',
    'project': '社内向けシステム',
    'detail': '■概要\n社内の派遣社員の管理システムの機能追加、研修\n\n■作業詳細\n・HTML,CSS,jQueryを使用したフロントの実装\n・担当機能のテスト仕様書作成、テスト実行\n・PHPUnitを使用したテストコードの実装\n・Vagrantを使用した仮想環境構築',
    'member': 5,
    'os': Os[1],
    'lang': ['PHP7.1'],
    'tools': ['Codeignighter', 'jQuery'],
    'position': 'SE',
    'fase': [5, 6].map((key) => Fases[key])
  }
}

const calcMonths = (period_from: string, period_to: string | null) => {
  let toYear: number;
  let toMonth: number;

  if (!period_to) {
    const today = new Date();
    toYear = today.getFullYear();
    toMonth = today.getMonth();
  } else {
    [toYear, toMonth] = period_to.split('/').map(Number);
  }
  const [fromYear, fromMonth] = period_from.split('/').map(Number);
  return (toYear - fromYear) * 12 + (toMonth - fromMonth) + 1;
};

export default function Home() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  return (
    <main className="min-h-screen items-center justify-center p-8 w-full ">
      <div className="mb-2">
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="flex">
              <Avatar className="">
                <AvatarImage src="/assets/img/avatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold mr-2 text-teal-600">R.M</h1>
              <p className="flex items-center text-sm text-gray-600">実務経験：6年</p>
            </div>
            <div className="flex">
              {Object.entries(Skills).map(([category, skillList], index) => (
                <div key={category} className="flex items-start items-center flex-1">
                  <div className="w-full">
                    <p className="font-medium text-center text-gray-600">{category}</p>
                    {skillList.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="m-1 text-gray-600">{skill}</Badge>
                    ))}
                  </div>
                  {index !== Object.keys(Skills).length - 1 && (
                    <Separator orientation="vertical" className="mx-2 h-auto" />
                  )}
                </div>
              ))}
              {/* <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableBody>
                  {Object.entries(Skills).map(([category, skillList], index) => (
                    <TableRow key={category}>
                      <TableCell className="font-medium">{category}</TableCell>
                      <TableCell key={index}>
                        {skillList.map((skill, index) => (
                          <Badge key={index} variant="outline" className="m-1">{skill}</Badge>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}

            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full">
        <Card className="w-full shadow-xl rounded-2xl">
          <CardContent className="p-6">
            <div className="flex justify-between">
              <h1 className="text-2xl text-gray-600">Careers</h1>
              <Button
                onClick={() => {
                  if (openItems.length === Object.keys(Careers).length) {
                    setOpenItems([]);
                  } else {
                    setOpenItems(Object.keys(Careers));
                  }
                }}
                className="mb-4 px-2 py-1 bg-teal-400 text-gray-600 rounded"
              >
                {openItems.length === Object.keys(Careers).length ? "Collapse all" : "Expand all"}
              </Button>
            </div>
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={(values) => setOpenItems(values)}
            >
              {Object.keys(Careers).map((key) => {
                const data = Careers[Number(key) as keyof typeof Careers];
                  return (
                    <AccordionItem key={key} value={key}>
                      <AccordionTrigger>
                        <div>
                          <p className="font-bold text-gray-600">{data.project}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent key={key}>
                        <Card className="rounded-2xl">
                          <CardContent className="flex p-6">
                            <div className="w-full">
                              <div className="space-y-1 flex justify-between w-full">
                                <p className="text-sm text-gray-600">メンバー数: {data.member} ポジション: {data.position}</p>
                                <p className="font-bold text-gray-600">{data.period_from} ~ {data.period_to ?? '現在'}（{calcMonths(data.period_from, data.period_to)}ヶ月）</p>
                              </div>
                              <Separator className="my-4" />
                              <div className="flex h-60% max-h-400 items-center space-x-4 text-sm">
                                <div className="w-[70%]">
                                  <p className="text-gray-600 whitespace-pre-wrap">{data.detail}</p>
                                </div>
                                <Separator orientation="vertical" />
                                <div className="w-[30%]">
                                  <p className="w-full text-sm text-gray-600">OS: {data.os}</p>
                                  <p className="w-full text-sm text-gray-600">言語: {data.lang}</p>
                                  <p className="w-full text-sm text-gray-600">使用ツール:</p>
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

          </CardContent>
        </Card>
      </div>

    </main>
  );
}
