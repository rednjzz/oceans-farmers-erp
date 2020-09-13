import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link'


const { SubMenu } = Menu;
let { Header, Content, Footer, Sider } = Layout;
AppLayout.propTypes = {
  children: PropTypes.node
}
const SideLayout = styled(Layout)`
  padding: 24px 0;
  background: #fff;
`

Header = styled(Header)`
  
`
const Logo = styled.div`
  width: 120px;
  height: 64px;
  background: rgba(255, 255, 255, 0.5);
  display: inline-block;
  color: white; 
`
const TopNav = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const TopNavMenu = styled(Menu)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const TopNavMenuItem = styled(Menu.Item)`
  
`
function AppLayout({children}) {
  const [currentMenu , setCurrentMenu ] = useState('1')
  const handleClick = (e) => {
    setCurrentMenu(e.key);
  }
  return (
    <>
      <Layout>
        <Header>
          <TopNav>
            <Link href={'/'}><a>OceansFarmers</a></Link>
            <TopNavMenu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              selectedKeys={[currentMenu]}
              onClick={handleClick}
            >
              <TopNavMenuItem key="1"><Link href={"/order/status"}><a>주문현황</a></Link></TopNavMenuItem>
              <TopNavMenuItem key="2">미수현황</TopNavMenuItem>
              <TopNavMenuItem key="3">재고현황</TopNavMenuItem>
            </TopNavMenu>
          </TopNav>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <SideLayout style={{  }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="vertical"
                theme="light"
                defaultSelectedKeys={['sub1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="사용자메뉴">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="거래처관리">
                  <Menu.Item key="5">상품제원관리</Menu.Item>
                  <Menu.Item key="6">재고관</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="주문관리">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<NotificationOutlined />} title="재물관리">
                  <Menu.Item key="11">상품관</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<NotificationOutlined />} title="자금관리">
                  <Menu.Item key="13">option13</Menu.Item>
                  <Menu.Item key="14">option14</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" icon={<NotificationOutlined />} title="사용자등록">
                  <Menu.Item key="15">option15</Menu.Item>
                  <Menu.Item key="16">option16</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              {children}
            </Content>
          </SideLayout>
        </Content>
        <Footer style={{ textAlign: 'center' }}> ©Oceans Farmers 2020 </Footer>
      </Layout>
    </>
  )
}

export default AppLayout;