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

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// import { ScrollArea } from "@/components/ui/scroll-area"
const Skills: Record<string, string[]> = {
  'OS': ['windows', 'mac'],
  'DATABASE': ['mysql', 'sqlite', 'postgresql', 'microsoft sql server', 'oracle'],
  'PROGRAMMING LANGUAGE': ['php', 'HTML', 'CSS', 'javascript'],
  'FRAMEWORK': ['laravel', 'Symfony', 'Codeignighter', 'Yii', 'React', 'Next.js']
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
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

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

  useEffect(() => {
    // 初期ロードアニメーション
    // 1.5秒間中央にフェードイン表示
    const timer1 = setTimeout(() => {
      setIsLoading(false); // 中央からヘッダーに移動開始
    }, 1500);

    // 移動完了後（約4.5秒後）にコンテンツ表示
    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const today = new Date();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* 初期ロードアニメーション - 画面中央からヘッダーへ移動 */}
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.h1
            layoutId="portfolio-title"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl leading-none bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-badeen"
          >
            Ryo's Portfolio
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center h-16">
              <motion.span
                layoutId="portfolio-title"
                layout
                transition={{ 
                  duration: 1.2, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-2xl leading-none bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-badeen pointer-events-auto"
              >
                Ryo's Portfolio
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}

      {/* ナビゲーションバー */}
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? -100 : 0 }}
        transition={{ duration: 0.8, delay: isLoading ? 0 : 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/30"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              {/* タイトルはlayoutIdで移動するため、ここには表示しない */}
              <div className="w-0 h-0 overflow-hidden">
                <span className="text-2xl bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-badeen">
                  Ryo's Portfolio
                </span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -20 : 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200 font-badeen"
              >
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Home</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-yellow-300 hover:text-yellow-400 transition-colors duration-200 font-badeen"
              >
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Skills</span>
              </button>
              {/* プロジェクトセクションが表示されるようになったらコメントアウトを外す */}
              {/* <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Projects
              </button> */}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* ヒーローセクション */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Avatar className="w-32 h-32 border-4 border-yellow-500 shadow-2xl shadow-yellow-500/50 relative z-10">
                <AvatarImage src="/assets/img/avatar.png" />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-yellow-500 to-red-600 text-black">RM</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent  font-badeen">
                Ryo Maekawa
              </h1>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                PHPをメインに、Webアプリケーション開発を行っています。
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* スキルセクション */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="py-12 px-4 bg-black scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-8 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-badeen">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(Skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-900 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4 text-yellow-900 text-center font-badeen">
                    <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                      {category}
                    </span>
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-black border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500 hover:text-yellow-300 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
            </div>
          </CardContent>
        </Card>
            ))}
          </div>
      </div>
      </motion.section>

      {/* プロジェクトセクション - 一旦非表示 */}
      {/* 
      <section className="py-12 px-4 pb-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-yellow-400">Projects</h2>
              <Button
                onClick={() => {
                  if (openItems.length === careers.length) {
                    setOpenItems([]);
                  } else {
                    setOpenItems(careers.map(career => career.id));
                  }
                }}
              variant="outline"
              className="bg-black border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
              >
              {openItems.length === careers.length ? "すべて閉じる" : "すべて開く"}
              </Button>
            </div>
          <div className="space-y-6">
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={(values) => setOpenItems(values)}
              className="space-y-4"
            >
              {careers.map((career, index) => (
                <AccordionItem key={career.id} value={career.id} className="border-none">
                  <Card className="bg-gray-900 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 overflow-hidden">
                    <AccordionTrigger className="hover:no-underline px-6 py-4 text-white">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                        <div className="flex-1">
                          <h3 className="text-xl text-yellow-400 mb-2">{career.project}</h3>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded border border-yellow-500/30">
                              {career.period_from} ~ {career.period_to ?? '現在'}
                            </span>
                            <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                              {calcMonths(career.period_from, career.period_to ?? today.getFullYear() + '/' + today.getMonth())}ヶ月
                            </span>
                            <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/30">
                              {career.position}
                            </span>
                          </div>
                        </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                      <CardContent className="p-6 pt-0 text-white">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-400 mb-1">メンバー数</p>
                              <p className="font-semibold text-white">{career.member}名</p>
                            </div>
                            <div>
                              <p className="text-gray-400 mb-1">OS</p>
                              <p className="font-semibold text-white">{career.os}</p>
                            </div>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div>
                            <h4 className="font-semibold text-yellow-400 mb-3">プロジェクト概要</h4>
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{career.detail}</p>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-yellow-400 mb-3">使用言語</h4>
                              <div className="flex flex-wrap gap-2">
                                {career.lang.map((lang, idx) => (
                                  <Badge key={idx} variant="outline" className="bg-black border-yellow-500/50 text-yellow-400">
                                    {lang}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-yellow-400 mb-3">使用ツール</h4>
                              <div className="flex flex-wrap gap-2">
                                {career.tools.map((tool, idx) => (
                                  <Badge key={idx} variant="outline" className="bg-black border-red-500/50 text-red-400">
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div>
                            <h4 className="font-semibold text-yellow-400 mb-3">担当フェーズ</h4>
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
                    </AccordionContent>
                    </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
      </div>
      </section>
      */}

    </main>
  );
}
