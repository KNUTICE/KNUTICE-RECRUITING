import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// --- Configuration & Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// --- Accordion Component (Expandable List Item) ---
const RoleAccordion = ({ title, description, stack, isBeta = false }: { title: string, description: string, stack: string[], isBeta?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-8 flex justify-between items-center focus:outline-none"
            >
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                    {isBeta && <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">Founding Member</span>}
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-8 pb-8"
                    >
                        {/* break-keep ensures lines only break at spaces */}
                        <p className="text-gray-600 mb-6 leading-relaxed break-keep">
                            {description}
                        </p>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h4 className="text-sm font-bold text-gray-900 mb-3">함께 다루는 기술들</h4>
                            <ul className="text-sm text-gray-500 space-y-2 font-medium">
                                {stack.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-blue-500">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function KnuticeRecruiting() {
    const googleFormLink = "https://forms.google.com/your-form-link-here";

    return (
        <div className="bg-[#F9FAFB] min-h-screen font-sans text-gray-900 selection:bg-blue-200">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tight">KNUTICE</div>
                <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                    지원하기
                </a>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 break-keep">
                        우리 학교의 불편함,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              우리가 직접 해결해요.
            </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 mb-10 font-medium max-w-2xl mx-auto leading-relaxed break-keep">
                        국립한국교통대학교 공지사항 알리미 KNUTICE.<br/>
                        거창한 보상보다는, 학우들의 일상을 조금 더 편리하게 만들어간다는 보람으로 뭉친 팀이에요.
                    </motion.p>
                </motion.div>
            </section>

            {/* Achievements Section - Mentorship & Autonomy Callouts */}
            <section className="py-24 bg-white px-6 min-h-[600px] flex flex-col justify-center">
                <motion.div
                    className="max-w-4xl mx-auto text-center w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-16 break-keep">
                        함께 만들어낸 의미 있는 변화들
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-gray-50 flex flex-col items-center justify-center">
                            <span className="text-5xl font-extrabold text-blue-600 mb-2">250+</span>
                            <span className="text-lg text-gray-600 font-medium">누적 사용자</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-gray-50 flex flex-col items-center justify-center">
                            <span className="text-5xl font-extrabold text-blue-600 mb-2">130+</span>
                            <span className="text-lg text-gray-600 font-medium">월간 활성 사용자 (MAU)</span>
                        </motion.div>
                    </div>

                    <div className="max-w-3xl mx-auto text-left md:text-center space-y-6">
                        <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed text-lg break-keep">
                            KNUTICE는 매일 130명이 넘는 학우들이 사용하는 서비스로 자리 잡았어요. 현재 팀을 조율하는 iOS 개발자, 안드로이드 개발자, 그리고 백엔드 개발자까지 총 3명의 팀원이 즐겁게 서비스를 키워가고 있답니다.
                        </motion.p>

                        {/* Combined Callout Box for High Impact Selling Points */}
                        <motion.div variants={fadeInUp} className="bg-blue-50 text-blue-800 p-8 rounded-3xl text-left w-full border border-blue-100 space-y-6">
                            <div>
                                <p className="font-bold text-lg mb-2 break-keep">💡 현직자 선배님과 함께하는 성장의 기회</p>
                                <p className="text-blue-700/80 leading-relaxed break-keep">
                                    팀에는 현직 IT 업계에서 활동 중인 백엔드 개발자 선배님도 함께하고 계세요. 학생 수준의 프로젝트를 넘어, 실제 실무 관점의 피드백을 직접 받으며 프로덕션 환경의 협업을 경험해 볼 수 있는 소중한 기회예요.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-blue-200/50">
                                <p className="font-bold text-lg mb-2 break-keep">🛠️ 기술적 자율성과 파운딩 경험</p>
                                <p className="text-blue-700/80 leading-relaxed break-keep">
                                    특히 새롭게 시작하는 <strong>웹 팀의 경우, 초기 멤버분들이 직접 아키텍처와 기술 스택을 결정</strong>할 수 있는 자율성을 드려요. 우리가 제안하는 스택은 하나의 선택지일 뿐, 팀원들의 경험에 따라 더 나은 방향으로 언제든 함께 논의하며 바꿔갈 수 있답니다.
                                </p>
                            </div>
                        </motion.div>

                        <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed text-lg pt-2 break-keep">
                            우리는 완벽한 실력보다는, 학우들의 더 나은 학교 생활을 위해 고민하고 함께 동료로서 성장해 나갈 분을 기다리고 있어요!
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Roles Section */}
            <section className="py-24 bg-[#F9FAFB] px-6">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4 text-center break-keep">
                        이런 포지션을 찾고 있어요
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-center text-gray-500 mb-16 text-lg break-keep">
                        각 항목을 클릭해서 자세한 기술 스택을 확인해 보세요.
                    </motion.p>

                    <RoleAccordion
                        title="iOS 개발자"
                        description="iOS 팀은 Swift 고유의 강점을 살려 아이폰 사용자들에게 최적화된 매끄러운 경험을 설계하고 있어요. 강력한 네이티브 성능과 직관적인 UI를 통해 학우들에게 필요한 가치를 직접 전달해 나가는 보람을 공유하고 싶어요."
                        stack={[
                            "Swift, SwiftUI, UiKit",
                            "Combine / Swift Concurrency (async-await)",
                            "Clean Architecture, MVVM 혹은 TCA",
                            "CoreData / SwiftData"
                        ]}
                    />

                    <RoleAccordion
                        title="Android 개발자"
                        description="안드로이드 팀은 MVI와 Clean Architecture를 기반으로 사용자에게 가장 견고하고 빠른 경험을 제공하는 데 집중하고 있어요. 생산성 높은 코드 구조와 최신 라이브러리를 활용해 안드로이드 개발의 즐거움을 함께 느껴봐요."
                        stack={[
                            "Kotlin, Jetpack Compose",
                            "Coroutines & Flow",
                            "Clean Architecture, MVI Pattern",
                            "Pure Dagger 2 (Manual Injection)",
                            "Room (FTS4), WorkManager"
                        ]}
                    />

                    <RoleAccordion
                        title="Web 프론트엔드"
                        isBeta={true}
                        description="웹 팀은 KNUTICE의 생태계를 확장할 첫 파운딩 멤버를 모셔요! 관리자 페이지부터 공지 통합 웹 서비스까지, 제로베이스부터 우리 팀만의 웹 표준을 만들어가는 즐거움을 느껴보세요."
                        stack={[
                            "React, TypeScript, Vite",
                            "Tailwind CSS, Framer Motion",
                            "Zustand / React Query 등",
                            "※ 파운딩 멤버의 제안에 따라 스택은 유연하게 변경 가능해요! ※"
                        ]}
                    />

                    <RoleAccordion
                        title="Backend 개발자"
                        description="백엔드 팀은 안정적인 알림 발송과 대용량 데이터 처리를 담당하며 서비스의 든든한 뿌리가 되어주고 있어요. 현직자 선배님과 함께 실무 수준의 인프라를 고민하며 시스템을 더 탄탄하게 다져갈 분을 찾아요."
                        stack={[
                            "Kotlin, Java",
                            "Spring Boot",
                            "Firebase Cloud Messaging (FCM) 연동",
                            "Docker, RDBMS 최적화"
                        ]}
                    />
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-32 bg-white flex flex-col items-center justify-center text-center px-6 border-t border-gray-100">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 break-keep">여러분의 코드로 학교를 바꿀 시간이에요.</h2>
                <p className="text-xl text-gray-500 mb-12 break-keep">즐겁게 도전하고 함께 성장할 동료를 기다립니다.</p>
                <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
                >
                    지금 합류하기
                </a>
            </footer>
        </div>
    );
}