import {useRecruitingStatus} from "../../hook/useRecruitingStatus.tsx";

interface ApplyButtonProps {
    className?: string;
    largeText?: boolean;
}

export const ApplyButton = ({ className = "", largeText = false }: ApplyButtonProps) => {
    const isApplicationOpen = useRecruitingStatus();

    const handleClick = () => {
        if (!isApplicationOpen) {
            alert("지원 기간이 아닙니다. 3월 3일에 모집이 시작되니 조금만 기다려주세요!");
        } else {
            window.open("https://forms.gle/q2mAo43WWWKEd4Mc7", "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`transition-all duration-300 text-center flex items-center justify-center font-bold ${
                isApplicationOpen
                    ? "bg-knutice text-white hover:bg-knutice-strong shadow-sm"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
            } ${className}`}
        >
            {isApplicationOpen
                ? (largeText ? "팀에 합류하기" : "지원하기")
                : (largeText ? "3월 3일 모집 시작" : "3/3 오픈")}
        </button>
    );
};