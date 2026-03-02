import { useState, useEffect } from 'react';

export const useRecruitingStatus = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // KST Timezone strict checking (2026-03-03 00:00:00 KST)
        const targetDate = new Date('2026-03-03T00:00:00+09:00').getTime();

        const checkStatus = () => {
            const now = new Date().getTime();
            setIsOpen(now >= targetDate);
        };

        // Check immediately on mount
        checkStatus();
    }, []);

    return isOpen;
};