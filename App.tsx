import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AiChat from './pages/AiChat';
import { useNavigate } from 'react-router-dom';
import Settings from './pages/Settings';
import NexusVibe from './pages/NexusVibe';
import NexusConnect from './pages/NexusConnect';
import GroupChat from './pages/GroupChat';
import Profile from './pages/Profile';
import CharacterChat from './pages/CharacterChat';
import { PaymentGateway } from './components/PaymentGateway';
import { SettingsProvider } from './contexts/SettingsContext';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SetupProfile from './pages/SetupProfile';

function App() {
  const navigate = useNavigate();

  return (
    <SettingsProvider>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setup-profile" element={<SetupProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AiChat />} />
          <Route path="/vibe" element={<NexusVibe />} />
          <Route path="/connect" element={<NexusConnect />} />
          <Route path="/vibe/chat/:type/:chatId" element={<GroupChat />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat/:characterId" element={<CharacterChat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upgrade/payment" element={<PaymentGateway amount={549} planName="6 Months" />} />
        </Routes>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;