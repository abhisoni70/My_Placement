import HomePage from "../pages/Home/HomePage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PracticeGamesPage from "../pages/Practice/PracticeGamesPage";
import MockAssessmentPage from "../pages/MockAssessment/MockAssessmentPage";
import ResultsPage from "../pages/Results/ResultsPage";
import DeductiveGridGame from "../games/deductiveGrid/DeductiveGridGame";
import SwitchChallengeGame from "../games/switchChallenge/SwitchChallengeGame";
import MemoryBubbleGame from "../games/memoryBubble/MemoryBubbleGame";
import InductiveChallengeGame from "../games/inductiveChallenge/InductiveChallengeGame";
import AdminPanel from "../pages/Admin/AdminPanel";
import InterviewPage from "../pages/Interview/InterviewPage";
import BookmarksPage from "../pages/Bookmarks/BookmarksPage";
import ResumeAnalyzerPage from "../pages/ResumeAnalyzer/ResumeAnalyzerPage";
import InterviewExperiencePage from "../pages/InterviewExperience/InterviewExperiencePage";
import ReviewsPage from "../pages/Reviews/ReviewsPage";

/**
 * PAGE_MAP — maps route id strings to page components.
 * Add new routes here; the App will automatically pick them up.
 */
export const PAGE_MAP = {
  home:           HomePage,
  dashboard:      DashboardPage,
  practice:       PracticeGamesPage,
  mock:           MockAssessmentPage,
  results:        ResultsPage,
  admin:          AdminPanel,
  interview:      InterviewPage,
  bookmarks:      BookmarksPage,
  "resume-analyzer": ResumeAnalyzerPage,
  "interview-exp":   InterviewExperiencePage,
  "reviews":         ReviewsPage,
  "deductive-game": DeductiveGridGame,
  "switch-challenge-game": SwitchChallengeGame,
  "memory-bubble-game": MemoryBubbleGame,
  "inductive-challenge-game": InductiveChallengeGame,
};

/**
 * AppRoutes — resolves the current page component from the active page id.
 * Props:
 *   page    — active page id string
 *   setPage — setter passed down to every page
 */
export default function AppRoutes({ page, setPage }) {
  const PageComponent = PAGE_MAP[page] || HomePage;
  return <PageComponent setPage={setPage} />;
}
