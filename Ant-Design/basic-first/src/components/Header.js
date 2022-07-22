import React from 'react';
import { Layout, Menu } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import { Wrapper, MenuStyle, LogoStyle, LogoContainer } from './styled-components/Header.styled.js'

export default function App() {
    const { Header } = Layout;
    
    return ( 
        <div>
            <Layout className="layout">
                <Wrapper>
                    <LogoStyle>
                        <LogoContainer>
                            <FireOutlined className='logo'/>
                            <h3>
                                logo
                            </h3>
                        </LogoContainer>
                    </LogoStyle>
                    <MenuStyle>
                        <Header>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={["home"]}
                            >
                                <Menu.Item key="home">
                                    Home
                                </Menu.Item>
                                <Menu.Item key="about">
                                    About
                                </Menu.Item>
                                <Menu.Item key="features">
                                    Features
                                </Menu.Item>
                                <Menu.Item key="howitworks">
                                    How it works
                                </Menu.Item>
                                <Menu.Item key="faq">
                                    FAQ
                                </Menu.Item>
                                <Menu.Item key="pricing">
                                    Pricing
                                </Menu.Item>
                                <Menu.Item key="contact">
                                    Contact Us
                                </Menu.Item>
                            </Menu>
                        </Header>
                    </MenuStyle>
                </Wrapper>
            </Layout>
        </div>
    )
}
