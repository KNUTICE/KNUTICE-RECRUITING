import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KnuticeRecruiting from './recruiting/RecruitingMain' ;
import PrivacyPage from "./privacy/PrivacyPage.tsx";
import Layout from "./components/GlobalLayout.tsx";
import TeamIntroductionPage from "./team/TeamIntroductionPage.tsx";
import TeamCollaborateCulturePage from "./culture/TeamCollaborateCulturePage.tsx";


export default function App() {
    return (
        <Router basename="/KNUTICE-RECRUITING">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<KnuticeRecruiting />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/team" element={<TeamIntroductionPage />} />
                    <Route path="/culture" element={<TeamCollaborateCulturePage />} />
                    {/* <Route path="/engineering" element={<EngineeringPage />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}