import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./modules/login";
import { HomePage } from "./modules/home";
import { LayoutComponent } from "./components/sidebar/layout";
import { ForgotPasswordPage } from "./modules/login/forgotMyPassword";
import { TermsAndConditionsPage } from "./modules/terms_and_conditions";
import { DeleteAccountPage } from "./modules/login/deleteAccount";

export default function App() {
  return (
    <Routes>
      {/* Rotas sem sidebar */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/terms-and-use" element={<TermsAndConditionsPage />} />
      <Route path="/delete-account" element={<DeleteAccountPage />} />
      {/* Rotas que usam o layout com sidebar */}
      <Route element={<LayoutComponent />}>
        <Route path="/home" element={<HomePage />} />
        {/* aqui você pode colocar quantas quiser */}
      </Route>
    </Routes>
  );
}
