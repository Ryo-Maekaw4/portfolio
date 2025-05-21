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
import { supabase } from '@/lib/supabaseClient';

import { useState, useEffect, useRef, useCallback } from 'react';


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

type Career = {
  id: string;
  project: string;
  period_from: string;
  period_to: string | null;
  member: number;
  position: string;
  os: string;
  detail: string;
  career_fases: { fase: number }[];
  career_langs: { lang: string }[];
  career_tools: { tool: string }[];
};

type TransformedCareer = {
  id: string;
  project: string;
  period_from: string;
  period_to: string | null;
  member: number;
  position: string;
  os: string;
  detail: string;
  fase: string[];
  lang: string[];
  tools: string[];
};

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
  const [careers, setCareers] = useState<TransformedCareer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: careerRows, error: staffError } = await supabase
        .from('careers')
        .select(`
          id,
          project,
          period_from,
          period_to,
          member,
          position,
          os,
          detail,
          career_fases (
            fase
          ),
          career_langs (
            lang
          ),
          career_tools (
            tool
          )
        `).order('period_to', { ascending: false });

      if (staffError) {
        console.error('経歴取得失敗:', staffError);
        return;
      }

      if (careerRows) {
        const transformedCareers: TransformedCareer[] = careerRows.map((data: Career) => ({
          id: data.id,
          project: data.project,
          period_from: data.period_from,
          period_to: data.period_to,
          member: data.member,
          position: data.position,
          os: data.os,
          detail: data.detail.replace(/\\n/g, '\n'),
          fase: data.career_fases.map(f => Fases[f.fase]),
          lang: data.career_langs.map(l => l.lang),
          tools: data.career_tools.map(t => t.tool)
        }));

        setCareers(transformedCareers);
      }
    };
    fetchData();
  }, []);
  const today = new Date();
  return (
    <main className="min-h-screen items-center justify-center p-4 w-full ">
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
            <div className="flex overflow-x-auto">
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

            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full">
        <Card className="w-full shadow-xl rounded-2xl">
          <CardContent className="p-3">
            <div className="flex justify-between">
              <h1 className="text-2xl text-gray-600">Careers</h1>
              <Button
                onClick={() => {
                  if (openItems.length === careers.length) {
                    setOpenItems([]);
                  } else {
                    setOpenItems(careers.map(career => career.id));
                  }
                }}
                className="mb-4 px-2 py-1 bg-teal-400 text-gray-600 rounded"
              >
                {openItems.length === careers.length ? "Collapse all" : "Expand all"}
              </Button>
            </div>
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={(values) => setOpenItems(values)}
            >
              {careers.map((career) => (
                <AccordionItem key={career.id} value={career.id}>
                  <AccordionTrigger>
                    <div>
                      <p className="font-bold text-gray-600">{career.project}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="rounded-2xl">
                      <CardContent className="flex p-6">
                        <div className="w-full">
                          <div className="space-y-1 flex justify-between w-full">
                            <p className="text-sm text-gray-600">メンバー数: {career.member} ポジション: {career.position}</p>
                            <p className="font-bold text-gray-600">{career.period_from} ~ {career.period_to ?? '現在'}（{calcMonths(career.period_from, career.period_to ?? today.getFullYear() + '/' + today.getMonth())}ヶ月）</p>
                          </div>
                          <Separator className="my-4" />
                          <div className="flex h-60% max-h-400 items-center space-x-4 text-sm">
                            <div className="w-[70%]">
                              <p className="text-gray-600 whitespace-pre-line">{career.detail}</p>
                            </div>
                            <Separator orientation="vertical" />
                            <div className="w-[30%]">
                              <p className="w-full text-sm text-gray-600">OS: {career.os}</p>
                              <p className="w-full text-sm text-gray-600">言語: {career.lang.join(', ')}</p>
                              <p className="w-full text-sm text-gray-600">使用ツール:</p>
                              {career.tools.map((tool, index) => (
                                <Badge key={index} variant="outline" className="m-1">{tool}</Badge>
                              ))}
                            </div>
                          </div>
                          <Separator className="my-4" />

                          <div className="py-2">
                            <StepBar
                              steps={Object.values(Fases)}
                              activeIndexes={Object.keys(Fases).reduce<number[]>((acc, key, index) => {
                                if (career.fase.includes(Fases[Number(key)])) {
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
              ))}
            </Accordion>

          </CardContent>
        </Card>
      </div>

    </main>
  );
}
