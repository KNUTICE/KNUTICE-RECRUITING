import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowRight, Apple, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TeamPage() {
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
                            누군가 정해준 화면만 그리지 않아요.<br/>
                            <span className="text-knutice">수백 명의 일상을 더 편하게 만드는 '진짜 변화'를 만듭니다.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. Identity & Proof (Even - White) -> Merged "Who We Are" & "What We Built" */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6 space-y-20">

                    {/* Part A: Identity */}
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-6">KNUTICE 팀은요,</h2>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                            저희는 일을 나누고 지시하는 '관리자'가 아니에요. 더 나은 코드와 사용자 경험을 위해 밤새 이야기 나누고, '이 기능이 유저에게 진짜 필요할까?'를 함께 고민하는 든든한 <strong>'러닝 메이트'</strong>입니다. 단순히 화면을 뚝딱 만들어내는 것을 넘어, 유저의 목소리에 귀 기울이는 메이커들이 모여있어요.
                        </p>
                    </motion.div>

                    {/* Part B: Proof */}
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-6">우리가 만든 변화</h2>
                        <div className="mb-6">
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
                                여기저기 흩어져 찾아보기 힘들었던 학교 공지사항을, 누구나 스마트폰에서 가장 편하게 볼 수 있도록 바꿨어요. 현재 <strong>누적 800명 이상, 월간 활성 사용자(MAU) 500명 이상</strong>이 매일 KNUTICE를 열어보고 있답니다. 백문이 불여일견, 우리가 빚어낸 프로덕트를 직접 확인해 보세요.
                            </p>
                        </div>

                        {/* Interactive Store Links */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="https://apps.apple.com/kr/app/knutice/id6547855991"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-gray-900 text-white px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-black transition-all shadow-sm hover:shadow-md"
                            >
                                <Apple size={20} />
                                App Store에서 보기
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.doyoonkim.knutice&hl=ko"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 bg-white text-gray-900 px-6 py-3.5 rounded-2xl text-sm font-bold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                            >
                                <Play size={18} className="fill-current" />
                                Google Play에서 보기
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Member Introductions (Odd - Gray) -> White Cards pop perfectly here! */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-extrabold mb-8 pl-2">팀 리더 라인업</h2>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="space-y-6">

                        {/* iOS Lead Card */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-5 mb-5">
                                <img src="https://github.com/jeongHunE.png" alt="iOS Lead" className="w-16 h-16 rounded-full object-cover shadow-sm border border-gray-100" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900">이정훈</h3>
                                    <p className="text-blue-500 font-semibold text-sm">iOS Team Lead</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "단순히 앱을 만드는 것을 넘어, iOS 환경에서 최고의 사용자 경험을 제공하는 것을 목표로 해요. 이를 위해 레거시에 안주하지 않고 새로운 기술적 도전을 즐기며, 더 나은 솔루션을 위해 끊임없이 질문해요. KNUTICE iOS 팀과 함께 기술적 한계를 넓혀갈 열정적인 동료를 기다립니다!"
                            </p>
                            <div className="flex gap-4 text-gray-400">
                                <a href="https://github.com/jeongHunE" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
                                <a href="mailto:ksjs1111@gmail.com" className="hover:text-gray-900 transition-colors"><Mail size={20} /></a>
                            </div>
                        </motion.div>

                        {/* Android Lead Card */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-5 mb-5">
                                <img src="https://github.com/doyoonkim3312.png" alt="Android Lead" className="w-16 h-16 rounded-full object-cover shadow-sm border border-gray-100" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900">김도윤</h3>
                                    <p className="text-knutice font-semibold text-sm">Android Team Lead</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "단방향 데이터 흐름(MVI)과 Clean Architecture를 바탕으로 500명 이상의 트래픽을 단단하게 받쳐주고 있어요. 단순히 돌아가는 코드를 묵묵히 짜는 것을 넘어, 안드로이드의 깊은 원리까지 즐겁게 토론하며 KNUTICE Android 앱을 함께 빚어갈 동료를 기다려요."
                            </p>
                            <div className="flex gap-4 text-gray-400">
                                <a href="https://github.com/doyoonkim3312" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/doyoon3312" className="hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
                                <a href="mailto:doyoon3312@gmail.com" className="hover:text-gray-900 transition-colors"><Mail size={20} /></a>
                            </div>
                        </motion.div>

                        {/* Backend Lead Card */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-5 mb-5">
                                <img src="https://github.com/seob7.png" alt="Backend Lead" className="w-16 h-16 rounded-full object-cover shadow-sm border border-gray-100" />
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900">이동섭</h3>
                                    <p className="text-purple-500 font-semibold text-sm">Backend Team Lead</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "수백 명의 접속과 쏟아지는 알림들을 지연 없이 안정적으로 전달하는 환경을 만들고 있어요. API 응답 속도를 10ms라도 더 줄이는 과정에 재미를 느끼고, 시스템이 점점 커지는 과정을 경험하는 데 가슴이 뛰는 분이라면 언제든 환영해요!"
                            </p>
                            <div className="flex gap-4 text-gray-400">
                                <a href="https://github.com/seob7" className="hover:text-gray-900 transition-colors"><Github size={20} /></a>
                                <a href="mailto:svj7531@gmail.com" className="hover:text-gray-900 transition-colors"><Mail size={20} /></a>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* 4. Closing Statement (Even - White) */}
            <section className="bg-white py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-extrabold mb-4">완벽하지 않아도 괜찮아요.</h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            모든 걸 다 아는 완성형 개발자를 찾는 게 아니에요. 모르는 것을 부끄러워하지 않고, 문제를 해결하기 위해 끝까지 파고드는 <strong>'성장 잠재력'</strong>을 가장 중요하게 생각한답니다.
                            <br/><br/>
                            일단 커피챗에서 가볍게 이야기 나눠요!
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-knutice transition-colors shadow-sm"
                        >
                            모집 공고 확인하기 <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}