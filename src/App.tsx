import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Spin } from 'antd';

import Dashboard from "./pages/Dashboard/Dashboard";
import { useAppSelector } from "./store/hooks";

const { Header, Content, Footer } = Layout;

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function WebLayout() {
  const loading = useAppSelector((state) => state.services.loading);
  return (
    <div>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <Spin size="large" />
        </div>
      )}
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet /> */}
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          // items={
          //     new Array(3).fill(null).map((_, index) => ({
          //     key: String(index + 1),
          //     label: `nav ${index + 1}`,
          //   }))
          // }
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/dashboard">Dashboard</Link></Menu.Item>
          </Menu>
        </Header>
        {/* <Content className="site-layout" style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 380 }}>Content</div>
        </Content> */}
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>MetricMaster</Footer>
      </Layout>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}