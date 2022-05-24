
import './App.css';

import {useState} from 'react'
import MovieList from './movieApp/MovieList';
import Header from './movieApp/Header';
import Filter from "./movieApp/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

const [text, setText] = useState("");
const [Rating, setRating] = useState("");



  const [movie, setMovie] = useState(


    
 
  [
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
    },
   {
      title: "movie 1",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rate: "5",
    },     {
      title: "Free guy",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://i.ytimg.com/vi/N2R2bjxjcS0/movieposter_en.jpg",
      rate: "3",
    },
{
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
    },

    {
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://www.miconcinemas.com/media/1712/webtheaddamsfamily2_payoffposter_resizewidth-800.jpg",
      rate: "4",
    },
    {
      title: "Adam's family ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2019/02/jordan-peele-us-poster.jpg?ssl=1",
      rate: "4",
    },
    {
      title: "Doom annihilation",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un HunterA group of space marines travels to Mars to investigate the mishaps in a research facility. However, they find themselves under threat after being attacked by strange creatures..",
      posterUrl:
        "https://missiletest.com/wp-content/uploads/2021/08/doom-annihilation-poster.jpg",
      rate: "4",
    },
    {
      title: "Sonic the Hedgehog  ",
      description:
        "After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick ",
      posterUrl:"https://www.themoviedb.org/t/p/original/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      rate: "4",
    },
    {
      title: "12 years Slave",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e140ce21cfc993263fde41e12c7ae47ba91f1bf3d7d05e860c84afac1595d599._RI_V_TTW_.jpg",
      rate: "4",
    },
    {
      title: "Assassin Creed ",
      description:
        "Assassin's Creed tells the story of Desmond Miles, who is tossed into a historical conflict between Assassins and Templars. Desmond's story takes place in modern times, where he must use a machine called an Animus to relive the memories of his ancestor Ezio Auditore.",
      posterUrl:
        "https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/e1077125021162ce2d59820739c316e7/ACEC_Keyart_00_00_00_mobile.jpg",
      rate: "4",
    },
    {
      title: "Teenage Mutant Ninja Turtles",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_FMjpg_UX1000_.jpg",
      rate: "4",
    },
    {
      title: "هارون الرشيد ",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://media.elcinema.com/uploads/_315x420_56ffb1339d019f56708583044a5da3439d2490185ce4d74550d586a11e655f9a.jpg",
      rate: "4",
    },
   
    {
      title: "عمر",
      description:
        "المسلسل يحكي سيرة وحياة خليفة المسلمين الثاني الصحابي عمر بن الخطاب وما دار فيها من أحداث و معارك وما اشتهر عنه من صفات",
      posterUrl:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2012/08/03/thumbs_b_c_3f16b69894f1a639e74fab6422e6e3ad.jpg",
      rate: "4",
    },
    {
      title: "Shelter Island",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg",
      rate: "4",
    },
    {
      title: "The Takedown",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un HunterOusmane and François are two cops with very different styles. The unlikely pair are reunited once again for a new investigation. What seemed to be a simple drug deal turns out to be a high-scale criminal case wrapped in danger..",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BZjNmMWFjZmUtZWYyMy00YTE4LTlhNzEtMTBlMGFkMzNmOTE3XkEyXkFqcGdeQXVyNjE4ODA3NTY@._V1_FMjpg_UX1000_.jpg",
      rate: "4",
    },
    {
      title: "Perfect Strangers",
      description:
        "أصحاب ولا أعز هو فيلم كوميديا دراما من إخراج وسام سميرة وبطولة منى زكي، إياد نصار، عادل كرم، نادين لبكي، جورج خباز، وفؤاد يمين. الفيلم مأخوذ من الفيلم الإيطالي غرباء بالكامل، تم إنتاج الفيلم بواسطة ثلاث شركات من لبنان-مصر-الإمارات. تم تصوير الفيلم في بيروت. تم عرض الفيلم على منصة نتفليكس في",
      posterUrl:
        "https://m.media-amazon.com/images/I/81Wrb9JluwL._SL1403_.jpg",
      rate: "4",
    },


  ]);





  return (
   <div className="App">
 <Header setRating={setRating} setText={setText} MovieElemet={movie} />
  <MovieList Movies={movie} setRating={setRating} Text={setText}  text ={text} rating={Rating} setMovie={setMovie}/>
<Filter/>


    </div>
  );
}

export default App;
