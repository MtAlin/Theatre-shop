import OutletData from "./OutletData";
import SellerData from "./BestSellerData";
import NewArrivalsData from "./NewArrivalsData";

const testData = [
  {
    title: "BestSeller",
    sellerLink: "showBest",
    sellerPath: "showBest",
    path: "bestseller",
    link: "bestseller",
    items: SellerData,
  },
  {
    title: "Outlet",
    sellerLink: "showOutlet",
    sellerPath: "showOutlet",
    path: "outlet",
    link: "outlet",
    items: OutletData,
  },
  {
    title: "NewArrivals",
    sellerLink: "showArrivals",
    sellerPath: "showArrivals",
    path: "newarrivals",
    link: "newarrivals",
    items: NewArrivalsData,
  },
];

export default testData;
