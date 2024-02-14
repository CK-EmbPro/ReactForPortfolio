import SmallCard from "./SmallCard"
import "../styles/overview.css"

const cardSmallList = [
    {
        icon: 'images/facebook.png',
        pageViews: '87',
        growth: 3,
        key: 1
    },
    {
        icon: 'images/twitter.png',
        pageViews: '52',
        growth:  2257,
        key: 2
    },
    {
        icon: 'images/instagram24.png',
        pageViews: '5462',
        growth: 1375,
        key: 3
    },
    {
        icon: 'images/youtube.png',
        pageViews: '117',
        growth: 303,
        key: 4
    }
]


const Overview = () => {
  return (
    <section className="overview">
        <div className="wrapper">
            <h2 className="headingTwo">Overview - Today</h2>

            <div className="overviewBox">
                {
                    cardSmallList.map(({icon, pageViews, growth, key})=>(
                        <SmallCard icon={icon} key={key} pageViews={pageViews} growth={growth}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Overview