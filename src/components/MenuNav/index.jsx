import { useHistory } from "react-router";
import { IconButton, MenuItem } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { ButtonNav, Header } from "./styles";

const MenuNav = () => {
  const history = useHistory();
  const cartList = useSelector((state) => state.cart);

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <Header>
      <ButtonNav onClick={() => sendTo("/")}>KenzieNerd</ButtonNav>
      <MenuItem onClick={() => sendTo("/cart")}>
        <IconButton size="medium" color="inherit">
          <Badge badgeContent={cartList.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </MenuItem>
    </Header>
  );
};

export default MenuNav;
