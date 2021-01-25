import './App.css';
import Header from './Component/Header';
import Statement from './Component/Statement';
import ReadMore from './Component/ReadMore';
import Time from './Component/Time';
import EventCard from './Component/EventCard';
import NewsCard from './Component/NewsCard';
import Footer from './Component/Footer';




function App() {
  return (
    <div className="App">
        <Header></Header>
        <Statement></Statement>
        <ReadMore></ReadMore>
        <Time></Time>
        <EventCard></EventCard>
        <NewsCard></NewsCard>
        <Footer></Footer>
        
    </div>
  );
}

export default App;
