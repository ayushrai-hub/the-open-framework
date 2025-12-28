import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import GovernancePage from "./pages/GovernancePage";
import DocumentationPage from "./pages/DocumentationPage";
import CommunityPage from "./pages/CommunityPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import ContextPage from "./pages/ContextPage";
import JoinUsPage from "./pages/JoinUsPage";
import ApiReferencePage from "./pages/ApiReferencePage";
import ComplianceTemplatesPage from "./pages/ComplianceTemplatesPage";
import NotFound from "./pages/NotFound";
// Governance Pages
import BoardMembersPage from "./pages/governance/BoardMembersPage";
import CodeOfConductPage from "./pages/governance/CodeOfConductPage";
import GrievanceRedressalPage from "./pages/governance/GrievanceRedressalPage";
// Legal Pages
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/legal/TermsOfUsePage";
import AccessibilityPage from "./pages/legal/AccessibilityPage";
// Support Pages
import SupportCenterPage from "./pages/support/SupportCenterPage";
import FAQPage from "./pages/support/FAQPage";
import BoardSupportPage from "./pages/support/BoardSupportPage";
// Ecosystem Pages
import PartnersPage from "./pages/ecosystem/PartnersPage";
import EventsPage from "./pages/ecosystem/EventsPage";
// Developer Pages
import DeveloperBoardPage from "./pages/resources/DeveloperBoardPage";
// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import UserProfilePage from "./pages/profile/UserProfilePage";
import EditProfilePage from "./pages/profile/EditProfilePage";
import PublicProfilePage from "./pages/profile/PublicProfilePage";
import AccountSecurityPage from "./pages/account/AccountSecurityPage";
// NGO Onboarding
import NgoIdentityPage from "./pages/onboarding/ngo/NgoIdentityPage";
import NgoLegalPage from "./pages/onboarding/ngo/NgoLegalPage";
import NgoVisibilityPage from "./pages/onboarding/ngo/NgoVisibilityPage";
import NgoVerifyPage from "./pages/onboarding/ngo/NgoVerifyPage";
// Donor Onboarding
import DonorIdentityPage from "./pages/onboarding/donor/DonorIdentityPage";
import DonorInterestsPage from "./pages/onboarding/donor/DonorInterestsPage";
import DonorGeographyPage from "./pages/onboarding/donor/DonorGeographyPage";
import DonorNotificationsPage from "./pages/onboarding/donor/DonorNotificationsPage";
// Talent Onboarding
import TalentOnboardingPage from "./pages/onboarding/talent/TalentOnboardingPage";
// Ecosystem Entry Pages
import NgoEntryPage from "./pages/ecosystem/NgoEntryPage";
import DonorEntryPage from "./pages/ecosystem/DonorEntryPage";
import TalentEntryPage from "./pages/ecosystem/TalentEntryPage";
import EcosystemMapPage from "./pages/ecosystem/EcosystemMapPage";
// NGO Dashboard Pages
import NgoDashboardPage from "./pages/ngo/NgoDashboardPage";
import NgoProfilePage from "./pages/ngo/NgoProfilePage";
import NgoCompliancePage from "./pages/ngo/NgoCompliancePage";
import NgoMessagesPage from "./pages/ngo/NgoMessagesPage";
import NgoReportsPage from "./pages/ngo/NgoReportsPage";
import NgoFundingPage from "./pages/ngo/NgoFundingPage";
import NgoSettingsPage from "./pages/ngo/NgoSettingsPage";
import NgoTalentPage from "./pages/ngo/NgoTalentPage";
// Donor Dashboard Pages
import DonorDashboardPage from "./pages/donor/DonorDashboardPage";
import DonorSavedPage from "./pages/donor/DonorSavedPage";
import DonorGrantsPage from "./pages/donor/DonorGrantsPage";
import DonorReportsPage from "./pages/donor/DonorReportsPage";
import DonorCommunicationsPage from "./pages/donor/DonorCommunicationsPage";
import DonorSettingsPage from "./pages/donor/DonorSettingsPage";
// Talent Dashboard Pages
import TalentDashboardPage from "./pages/talent/TalentDashboardPage";
import TalentApplicationsPage from "./pages/talent/TalentApplicationsPage";
import TalentOpportunitiesPage from "./pages/talent/TalentOpportunitiesPage";
import TalentSavedPage from "./pages/talent/TalentSavedPage";
import TalentOpportunityDetailPage from "./pages/talent/TalentOpportunityDetailPage";
import TalentProfilePage from "./pages/talent/TalentProfilePage";
import TalentSettingsPage from "./pages/talent/TalentSettingsPage";
import TalentMessagesPage from "./pages/talent/TalentMessagesPage";
// Registry Pages
import RegistrySearchPage from "./pages/registry/RegistrySearchPage";
import NgoPublicProfilePage from "./pages/registry/NgoPublicProfilePage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/context" element={<ContextPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/governance" element={<GovernancePage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/join" element={<JoinUsPage />} />
              {/* Auth Pages */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/profile/edit" element={<EditProfilePage />} />
              <Route path="/profile/public" element={<PublicProfilePage />} />
              <Route path="/profile/public/:id" element={<PublicProfilePage />} />
              <Route path="/account/security" element={<AccountSecurityPage />} />
              {/* NGO Onboarding Flow */}
              <Route path="/onboarding/ngo/identity" element={<NgoIdentityPage />} />
              <Route path="/onboarding/ngo/legal" element={<NgoLegalPage />} />
              <Route path="/onboarding/ngo/visibility" element={<NgoVisibilityPage />} />
              <Route path="/onboarding/ngo/verify" element={<NgoVerifyPage />} />
              {/* Donor Onboarding Flow */}
              <Route path="/onboarding/donor/identity" element={<DonorIdentityPage />} />
              <Route path="/onboarding/donor/interests" element={<DonorInterestsPage />} />
              <Route path="/onboarding/donor/geography" element={<DonorGeographyPage />} />
              <Route path="/onboarding/donor/notifications" element={<DonorNotificationsPage />} />
              {/* Talent Onboarding */}
              <Route path="/onboarding/talent" element={<TalentOnboardingPage />} />
              {/* Ecosystem Pages */}
              <Route path="/ecosystem/ngos" element={<NgoEntryPage />} />
              <Route path="/ecosystem/donors" element={<DonorEntryPage />} />
              <Route path="/ecosystem/volunteers" element={<TalentEntryPage />} />
              <Route path="/ecosystem/network" element={<HomePage />} />
              <Route path="/ecosystem/map" element={<EcosystemMapPage />} />
              {/* NGO Dashboard */}
              <Route path="/ngo/dashboard" element={<NgoDashboardPage />} />
              <Route path="/ngo/profile" element={<NgoProfilePage />} />
              <Route path="/ngo/compliance" element={<NgoCompliancePage />} />
              <Route path="/ngo/messages" element={<NgoMessagesPage />} />
              <Route path="/ngo/reports" element={<NgoReportsPage />} />
              <Route path="/ngo/funding" element={<NgoFundingPage />} />
              <Route path="/ngo/settings" element={<NgoSettingsPage />} />
              <Route path="/ngo/opportunities" element={<NgoFundingPage />} />
              <Route path="/ngo/talent" element={<NgoTalentPage />} />
              <Route path="/ngo/grants" element={<NgoFundingPage />} />
              <Route path="/ngo/donors" element={<NgoMessagesPage />} />
              <Route path="/ngo/profile/preview" element={<NgoPublicProfilePage />} />
              {/* Donor Dashboard */}
              <Route path="/donor/dashboard" element={<DonorDashboardPage />} />
              <Route path="/donor/saved" element={<DonorSavedPage />} />
              <Route path="/donor/grants" element={<DonorGrantsPage />} />
              <Route path="/donor/reports" element={<DonorReportsPage />} />
              <Route path="/donor/communications" element={<DonorCommunicationsPage />} />
              <Route path="/donor/settings" element={<DonorSettingsPage />} />
              <Route path="/donor/discover" element={<RegistrySearchPage />} />
              {/* Talent Dashboard */}
              <Route path="/talent/dashboard" element={<TalentDashboardPage />} />
              <Route path="/talent/opportunities" element={<TalentOpportunitiesPage />} />
              <Route path="/talent/opportunity/:id" element={<TalentOpportunityDetailPage />} />
              <Route path="/talent/applications" element={<TalentApplicationsPage />} />
              <Route path="/talent/saved" element={<TalentSavedPage />} />
              <Route path="/talent/profile" element={<TalentProfilePage />} />
              <Route path="/talent/settings" element={<TalentSettingsPage />} />
              <Route path="/talent/messages" element={<TalentMessagesPage />} />
              {/* Registry Pages */}
              <Route path="/registry/search" element={<RegistrySearchPage />} />
              <Route path="/registry/profile/:id" element={<NgoPublicProfilePage />} />
              {/* Resources */}
              <Route path="/resources/templates" element={<ComplianceTemplatesPage />} />
              <Route path="/resources/api" element={<ApiReferencePage />} />
              <Route path="/resources/developers" element={<DeveloperBoardPage />} />
              {/* Governance */}
              <Route path="/governance/board" element={<BoardMembersPage />} />
              <Route path="/governance/conduct" element={<CodeOfConductPage />} />
              <Route path="/governance/grievance" element={<GrievanceRedressalPage />} />
              {/* Legal */}
              <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/legal/terms" element={<TermsOfUsePage />} />
              <Route path="/legal/accessibility" element={<AccessibilityPage />} />
              {/* Support */}
              <Route path="/support" element={<SupportCenterPage />} />
              <Route path="/support/faq" element={<FAQPage />} />
              <Route path="/support/board" element={<BoardSupportPage />} />
              {/* Ecosystem */}
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
