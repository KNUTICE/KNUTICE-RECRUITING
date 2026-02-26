import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KnuticeRecruiting from './recruiting/RecruitingMain' ;
import PrivacyPage from "./privacy/PrivacyPage.tsx";

export default function App() {
    return (
        <Router basename="/KNUTICE-RECRUITING">
            <Routes>
                <Route path="/" element={<KnuticeRecruiting />} />
                <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
        </Router>
    );
}