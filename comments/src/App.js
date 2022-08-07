import './App.css';
import Comment from './components/Comment';
function App() {
  return (
    <div className='App'>
      <div className='main-content'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Comment 
          name='Shawn Wang' 
          country='Singapore' 
          img='shawn' 
          rol='Software Engineer'
          company='Amazon'
          comment="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life." />
       
        <Comment 
          name='Sarah Chima' 
          country='Nigeria' 
          img='sarah' 
          rol='Software Engineer'
          company='ChatDesk'
          comment="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />

        <Comment 
          name='Emma Bostian' 
          country='Sweden' 
          img='emma' 
          rol='Software Engineer'
          company=' Spotify'
          comment="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
      </div>
    </div>
  );
}

export default App;
