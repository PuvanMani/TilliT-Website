import BuyPage from "../../pages/BuyPage";
import LoginPage from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Home from "../../pages/home";
import ProductView from "../../pages/productView";
import ShoppingCart from "../../pages/shoppingCart";

export const PageRoute = [
    {
        "Name": "Home",
        "Path": "/",
        "Icon": "home",
        "Component": <Home />
    },
    {
        "Name": "Product View",
        "Path": "/productview/:id",
        "Icon": "home",
        "Component": <ProductView />
    },
    {
        "Name": "Shopping Cart",
        "Path": "/shopping/cart",
        "Icon": "shopping_cart",
        "Component": <ShoppingCart />
    },
    {
        "Name": "Login",
        "Path": "/auth/login",
        "Icon": "login",
        "Component": <LoginPage />
    },
    {
        "Name": "Singn In",
        "Path": "/auth/signup",
        "Icon": "shopping_cart",
        "Component": <SignUp />
    },
    {
        "Name": "Confirm Order",
        "Path": "/shopping/confirmorder",
        "Icon": "order",
        "Component": <BuyPage />
    },
]