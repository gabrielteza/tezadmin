import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/featuredinfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";





export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
         </div>
    </div>
  );
}
