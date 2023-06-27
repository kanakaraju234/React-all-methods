import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="fetauredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="fetauredMoney">$2,215</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="fetauredMoney">$1,415</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
