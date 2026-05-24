import show1 from "../assets/tv-shows/show-1.jpg";
import show2 from "../assets/tv-shows/show-2.jpg";
import show3 from "../assets/tv-shows/show-3.jpg";
import show4 from "../assets/tv-shows/show-4.jpg";
import show5 from "../assets/tv-shows/show-5.jpg";
import show6 from "../assets/tv-shows/show-6.jpg";
import show7 from "../assets/tv-shows/show-7.jpg";
import show8 from "../assets/tv-shows/show-8.jpg";
import show9 from "../assets/tv-shows/show-9.jpg";
import show10 from "../assets/tv-shows/show-10.jpg";

import show11 from "../assets/tv-shows/show-11.jpg";
import show12 from "../assets/tv-shows/show-12.jpg";
import show13 from "../assets/tv-shows/show-13.jpg";
import show14 from "../assets/tv-shows/show-14.jpg";
import show15 from "../assets/tv-shows/show-15.jpg";
import show16 from "../assets/tv-shows/show-16.jpg";
import show17 from "../assets/tv-shows/show-17.jpg";
import show18 from "../assets/tv-shows/show-18.jpg";
import show19 from "../assets/tv-shows/show-19.jpg";
import show20 from "../assets/tv-shows/show-20.jpg";

import anime1 from "../assets/anime/anime-1.jpg";
import anime2 from "../assets/anime/anime-2.jpg";
import anime3 from "../assets/anime/anime-3.jpg";
import anime4 from "../assets/anime/anime-4.jpg";
import anime5 from "../assets/anime/anime-5.jpg";
import anime6 from "../assets/anime/anime-6.jpg";
import anime7 from "../assets/anime/anime-7.jpg";
import anime8 from "../assets/anime/anime-8.jpg";
import anime9 from "../assets/anime/anime-9.jpg";
import anime10 from "../assets/anime/anime-10.jpg";

import horror1 from "../assets/horror/horror-1.jpg";
import horror2 from "../assets/horror/horror-2.jpg";
import horror3 from "../assets/horror/horror-3.jpg";
import horror4 from "../assets/horror/horror-4.jpg";
import horror5 from "../assets/horror/horror-5.jpg";
import horror6 from "../assets/horror/horror-6.jpg";
import horror7 from "../assets/horror/horror-7.jpg";
import horror8 from "../assets/horror/horror-8.jpg";
import horror9 from "../assets/horror/horror-9.jpg";

import Plays from "./Plays";
function PlayList() {
  const Lists = [
    {
      name: "International TV Shows",
      items: [
        { img: show1 },
        { img: show2 },
        { img: show3 },
        { img: show4 },
        { img: show5 },
        { img: show6 },
        { img: show7 },
        { img: show8 },
        { img: show9 },
        { img: show10 },
      ],
    },
    {
      name: "Anime Series",
      items: [
        { img: anime1 },
        { img: anime2 },
        { img: anime3 },
        { img: anime6 },
        { img: anime8 },
        { img: anime4 },
        { img: anime7 },
        { img: anime5 },
        { img: anime9 },
        { img: anime10 },
      ],
    },
    {
      name: "Bingeworthy TV Shows",
      items: [
        { img: show11 },
        { img: show12 },
        { img: show13 },
        { img: show14 },
        { img: show15 },
        { img: show16 },
        { img: show17 },
        { img: show18 },
        { img: show19 },
        { img: show20 },
      ],
    },
    {
      name: "Horror Movies",
      items: [
        { img: horror1 },
        { img: horror8 },
        { img: horror3 },
        { img: horror4 },
        { img: horror5 },
        { img: horror6 },
        { img: horror7 },
        { img: horror2 },
        { img: horror9 },
      ],
    },
  ];

  return (
    <>
      <Plays lists={Lists} />
    </>
  );
}
export default PlayList;
