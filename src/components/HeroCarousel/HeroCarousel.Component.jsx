import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel =() =>{
    
    const [images, setImages]= useState(
        [
      {
        adult: false,
        backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        genre_ids: [
        18,
        80
        ],
        id: 238,
        original_language: "en",
        original_title: "The Godfather",
        overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        popularity: 107.877,
        poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        release_date: "1972-03-14",
        title: "The Godfather",
        video: false,
        vote_average: 8.7,
        vote_count: 17268
        },
        {
          adult: false,
          backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
          genre_ids: [
          16,
          28,
          12,
          35,
          10751,
          14
          ],
          id: 315162,
          original_language: "en",
          original_title: "Puss in Boots: The Last Wish",
          overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
          popularity: 10102.273,
          poster_path: "/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
          release_date: "2022-12-21",
          title: "Puss in Boots: The Last Wish",
          video: false,
          vote_average: 8.6,
          vote_count: 1215
          },
          {
          adult: false,
          backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
          genre_ids: [
          878,
          12,
          28
          ],
          id: 76600,
          original_language: "en",
          original_title: "Avatar: The Way of Water",
          overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          popularity: 3180.863,
          poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          release_date: "2022-12-16",
          title: "Avatar: The Way of Water",
          video: false,
          vote_average: 7.7,
          vote_count: 4034
          },
          {
          adult: false,
          backdrop_path: "/zrnzWEQSJ0jtufPGR4SEnB6s1q1.jpg",
          genre_ids: [
          28,
          35,
          80,
          53
          ],
          id: 899112,
          original_language: "en",
          original_title: "Violent Night",
          overview: "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
          popularity: 2332.088,
          poster_path: "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
          release_date: "2022-11-30",
          title: "Violent Night",
          video: false,
          vote_average: 7.7,
          vote_count: 883
          }
    ]
    );

    const settingsLG ={
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }

    const settings ={
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }

    // return (
    // <>
    // <div className="lg:hidden">
    //     <HeroSlider {...settings}>
    //     {
    //             images.map((image)=>{
    //             <div className="w-full h-56 md:h-80 py-3">
    //                 <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-cover" />
    //             </div>
    //         })
    //     }
    //     </HeroSlider>
    // </div>
    // <div className="hidden lg:block">
    // <HeroSlider {...settingsLG}>
    //     {
    //         images.map((image)=>{
    //             <div className="w-full h-96 px-2 py-3">
    //                 <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className="w-full h-full rounded-md object-cover" />
    //             </div>
    //         })
    //     }
    //     </HeroSlider>
    // </div>
    // </>
    // )
    return (
      <>
        <div className="lg:hidden">
          <HeroSlider {...settings}>
            {images.map((images,index) => (
              <div className="w-full h-56 md:h-80 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover banner"
                />
              </div>
            ))}
          </HeroSlider>
        </div>
        <div className="hidden lg:block">
          <HeroSlider {...settingsLG}>
            {images.map((images,index) => (
              <div className="w-full h-96 px-2 py-3" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                  alt="Hero Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            ))}
          </HeroSlider>
        </div>
      </>
    );
  };


export default HeroCarousel;