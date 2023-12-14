import React from "react";
import DetailedOrder from "./screens/DetailedOrder";
import Orders from "./screens/OrdersList";
import { Routes, Route } from "react-router-dom";
import { Layout, Image} from "antd"
import  SideMenu from "../src/components/SideMenu/index";
import LaundryMenu from "./screens/LaundryMenu";
import CreateService from "./screens/NewService";
import OrderHistory from "./screens/OrderHistory";
import Settings from "./screens/Settings";

function App() {
  const {Sider, Content, Footer} = Layout;

return (
  <Layout>
    <Sider style={{height: "100vh", backgroundColor: 'whitesmoke'}} >
      <Image src="https://static.vecteezy.com/system/resources/previews/007/264/316/original/laundry-service-banner-with-laundry-room-view-vector.jpg" width={200} preview={false} />
      <SideMenu />
    </Sider>
    <Layout>
      <Content>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/order/:id" element={<DetailedOrder />} />
          <Route path="menu" element={<LaundryMenu />} />
          <Route path="menu/new" element={<CreateService />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Content>
      <Footer style={{textAlign: 'center', backgroundColor: "white"}}>
        Laundry Connect Dashboard ©2023
      </Footer>
    </Layout>

  </Layout>
)
}

export default App;
