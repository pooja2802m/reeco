import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Header,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  IconName,
  NavContainer,
} from "../../styles/layoutStyles";
import { Badge } from "antd";
import { Dropdown, Space } from "antd";

function PageHeader() {
  const items = [
    {
      key: "1",
      label: <a href="/profile">My profile</a>,
    },

    {
      key: "2",
      label: "Logout",
    },
  ];
  return (
    <Header>
      <HeaderContainer>
        <HeaderRight>
          <IconName>Reeco</IconName>
          <nav>
            <NavContainer>
              <li>Store</li>
              <li>Order</li>
              <li>Analytics</li>
            </NavContainer>
          </nav>
        </HeaderRight>
        <HeaderLeft>
          <NavContainer>
            <li>
              <Badge size="default" count={1} color="hsl(102, 53%, 61%)">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
              </Badge>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hello, James
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </NavContainer>
        </HeaderLeft>
      </HeaderContainer>
    </Header>
  );
}

export default PageHeader;
