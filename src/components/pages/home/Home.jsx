import { userData } from "../../../dummyData";
import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import WidgetLg from "../../widgetLg/widgetLg";
import WidgetSm from "../../widgetSm/widgetSm";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
