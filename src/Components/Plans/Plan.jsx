import React from "react";

const Plan = () => {
  return (
    <div className="mainplain">
      <h1>POS Pricing </h1>
      <div className=" plaintype ">

            <div className="basic">
        <div className=" plaindetail">
          <h5 >Basic</h5>
          <h3>Always free</h3>
          <h4 className="">Includes</h4>
        </div>
        
          <ul>
            <li>Complete on-boarding on mobile app.</li>
            <li>Complete AR based 3D menu.</li>
            <li>Order receiving desktop application.</li>
            <li>Multiple table identification.</li>
            <li>Users can scan QR codes from the table and place an order.</li>
            <li>Order management.</li>
          </ul>
      
        </div>

            <div className="advance">
        <div className="plaindetail">
          <h5>Essntials</h5>
          <h3>$100/mo</h3>
          <h4 className="">Everything in the basic plan+</h4>
        </div>
      
          <ul>
  
<li>Advance order Management </li>
<li>Menu Management</li>
<li>Table Management  Floor management as well </li>
<li>Inventory Management</li>
<li>Billing and invoicing </li>
<li>Reservation management</li>
<li>Delivery order recieve.</li>
<li>Employee management</li>
<li>Payroll management</li>
<li>Customer chat</li>
<li>Customer history</li>
<li>Analytics</li>
<li>Received/view feedback</li>
<li>Report generation</li>
<li>Manage roles and access</li>
<li>Cashier management</li>

           
          </ul>
      
        </div>


            <div className="pro">
        <div className="plaindetail">
          <h5>Pro</h5>
          <h3>$125/mo</h3>
          <h4 className="">Everything in the essentials plan+</h4>
        </div>
      
          <ul>
          <li>  In-app marketing</li>
          <li>Special highlights in app.</li>
          <li>Assistance with “Growth Wizard” AI.</li>
          <li>Heatmap show which area generate most orders</li>
          <li>Multiple branch management</li>
          <li>Third party integrations</li>
          </ul>
  
        </div>


      </div>

      
    </div>
  );
};

export default Plan;
