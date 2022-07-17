import Stacked from "@components/charts/Stacked";
import Layout from "@components/Layout";
import Calendar from "@sections/Calendar";
import Area from "@sections/charts/area";
import Bar from "@sections/charts/bar";
import ColorMapping from "@sections/charts/ColorMapping";
import Financial from "@sections/charts/financial";
import Line from "@sections/charts/line";
import Pie from "@sections/charts/pie";
import Pyramid from "@sections/charts/pyramid";
import ColorPicker from "@sections/ColorPicker";
import Customers from "@sections/Customers";
import Ecommerce from "@sections/Ecommerce";
import Editor from "@sections/Editor";
import Employees from "@sections/Employees";
import Kanban from "@sections/Kanban";
import Orders from "@sections/Orders";
import { useRouter } from "next/router";

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
