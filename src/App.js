import './App.css';
import Row from './Row';
import requests from './Requests' 
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />

      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}             /* By default True */
        />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Top Action" fetchUrl={requests.fetchTopActionMovies}/>
      <Row title="Top Comedy" fetchUrl={requests.fetchTopComedyMovies}/>
      <Row title="Top Horror" fetchUrl={requests.fetchTopHorrorMovies}/>
      <Row title="Top Romance" fetchUrl={requests.fetchTopRomanceMovies}/>
      <Row title="Top Documentaries" fetchUrl={requests.fetchTopDocumentaries}/>
    </div>
  );
}

export default App;