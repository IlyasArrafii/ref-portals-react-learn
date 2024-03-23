import Player from './components/Player.jsx';
import TimerChallege from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallege tittle="Easy" targetTime={1}/>
        <TimerChallege tittle="Not Easy" targetTime={5}/>
        <TimerChallege tittle="Getting Tough" targetTime={10}/>
        <TimerChallege tittle="Pros Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
