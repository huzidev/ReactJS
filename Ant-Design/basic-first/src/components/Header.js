import React from 'react';
import { Layout, Menu } from 'antd';
import { Wrapper, MenuStyle, LogoStyle } from './styled-components/Header.styled.js'

export default function App() {
    const { Header } = Layout;

    let array = ["test"]

    return ( 
        <div>
            <Layout className="layout">
                <Wrapper>
                    <MenuStyle>
                        <Header>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                items={new Array(5).fill(null).map((_, index) => {
                                    const key = index + 1;
                                    return {
                                        key,
                                        label: `${array} ${key}`,
                                    };
                                })}
                            />
                        </Header>
                    </MenuStyle>
                    <LogoStyle>
                        <h3>
                            logo
                        </h3>
                    </LogoStyle>
                </Wrapper>
            </Layout>
        </div>
    )
}
