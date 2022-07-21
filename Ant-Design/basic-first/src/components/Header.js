import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuStyles, Wrapper } from './styled-components/Header.styled.js'

export default function App() {
    const { Header } = Layout;
    return ( 
        <div>
            <Layout className="layout">
                <Wrapper>
                    <MenuStyles>
                        <Header>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                items={new Array(2).fill(null).map((_, index) => {
                                    const key = index + 1;
                                    return {
                                        key,
                                        label: `nav ${key}`,
                                    };
                                })}
                            />
                        </Header>
                    </MenuStyles>
                </Wrapper>
            </Layout>
        </div>
    )
}
