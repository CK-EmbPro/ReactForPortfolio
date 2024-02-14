import "../styles/smallCard.css";

type SmallCardProps = {
  growth: number;
  pageViews: string;
  icon: string;
};

const SmallCard = ({ growth, pageViews, icon }: SmallCardProps) => {
  return (
    <div className="card-small">
      <div className="card-small-views">
        page views
        <p className="card-small-icon">
          <img src={icon} alt="No img" />
        </p>
      </div>

      <div className="card-small-number">
        {pageViews}

        <p className="card-small-percentage">
          <span>
            <img src="images/up.png" alt="No-img" />
            {growth}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
