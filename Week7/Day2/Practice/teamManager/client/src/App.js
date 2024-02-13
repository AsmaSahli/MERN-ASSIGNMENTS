import '@fontsource/roboto/300.css';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import GameStatus from './components/GameStatus';
import GameStatusTwo from './components/GameStatusTwo';
import GameStatusThree from './components/GameStatusThree';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Navigate to="/players/list" />} />
          <Route path="/players/list" element={<PlayerList/>}  />
          <Route path="/players/addplayer" element={<AddPlayer/>}  />
          <Route path="/players/game/1" element={<GameStatus/>}  />
          <Route path="/players/game/2" element={<GameStatusTwo/>}  />
          <Route path="/players/game/3" element={<GameStatusThree/>}  />
        </Routes>
    </div>
  );
}

export default App;
