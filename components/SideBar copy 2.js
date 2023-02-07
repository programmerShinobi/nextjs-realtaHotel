import { forwardRef } from "react";
// import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Groups3Icon from '@mui/icons-material/Groups3';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { useRouter } from "next/router";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation
} from "react-router-dom";

const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/dashboard/all": "All",
  "/dashboard/master": "Master",
  "/dashboard/booking": "Booking",
  "/dashboard/users": "Users",
  "/dashboard/hotel": "Hotel",
  "/dashboard/hr": "HR",
  "/dashboard/payment": "Payment",
  "/dashboard/purchase": "Purchase",
  "/dashboard/resto": "Resto",
  "/master": "Master",
  "/master/all": "All",
  "/master/regions": "Regions",
  "/master/country": "Country",
  "/master/provinces": "Provinces",
  "/master/address": "Address",
  "/master/category_group": "Category Group",
  "/master/policy": "Policy",
  "/master/policy_category": "Policy Category",
  "/master/price_items": "Price Items",
  "/master/service_task": "Service Task",
  "/master/members": "Members",
  "/hotel": "Hotel",
  "/hotel/all": "All",
  "/hotel/hotels": "Hotel",
  "/hotel/facilities": "Facilities",
  "/hotel/facility_photos": "Facility Photos",
  "/hotel/facility_price_history": "Price History",
  "/hotel/hotel_reviews": "Hotel Reviews",
  "/users": "Users",
  "/users/all": "All",
  "/users/users": "Users",
  "/users/user_password": "User Password",
  "/users/user_bonus_points": "Bonus Points",
  "/users/user_roles": "User Roles",
  "/users/roles": "Roles",
  "/users/user_members": "User Members",
  "/users/user_profiles": "User Profiles",
  "/booking": "Booking",
  "/booking/all": "All",
  "/booking/booking_orders": "Booking Orders",
  "/booking/booking_order_detail": "Booking Detail",
  "/booking/special_offer_coupons": "Special Coupons",
  "/booking/special_offers": "Special Offers",
  "/booking/user_breakfast": "User Breakfast",
  "/booking/booking_order_detail_extra": "Detail Extra",
  "/resto": "Resto",
  "/resto/all": "All",
  "/resto/resto_menus": "Resto Menus",
  "/resto/resto_menu_photos": "Menu Photos",
  "/resto/order_menus": "Order Menus",
  "/resto/order_menu_detail": "Order Detail",
  "/payment": "Payment",
  "/payment/all": "All",
  "/payment/payment_transaction": "Transaction",
  "/payment/payment_gateway": "Gateway",
  "/payment/user_accounts": "User Accounts",
  "/payment/bank": "Bank",
  "/payment/entity": "Entity",
  "/hr": "HR",
  "/hr/all": "All",
  "/hr/employee": "Employee",
  "/hr/job_role": "Job Role",
  "/hr/employee_pay_history": "Pay History",
  "/hr/employee_department_history": "Department History",
  "/hr/department": "Department",
  "/hr/shift": "Shift",
  "/hr/work_order_detail": "Work Detail",
  "/hr/work_orders": "Work Orders",
  "/purchase": "Purchase",
  "/purchase/all": "All",
  "/purchase/purchase_order_header": "Purchase Order",
  "/purchase/purchase_order_detail": "Purchase Detail",
  "/purchase/vendor": "Vendor",
  "/purchase/stocks": "Stocks",
  "/purchase/stock_detail": "Stock Detail",
  "/purchase/stock_photo": "stock_photo"
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" color="white">
      <LinkRouter underline="hover" color="white" to="/admin">
        Admin
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="white" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="white" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

