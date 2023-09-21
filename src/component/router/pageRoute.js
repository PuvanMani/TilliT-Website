import Home from "../../pages/home";
import ProductView from "../../pages/productView";

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
    }
]