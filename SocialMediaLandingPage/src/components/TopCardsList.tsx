import { generate as id } from "shortid";
import Card from "./Card";
import "../styles/top-cards.css"

const cardListData = [
  {
    userName: "@pepito",
    followers: "1486",
    todayFollowers: 12,
    icon: "images/facebook.png",
    name: "facebook",
  },
  {
    userName: "@luisa",
    followers: "28540",
    todayFollowers: 20,
    icon: "images/twitter.png",
    name: "twitter",
  },
  {
    userName: "@osvaldo",
    followers: "4550",
    todayFollowers: 30,
    icon: "images/instagram24.png",
    name: "instagram",
  },
  {
    userName: "@jose",
    followers: "4140",
    todayFollowers: -50,
    icon: "images/youtube.png",
    name: "youtube",
  },
];

const TopCardsList = () => {
  return (
    <section className="top-card">
        <div className="wrapper">
            <div className="flexBox">
                {
                    cardListData.map((cardData, index)=> <Card key={index} {...cardData} />)
                }
            </div>
        </div>
    </section>
  )
};

export default TopCardsList;