const SideBar = forwardRef(({ showNav }, ref) => {
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [openMaster, setOpenMaster] = React.useState(false);
  const [openHotel, setOpenHotel] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);
  const [openBooking, setOpenBooking] = React.useState(false);
  const [openResto, setOpenResto] = React.useState(false);
  const [openPayment, setOpenPayment] = React.useState(false);
  const [openHR, setOpenHR] = React.useState(false);
  const [openPurchase, setOpenPurchase] = React.useState(false);

  const handleClickDashboard = () => {
    setOpenDashboard((prevOpen) => !prevOpen);
  };

  const handleClickMaster = () => {
    setOpenMaster((prevOpen) => !prevOpen);
  };

  const handleClickHotel = () => {
    setOpenHotel((prevOpen) => !prevOpen);
  };

  const handleClickUsers = () => {
    setOpenUsers((prevOpen) => !prevOpen);
  };

  const handleClickBooking = () => {
    setOpenBooking((prevOpen) => !prevOpen);
  };

  const handleClickResto = () => {
    setOpenResto((prevOpen) => !prevOpen);
  };

  const handleClickPayment = () => {
    setOpenPayment((prevOpen) => !prevOpen);
  };

  const handleClickHR = () => {
    setOpenHR((prevOpen) => !prevOpen);
  };

  const handleClickPurchase = () => {
    setOpenPurchase((prevOpen) => !prevOpen);
  };

  return (
    <div
      sx={{ display: "flex", flexDirection: "column", width: 360 }}
      ref={ref}
      className="fixed bg-gray-700 shadow-sm h-full overflow-y-auto pl-4 pr-4"
    >
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/assets/logo-realtaHotel-white.png"
            alt="logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <MemoryRouter initialEntries={[""]} initialIndex={0}>
          <Box className="text-white">
            <Routes>
              <Route path="*" element={<Page />} />
            </Routes>
            <Box
              sx={{
                bgcolor: "background.black",
                mt: 1
              }}
              component="nav"
              aria-label="mailbox folders"
            >
              <List>
                <ListItemLink
                  to="/dashboard"
                  open={openDashboard}
                  onClick={handleClickDashboard}
                />
                <Collapse
                  component="li"
                  in={openDashboard}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/master" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/booking" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/users" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/hotel" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/hr" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/payment" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/dashboard/purchase" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/master"
                  open={openMaster}
                  onClick={handleClickMaster}
                />
                <Collapse
                  component="li"
                  in={openMaster}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/regions" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/country" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/provinces" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/address" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/category_group" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/policy" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/policy_category" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/price_items" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/service_task" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/master/members" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/hotel"
                  open={openHotel}
                  onClick={handleClickHotel}
                />
                <Collapse
                  component="li"
                  in={openHotel}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hotel/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hotel/hotels" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hotel/facilities" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hotel/facility_photos" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/hotel/facility_price_history"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hotel/hotel_reviews" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/users"
                  open={openUsers}
                  onClick={handleClickUsers}
                />
                <Collapse
                  component="li"
                  in={openUsers}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/users" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/user_roles" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/roles" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/user_password" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/user_profiles" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/user_members" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/users/user_bonus_points" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/booking"
                  open={openBooking}
                  onClick={handleClickBooking}
                />
                <Collapse
                  component="li"
                  in={openBooking}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/booking/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/booking/booking_orders" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/booking/booking_order_detail"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/booking/special_offer_coupons"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/booking/special_offers" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/booking/user_breakfast" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/booking/booking_order_detail_extra"
                    />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/resto"
                  open={openResto}
                  onClick={handleClickResto}
                />
                <Collapse
                  component="li"
                  in={openResto}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/resto/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/resto/resto_menus" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/resto/resto_menu_photos" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/resto/order_menus" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/resto/order_menu_detail" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/payment"
                  open={openPayment}
                  onClick={handleClickPayment}
                />
                <Collapse
                  component="li"
                  in={openPayment}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/payment/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/payment/payment_transaction"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/payment/payment_gateway" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/payment/user_accounts" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/payment/bank" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/payment/entity" />
                  </List>
                </Collapse>
                <ListItemLink to="/hr" open={openHR} onClick={handleClickHR} />
                <Collapse component="li" in={openHR} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/employee" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/job_role" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/employee_pay_history" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/department" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/hr/employee_department_history"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/shift" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/work_orders" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/hr/work_order_detail" />
                  </List>
                </Collapse>
                <ListItemLink
                  to="/purchase"
                  open={openPurchase}
                  onClick={handleClickPurchase}
                />
                <Collapse
                  component="li"
                  in={openPurchase}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/purchase/all" />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/purchase/purchase_order_header"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink
                      sx={{ pl: 4 }}
                      to="/purchase/purchase_order_detail"
                    />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/purchase/vendor" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/purchase/stocks" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/purchase/stock_detail" />
                  </List>
                  <List disablePadding>
                    <ListItemLink sx={{ pl: 4 }} to="/purchase/stock_photo" />
                  </List>
                </Collapse>
              </List>
            </Box>
          </Box>
        </MemoryRouter>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;


