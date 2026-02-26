import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
    // 1. Automatically scroll to the top when the page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-knutice-light selection:text-knutice break-keep">
            {/* Simple Navigation Header */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span>지원 페이지로 돌아가기</span>
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
                >
                    {/* Title Section */}
                    <div className="mb-12 border-b border-gray-100 pb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight mb-4">
                            개인정보 처리방침 <span className="text-gray-400 font-medium text-2xl">(리크루팅)</span>
                        </h1>
                        <p className="text-gray-500 leading-relaxed ">
                            KNUTICE 팀은 새로운 동료를 맞이하는 과정에서 지원자분의 소중한 개인정보를 수집하게 돼요.
                            어떤 정보를 왜 수집하고, 언제 안전하게 지우는지 투명하고 알기 쉽게 약속드릴게요.
                        </p>
                    </div>

                    {/* Policy Content - Consistent Presentation */}
                    <div className="space-y-8">

                        {/* Section 01 */}
                        <section className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                                <span className="text-knutice font-black">01</span> 어떤 정보를 수집하나요?
                            </h2>
                            <div className="text-gray-600 space-y-3">
                                <p className="">지원자분과 원활하게 소통하고 커피챗을 안내해 드리기 위해 최소한의 정보만 여쭤보고 있어요.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong className="text-gray-900">필수 정보:</strong> 성함, 연락처(이메일 혹은 전화번호)</li>
                                    <li><strong className="text-gray-900">선택 정보:</strong> 포트폴리오, GitHub 링크, 개인 블로그 등</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 02 */}
                        <section className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                                <span className="text-knutice font-black">02</span> 수집한 정보는 어디에 쓰이나요?
                            </h2>
                            <div className="text-gray-600 space-y-3">
                                <p>보내주신 정보는 오직 <strong>'새로운 동료를 찾고 맞이하는 과정'</strong>에만 소중하게 사용해요.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>지원서 검토 및 커피챗(인터뷰) 일정 조율</li>
                                    <li>최종 합류 여부 안내 및 온보딩 연락</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 03 */}
                        <section className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-knutice-light">
                            <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                                <span className="text-knutice font-black">03</span> 언제 지워지나요?
                            </h2>
                            <div className="text-gray-600 space-y-3">
                                <p>목적이 달성된 개인정보는 미련 없이 안전하게 파기할게요.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li className="text-knutice font-bold">모집 전형이 끝난 후 3개월 이내에 모든 데이터를 영구 삭제해요.</li>
                                    <li>단, 팀에 최종 합류하신 분의 정보는 원활한 팀 활동을 위해 프로젝트 기간 동안 안전하게 보관할게요.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 04 */}
                        <section className="bg-gray-50 rounded-2xl p-6 md:p-8">
                            <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                                <span className="text-knutice font-black">04</span> 어떻게 보호하나요?
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                수집된 정보는 접근 권한이 있는 팀 리더만 확인할 수 있으며, 외부로 유출되지 않도록 철저하게 관리하고 있어요. 개인정보와 관련해 궁금한 점이 생기면 언제든 편하게 알려주세요!
                            </p>
                        </section>

                    </div>
                </motion.div>
            </main>
        </div>
    );
}