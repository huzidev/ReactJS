import React from 'react';
import { Layout, Menu } from 'antd';

export default function App() {
    const { Header } = Layout;
    return ( 
        <div>
            <Layout className="layout">
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
            </Layout>
        </div>
    )
}
