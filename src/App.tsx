import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Code2, Smartphone, Atom, Globe, Cpu, Terminal } from 'lucide-react';

const isApplicationOpen = false;

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

// --- Simple SVG Icon Set (Themed to your UI) ---
const TechIcon = ({ name }: { name: string }) => {
    // Mapping tech names to professional Lucide equivalents
    const iconMap: Record<string, React.ElementType> = {
        kotlin: Code2,      // Semantic: Clean code
        android: Smartphone,
        swift: Cpu,        // Semantic: Performance/System
        ios: Smartphone,
        react: Atom,        // Lucide actually has an 'Atom' icon!
        web: Globe,
        backend: Terminal,
    };

    const IconComponent = iconMap[name.toLowerCase()] || Code2;

    return (
        <IconComponent
            size={16}
            className="mr-2 text-knutice stroke-[2.5px]"
            // strokeWidth 2.5 gives it that bold, premium look
        />
    );
};

// --- Accordion Component (Expandable List Item) ---
const RoleAccordion = ({title, description, stack, isBeta = false, note}: {
    title: string,
    description: string,
    stack: string[],
    isBeta?: boolean,
    note?: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden mb-6 h-fit"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 md:p-8 flex flex-row items-center justify-between gap-3 md:gap-4 focus:outline-none"
            >
                {/* Left Side: Title & Badge Group (Strict Row) */}
                <div className="flex flex-row items-center gap-2 flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight truncate">
                        {title}
                    </h3>
                    {isBeta && (
                        <span className="bg-knutice-light text-knutice text-[9px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                            Founding Member
                        </span>
                    )}
                </div>

                {/* Right Side: The Arrow */}
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex-shrink-0`}>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
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
                        <p className="text-gray-600 mb-8 leading-relaxed break-keep">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {stack.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:border-knutice-soft hover:text-knutice transition-colors"
                                >
                                    {(index === 0) && <TechIcon name={title.split(' ')[0]} />}
                                    {item}
                                </div>
                            ))}

                            {/* Special Note Badge - Vertically Centered */}
                            {note && (
                                <div className="w-full mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center gap-3">
                                    {/* Changed to flex-shrink-0 to prevent the icon from squishing */}
                                    <span className="text-lg flex-shrink-0">✨</span>
                                    <p className="text-xs font-bold text-indigo-700 leading-normal break-keep">
                                        {note}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const TeamMemberCard = ({name, role, tags, description, githubId }: {
    name: string,
    role: string,
    tags: string[],
    description: string,
    githubId: string
}) => (
    <motion.div
        variants={fadeInUp}
        className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
    >
        <div className="mb-6">
            <div className="flex items-center justify-between gap-4 mb-5">

                <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-knutice transition-colors">
                        {name}
                    </h3>
                    <p className="text-knutice font-medium text-xs">
                        {role}
                    </p>
                </div>

                {/* GitHub Avatar: Circular and Professional */}
                <img
                    src={`https://github.com/${githubId}.png`}
                    alt={name}
                    className="w-14 h-14 rounded-full border-2 border-knutice-soft shadow-sm object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-knutice-light text-knutice-strong text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-knutice-soft">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed break-keep mt-auto">
            {description}
        </p>
    </motion.div>
);

export default function KnuticeRecruiting() {
    const googleFormLink = "https://forms.gle/q2mAo43WWWKEd4Mc7";

    return (
        <div className="bg-[#F9FAFB] min-h-screen font-sans text-gray-900 selection:bg-blue-200">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tight">KNUTICE</div>
                <button
                    onClick={() => {
                        if (!isApplicationOpen) {
                            alert("지원 기간이 아닙니다. 3월 3일에 모집이 시작되니 조금만 기다려주세요!");
                        } else {
                            window.open(googleFormLink, "_blank");
                        }
                    }}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${
                        isApplicationOpen
                            ? "bg-knutice text-white hover:bg-knutice-dark shadow-knutice"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`} >
                    {isApplicationOpen ? "팀에 합류하기" : "3월 3일 모집 시작"}
                </button>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 break-keep">
                        우리 학교의 불편함,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-knutice to-indigo-600">
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
                            <span className="text-5xl font-extrabold text-knutice mb-2">800+</span>
                            <span className="text-lg text-gray-600 font-medium">누적 사용자</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-gray-50 flex flex-col items-center justify-center">
                            <span className="text-5xl font-extrabold text-knutice mb-2">500+</span>
                            <span className="text-lg text-gray-600 font-medium">월간 활성 사용자 (MAU)</span>
                        </motion.div>
                    </div>

                    <div className="max-w-3xl mx-auto text-left md:text-center space-y-6">
                        <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed text-lg break-keep">
                            KNUTICE는 매달 500명이 넘는 학우들이 사용하는 서비스로 자리 잡았어요. 현재 팀을 조율하는 iOS 개발자, 안드로이드 개발자, 그리고 백엔드 개발자까지 총 3명의 팀원이 즐겁게 서비스를 키워가고 있답니다.
                        </motion.p>

                        {/* Combined Callout Box for High Impact Selling Points */}
                        <motion.div variants={fadeInUp} className="bg-blue-50 text-blue-800 p-8 rounded-3xl text-left w-full border border-knutice-soft space-y-6">
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

            {/* About Team Section */}
            <section className="py-24 bg-white px-6">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.div className="text-center mb-16">
                        <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">함께하는 사람들</motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-lg break-keep">
                            KNUTICE를 이끌어가는 팀원들을 소개할게요.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TeamMemberCard
                            name="iOS 개발자"
                            role="iOS Developer"
                            githubId="jeongHunE"
                            tags={["Alumni", "iOS Lead"]}
                            description="iOS 앱 아키텍처 설계와 전반적인 팀 조율을 담당하고 있어요. 아이폰 사용자들에게 최적화된 UX를 제공하기 위해 고민하고 실천하고 있어요."
                        />
                        <TeamMemberCard
                            name="안드로이드 개발자"
                            role="Android Developer"
                            githubId="doyoonkim3312"
                            tags={["Android Lead"]}
                            description="안드로이드 앱의 전반적인 개발과 유지보수를 담당하고 있어요. 탄탄한 설계를 바탕으로 사용자에게 가장 신뢰받는 앱을 만드는 데 집중하고 있어요."
                        />
                        <TeamMemberCard
                            name="백엔드 개발자"
                            role="Backend Developer"
                            githubId="seob7"
                            tags={["Alumni", "Industry Pro"]}
                            description="현재 IT 기업에서 근무 중인 현직 개발자예요. 실무에서의 경험을 팀에 공유하며, 안정적인 서버 환경과 데이터 파이프라인 구축을 지원하고 있어요."
                        />
                    </div>
                </motion.div>
            </section>

            {/* Growth & Learning Section */}
            <section className="py-24 bg-gray-50 px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 break-keep">함께하면 이런 것들을 얻어갈 수 있어요</h2>
                        <p className="text-gray-500 text-lg break-keep">단순히 기능을 만드는 것을 넘어, 진짜 '엔지니어'로 성장하는 경험을 약속해요.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "실제 사용자가 있는 프로덕트 운영",
                                desc: "내가 짠 코드 한 줄이 500명의 학우에게 직접 닿는 경험은 유저 피드백을 통해 성장하는 가장 빠른 길이에요."
                            },
                            {
                                title: "현직자의 1:1 코드 리뷰",
                                desc: "실무에서 쓰이는 아키텍처와 협업 방식을 현직 선배님께 직접 배울 수 있어요. 혼자 공부할 때보다 10배는 더 깊이 있게 배울 수 있답니다."
                            },
                            {
                                title: "강력한 네이티브 역량 확보",
                                desc: "OS와 가장 가까운 곳에서 서비스의 작동 원리를 깊이 있게 고민해 보세요. 플랫폼을 근본적으로 이해하는 경험은 어떤 도구를 쓰더라도 흔들리지 않는 여러분만의 강력한 무기가 되어줄 거에요."
                            },
                            {
                                title: "취업을 위한 진짜 포트폴리오",
                                desc: "단순한 팀 프로젝트가 아닌, 실제 스토어에 출시되고 운영되는 '살아있는 서비스'의 핵심 멤버였다는 사실은 어떤 자소서보다 강력해요."
                            }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-start shadow-sm">
                                <span className="text-knutice font-bold text-lg mb-3">0{i+1}.</span>
                                <h4 className="font-bold text-xl mb-3 break-keep">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed break-keep">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Short FAQ Section */}
            <section className="py-24 bg-white px-6">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-12">궁금해할 것 같아서 미리 준비했어요</motion.h3>
                    <div className="space-y-8 text-left">
                        <motion.div variants={fadeInUp}>
                            <p className="font-bold text-gray-900 mb-2">Q. 아직 네이티브 언어가 익숙하지 않은데 괜찮을까요?</p>
                            <p className="text-gray-500 break-keep">당연하죠! 저희도 처음엔 다 그랬는걸요. 기술은 같이 고민하며 배워가면 돼요. 저희가 가진 노하우를 아낌없이 공유해 드릴게요.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <p className="font-bold text-gray-900 mb-2">Q. 시간 할애를 얼마나 해야 하나요?</p>
                            <p className="text-gray-500 break-keep">학업이 최우선이에요! 일주일에 한 번 정도 온라인 미팅을 통해 진행 상황을 공유하고, 각자의 페이스에 맞춰 즐겁게 개발하는 것을 목표로 합니다.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <p className="font-bold text-gray-900 mb-2 break-keep">Q. 네이티브(Kotlin/Swift) 경험이 없는데, RN이나 Flutter 개발자도 합류할 수 있나요?</p>
                            <p className="text-gray-500 break-keep leading-relaxed">
                                그럼요! 저희는 기술의 틀에 갇히기보다 '최선의 사용자 경험'을 만드는 것을 더 중요하게 생각해요.
                                언제나 더 나은 해결책을 찾기 위해 새로운 기술 도입에 유연하게 열려 있어요.
                                다만, 현재 KNUTICE의 심장은 네이티브 기술로 탄탄하게 구축되어 있어요.
                                따라서 기존의 코드를 이해하고 조화롭게 연결하는 과정에서 네이티브 언어를 함께 탐구하려는 마음가짐이 있다면,
                                크로스 플랫폼 개발자분들에게도 성장의 큰 기회가 될 거라 믿고 있어요.
                            </p>
                        </motion.div>
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
                        stack={["Swift", "SwiftUI", "UiKit", "Combine", "Swift Concurrency", "Clean Architecture", "MVVM/TCA"]}
                    />

                    <RoleAccordion
                        title="Android 개발자"
                        description="안드로이드 팀은 MVI와 Clean Architecture를 기반으로 사용자에게 가장 견고하고 빠른 경험을 제공하는 데 집중하고 있어요. 생산성 높은 코드 구조와 최신 라이브러리를 활용해 안드로이드 개발의 즐거움을 함께 느껴봐요."
                        stack={["Kotlin", "Jetpack Compose", "Kotlin Coroutine", "Clean Architecture", "MVI", "Dagger 2", "Room FTS"]}
                    />

                    <RoleAccordion
                        title="Web 개발자"
                        isBeta={true}
                        description="웹 팀은 KNUTICE의 생태계를 확장할 첫 파운딩 멤버를 모셔요! 관리자 페이지부터 공지 통합 웹 서비스까지, 제로베이스부터 우리 팀만의 웹 표준을 만들어가는 즐거움을 느껴보세요."
                        stack={["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Zustand", "React Query"]}
                        note="파운딩 멤버가 결정되면 팀원들의 경험과 제안에 따라 아키텍처와 기술 스택을 언제든 유연하게 논의하고 변경할 수 있어요."
                    />

                    <RoleAccordion
                        title="Backend 개발자"
                        description="백엔드 팀은 안정적인 알림 발송과 대용량 데이터 처리를 담당하며 서비스의 든든한 뿌리가 되어주고 있어요. 현직자 선배님과 함께 실무 수준의 인프라를 고민하며 시스템을 더 탄탄하게 다져갈 분을 찾아요."
                        stack={["Kotlin", "Spring Boot", "FCM", "Mongo DB", "Kotlin Coroutine", "Docker", "Hexagonal Architecture" ]}
                    />

                    <RoleAccordion
                        title="프로덕트 디자이너"
                        isBeta={true} // Founding Member 뱃지
                        description="현재 500명이 넘는 학우들이 매달 KNUTICE를 열어보고 있어요. 이제는 단순한 기능 구현을 넘어, 유저의 일상에 자연스럽게 스며드는 '다정한 경험'을 설계할 분이 필요해요. 디자이너는 화면을 그리는 사람을 넘어 서비스의 방향성을 함께 결정하는 가장 중요한 목소리가 됩니다. 진짜 유저의 데이터를 보며 디자인의 임팩트를 확인하는 짜릿함을 함께 나눠요."
                        stack={[
                            "Figma",
                            "UI/UX Design",
                            "Design System",
                            "Prototyping",
                            "Data-informed UX"
                        ]}
                        note="완벽한 툴 숙련도보다 '왜 여기에 이 버튼이 있어야 하는지'에 대한 치열한 고민을 더 좋아해요. 유저의 목소리에 귀 기울이며 디자인 시스템의 첫 단추를 꿰어주실 분을 기다립니다!"
                    />
                </motion.div>
            </section>

            {/* Recruitment Process Section */}
            <section className="py-24 bg-gray-50 px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">지원 프로세스</h2>
                        <p className="text-gray-500 break-keep text-lg">복잡한 절차보다는 서로를 알아가는 시간을 가져요.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {[
                            { step: "01", title: "지원서 제출", desc: "구글 폼을 통해 지원서를 작성해 주세요." },
                            { step: "02", title: "커피챗 (비대면)", desc: "서로의 가치관과 기술적인 관심사를 가볍게 나눠요." },
                            { step: "03", title: "팀 합류", desc: "최종 합류를 결정하고 온보딩을 진행합니다." },
                            { step: "04", title: "개발 시작!", desc: "본격적으로 KNUTICE의 일원이 되어 개발을 시작해요." }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-knutice text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg drop-shadow-knutice">
                                    {item.step}
                                </div>
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed break-keep">{item.desc}</p>
                            </motion.div>
                        ))}
                        {/* Background Line (Desktop only) */}
                        <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gray-200 -z-0" />
                    </div>
                </motion.div>
            </section>

            <section className="py-24 bg-white px-6">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 className="text-4xl font-bold mb-6 text-gray-900 break-keep">여러분의 코드로 학교를 바꿀 시간이에요.</motion.h2>
                        <p className="text-xl text-gray-500 mb-12 break-keep">즐겁게 도전하고 함께 성장할 동료를 기다립니다.</p>

                        <div className="flex flex-col items-center gap-4">
                            {!isApplicationOpen && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-knutice-light text-knutice text-xs font-bold px-3 py-1 rounded-full border border-knutice-soft"
                                >
                                    Coming Soon: Mar 3rd
                                </motion.span>
                            )}

                            <button
                                onClick={() => {
                                    if (!isApplicationOpen) {
                                        alert("지원 기간이 아닙니다. 3월 3일에 모집이 시작되니 조금만 기다려주세요!");
                                    } else {
                                        window.open(googleFormLink, "_blank");
                                    }
                                }}
                                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                                    isApplicationOpen
                                        ? "bg-knutice text-white hover:bg-knutice-dark shadow-knutice"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }`} >
                                {isApplicationOpen ? "팀에 합류하기" : "3월 3일 모집 시작"}
                            </button>
                        </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-xl mx-auto text-center border border-gray-100 rounded-[2.5rem] p-12 bg-gray-50/50">
                    <h3 className="text-xl font-bold mb-4">궁금한 점이 있으신가요?</h3>
                    <p className="text-gray-500 mb-8 break-keep text-sm">
                        프로세스나 팀에 대해 더 알고 싶은 내용이 있다면 언제든 편하게 물어봐 주세요.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="mailto:team.knutice@gmail.com"
                            className="px-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-semibold break-keep hover:bg-gray-50 transition-colors"
                        >
                            이메일로 문의하기
                        </a>
                        <a
                            href="https://github.com/KNUTICE"
                            className="px-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-semibold break-keep hover:bg-gray-800 transition-colors"
                        >
                            GitHub 방문하기
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white px-6 border-t border-gray-50"> {/* Use a very light gray for the top border */}
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs">© 2026 KNUTICE Team. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* Additional links if needed */}
                    </div>
                </div>
            </footer>
        </div>
    );
}