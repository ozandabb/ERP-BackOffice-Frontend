//HR routes start here
import HRDashboard from "../views/HR/HRDashboard";
import customerReg from "../views/HR/customerReg";
import customerReg2 from "../views/HR/customerReg2";
import SingleCustomerProfile from "../views/HR/SingleCustomerProfile";
import supplierReg from "../views/HR/supplierReg";
import driverReg from '../views/HR/driverReg';
import employeeReg from "../views/HR/employeeReg";
import driverProfile from "../views/HR/driverProfile";
import vehicleProfile from "../views/HR/vehicleProfiles";
import vehicleReg from "../views/HR/vehicleReg";
import customerProfile from "../views/HR/customerProfile";
import supplierProfile from "../views/HR/supplierProfile";
import employeeProfile from "../views/HR/employeeProfile";
import viewDriverProfile from "../views/HR/view.driverProfile";
import ViewCustomerProfile from "../views/HR/view.customerProfile";
import viewVehicleProfile from "../views/HR/view.vehicleProfile";
//HR routes ENDS here


//finance
import AccDashboard from '../../src/views/finance/Accountant/AccDashoard';
import BankAccount from '../../src/views/finance/Accountant/BankAccount';
import EditBankAccount from '../../src/views/finance/Accountant/EditBankAccounts';
import FiscalYear from '../../src/views/finance/Accountant/FiscalYear';

import AccExDashboard from '../../src/views/finance/AccountsExecutive/AccExDashboard';
import Purchases from '../../src/views/finance/AccountsExecutive/Purchases';
import InvoicePosting from  '../../src/views/finance/AccountsExecutive/invoicePosting';
import SupplierPayment from '../../src/views/finance/AccountsExecutive/SupplierPayment';
import SupplierInvoices from '../../src/views/finance/AccountsExecutive/SupplierInvoices';
import PaymentMethod from '../../src/views/finance/AccountsExecutive/PaymentMethod';
import Sales from '../../src/views/finance/AccountsExecutive/Sales';
import SalesInvoicePosting from '../../src/views/finance/AccountsExecutive/SalesInvoicePosting';
import FixedAssets from '../../src/views/finance/AccountsExecutive/FixedAssets';
import AddFixedAssets from '../../src/views/finance/AccountsExecutive/AddFixedAssets';
import editFixedAssets from '../../src/views/finance/AccountsExecutive/EditFixedAssets';
import Depreciation from '../../src/views/finance/AccountsExecutive/Depreciation';

import AssAccDashboard from '../../src/views/finance/Assistant Account/AssAccDashboard';



let HRstaffRoutes = [

    //=====================================HR routes STARTS here==============================================
     {
       path: "/hrstaff",
       name: "HR_Dashboard",
       component: HRDashboard,
       exact: true,
     },
     {
       path: "/hrstaff/customer_registration",
       name: "customerReg",
       component: customerReg,
       exact: true,
     },
     {
       path: "/hrstaff/customer_registration/QRcode",
       name: "customerReg2",
       component: customerReg2,
       exact: true,
     },
     {
      path: "/hrstaff/customer_registration/SingleCustomerProfile",
      name: "customerReg2",
      component: SingleCustomerProfile,
      exact: true,
    },
     {
       path: "/hrstaff/supplier_registration",
       name: "supplierReg",
       component: supplierReg,
       exact: true,
     },
     {
       path: "/hrstaff/employee_registration",
       name: "employeeReg",
       component: employeeReg,
       exact: true,
     },
     {
      path: "/hrstaff/driver_registration",
      name: "driverReg",
      component: driverReg,
      exact: true,
    },
     {
       path: "/hrstaff/driverProfile",
       name: "driverProfile",
       component: driverProfile,
       exact: true,
     },
     {
      path: "/hrstaff/vehicle_Registration",
      name: "vehicle REgistration",
      component: vehicleReg,
      exact: true,
    },
     {
       path: "/hrstaff/vehicleProfile",
       name: "vehicleProfile",
       component: vehicleProfile,
       exact: true,
     },
     {
       path: "/hrstaff/customerProfile",
       name: "customerProfile",
       component: customerProfile,
       exact: true,
     },
     {
      path: "/hrstaff/supplierProfile",
      name: "supplierProfile",
      component: supplierProfile,
      exact: true,
    },
    {
      path: "/hrstaff/employeeProfile",
      name: "employeeProfile",
      component: employeeProfile,
      exact: true,
    },
     {
       path: "/hrstaff/driverProfile/viewDriverProfile",
       name: "viewDriverProfile",
       component: viewDriverProfile,
       exact: true,
     },
     {
       path: "/hrstaff/customerProfile/ViewCustomerProfile",
       name: "ViewCustomerProfile",
       component: ViewCustomerProfile,
       exact: true,
     },
     {
       path: "/hrstaff/vehicleProfile/viewVehicleProfile",
       name: "viewVehicleProfile",
       component: viewVehicleProfile,
       exact: true,
     },
   //=====================================HR routes ends here==============================================













   //===========finance - must change==============

   //Accountant
   {
    path: "/finance/AccDashboard",
    name: "AccDashboard",
    component: AccDashboard,
    exact: true,
  },
  
  {
    path: "/finance/FiscalYear",
    name: "FiscalYear",
    component: FiscalYear,
    exact: true,
  },

  //Accountant Executive
  {
    path: "/finance/AccExDashboard",
    name: "AccExDashboard",
    component: AccExDashboard,
    exact: true,
  },
 
  {
    path: "/finance/BankAccount",
    name: "BankAccount",
    component: BankAccount,
    exact: true,
  },
  {
    path: "/finance/EditBankAccount",
    name: "EditBankAccount",
    component: EditBankAccount,
    exact: true,
  },
  {
    path: "/finance/Purchases",
    name: "Purchases",
    component: Purchases,
    exact: true,
  },
  {
    path: "/finance/InvoicePosting",
    name: "InvoicePosting",
    component: InvoicePosting,
    exact: true,
  },
  {
    path: "/finance/SupplierPayment",
    name: "SupplierPayment",
    component: SupplierPayment,
    exact: true,
  },
  {
    path: "/finance/SupplierInvoices",
    name: "SupplierInvoices",
    component: SupplierInvoices,
    exact: true,
  },
  {
    path: "/finance/PaymentMethod",
    name: "PaymentMethod",
    component: PaymentMethod,
    exact: true,
  },
  {
    path: "/finance/Sales",
    name: "Sales",
    component: Sales,
    exact: true,
  },
  {
    path: "/finance/SalesInvoicePosting",
    name: "SalesInvoicePosting",
    component: SalesInvoicePosting,
    exact: true,
  },
  {
    path: "/finance/FixedAssets",
    name: "FixedAssets",
    component: FixedAssets,
    exact: true,
  },
  {
    path: "/finance/AddFixedAssets",
    name: "AddFixedAssets",
    component: AddFixedAssets,
    exact: true,
  },
  {
    path: "/finance/editFixedAssets",
    name: "editFixedAssets",
    component: editFixedAssets,
    exact: true,
  },
  {
    path: "/finance/Depreciation",
    name: "Depreciation",
    component: Depreciation,
    exact: true,
  },
  
  
  

//Assintant account
  {
    path: "/finance/AssAccDashboard",
    name: "AssAccDashboard",
    component: AssAccDashboard,
    exact: true,
  },
  
  
];

export default HRstaffRoutes;