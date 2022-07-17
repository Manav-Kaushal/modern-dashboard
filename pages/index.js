import Layout from "@components/Layout";
import Orders from "@sections/Orders";
import Customers from "@sections/Customers";
import Ecommerce from "@sections/Ecommerce";
import Employees from "@sections/Employees";
import { useRouter } from "next/router";
import Calendar from "@sections/Calendar";
import Kanban from "@sections/Kanban";
import Editor from "@sections/Editor";
import ColorPicker from "@sections/ColorPicker";
import Area from "@sections/charts/area";
import Line from "@sections/charts/line";
import Bar from "@sections/charts/bar";
import Pie from "@sections/charts/pie";
import Financial from "@sections/charts/financial";
import ColorMapping from "@sections/charts/ColorMapping";
import Pyramid from "@sections/charts/pyramid";
import Stacked from "@components/charts/Stacked";

const Home = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <div>
        {!query?.key && <Ecommerce />}
        {query?.key === "ecommerce" && <Ecommerce />}
        {query?.key === "orders" && <Orders />}
        {query?.key === "employees" && <Employees />}
        {query?.key === "customers" && <Customers />}
        {query?.key === "calendar" && <Calendar />}
        {query?.key === "kanban" && <Kanban />}
        {query?.key === "editor" && <Editor />}
        {query?.key === "color-picker" && <ColorPicker />}
        {query?.key === "area" && <Area />}
        {query?.key === "line" && <Line />}
        {query?.key === "bar" && <Bar />}
        {query?.key === "pie" && <Pie />}
        {query?.key === "financial" && <Financial />}
        {query?.key === "color-mapping" && <ColorMapping />}
        {query?.key === "pyramid" && <Pyramid />}
        {query?.key === "stacked" && <Stacked />}
      </div>
    </Layout>
  );
};

export default Home;
