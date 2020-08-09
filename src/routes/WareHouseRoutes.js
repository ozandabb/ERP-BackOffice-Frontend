import WareHouseDashboard from "../views/Warehouse/warehouseDashboard"


let WareHouseRoutes = [

     {
       path: "/warehouse",
       name: "WareHouseDashboard",
       component: WareHouseDashboard,
       exact: true,
     },
];

export default WareHouseRoutes;