import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, MessageSquare, BookOpen, Clock, Coffee, ArrowRight, CheckCircle2, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TeamCollaborateCulturePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-900 selection:bg-knutice-light selection:text-knutice break-keep">

            {/* 1. Hero Statement (Odd - Gray) */}
            <section className="bg-gray-50 pt-16 md:pt-24 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div variants={fadeInUp} initial="hidden" animate="show">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-snug">
                            규칙을 위한 규칙은 없어요.<br/>
                            <span className="text-knutice">오직 '더 좋은 서비스'를 만들기 위해 이야기합니다.</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
                            KNUTICE 팀은 누군가 억지로 시켜서 일하지 않아요.
                            '틀려도 괜찮다'는 편안한 마음을 바탕으로, 우리가 어떻게 생각을 나누고 함께 크는지 알려드릴게요.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. GitHub & Code Culture (Even - White) */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                            <span className="bg-gray-100 p-2 rounded-xl"><GitPullRequest className="text-gray-700" size={24} /></span>
                            코드 리뷰: 틀리면서 배우는 곳
                        </h2>
                        <div className="mb-10">
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                                코드를 합치려면 <strong>적어도 한 명의 동료가 오케이(Approve)를 해야 해요.</strong> 하지만 시험을 보거나 점수를 매기려는 게 아니랍니다. 정답이 아니어도 괜찮아요. 코드를 보다 고개가 갸우뚱해진다면 <strong>언제든 편하게 코멘트를 남겨주세요.</strong> 묻고 답하는 시간 속에서 우리는 가장 빨리 배웁니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-knutice" /> 한눈에 들어오는 PR
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    각 팀(iOS, Android, Backend)에 맞는 템플릿을 써서, 코드를 짠 이유를 리뷰어가 단번에 알아볼 수 있게 도와줘요.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <MessageSquare size={18} className="text-blue-500" /> 눈치 보지 않는 질문
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    '이런 걸 물어봐도 되나?' 싶은 아주 작은 코멘트도 대환영이에요. 맘 편히 물어보고 알아가는 분위기를 가장 좋아해요.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Documentation & Tracking (Odd - Gray) */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                            <span className="bg-white shadow-sm p-2 rounded-xl"><BookOpen className="text-gray-700" size={24} /></span>
                            기록은 남김없이, 작업은 확실하게
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-10">
                            과거의 기록이 없는 프로젝트는 길을 잃기 쉬워요. 우리는 <strong>Jira</strong>와 <strong>Confluence</strong>를 써서 우리가 나눈 이야기와 진행 상황을 팀원 모두가 언제든 볼 수 있게 열어둬요. 지금 누가 어떤 문제를 풀고 있는지 한눈에 알 수 있답니다.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl text-sm font-bold shadow-sm border border-gray-100">📘 Confluence: 우리가 고민한 흔적들</div>
                            <div className="bg-white text-gray-800 px-5 py-3 rounded-2xl text-sm font-bold shadow-sm border border-gray-100">🎯 Jira: 지금 해야 할 일과 진행 상황</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Communication & Syncs (Even - White) */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                        <span className="bg-gray-100 p-2 rounded-xl"><Megaphone className="text-gray-700" size={24} /></span>
                        우리의 소통 창구, Slack
                    </h2>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="space-y-6">

                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                <Coffee className="text-blue-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">가벼운 1:1 허들 (Huddle)</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    글로 적기 길어질 것 같다면 언제든 Slack DM이나 허들을 걸어주세요. "5분만 화면 보면서 얘기할까요?" 한 마디면 충분해요.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                                <Clock className="text-green-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">주간 파트 미팅 (Weekly)</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    일주일에 한 번, 각 팀(iOS, Android, Backend)끼리 모여 일주일 동안 한 일을 나누고, 코드를 짜며 막힌 부분을 다 같이 풀어내요.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                                <MessageSquare className="text-purple-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">다 같이 모이는 타운홀 (Monthly)</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    한 달에 한 번은 앱과 서버 개발자 모두가 모여요. 앞으로 앱이 나아갈 길을 맞추고, 서로가 한 달 동안 멋지게 해낸 일들을 박수 쳐주는 자리랍니다.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* 5. Closing Statement (Odd - Gray) */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-4">함께 커갈 준비가 되셨나요?</h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            단순히 코드를 짜는 것을 넘어, 동료와 함께 일하는 즐거움을 아는 분을 기다려요.
                            <br/>KNUTICE 팀의 생각에 고개가 끄덕여진다면, 지금 바로 합류해 주세요!
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-black transition-colors shadow-sm"
                        >
                            모집 공고 확인하기 <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}