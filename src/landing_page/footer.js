import React from "react";

const footerLinks = [
    'NSE',
    'BSE',
    'MCX',
    'Terms & conditions',
    'Policies & procedures',
    'Privacy policy',
    'Disclosure',
    'For investor\'s attention',
    'Investor charter',
]

const companyLinks = [
          'Products',
          'Pricing',
          'About',
          'Referral programme',
          'Careers',
          'InvestIQ.tech',
          'Open source',
          'Press & media',
          'InvestIQ Cares (CSR)',
]

const supportLinks = [
          'Contact us',
          'support portal',
          'Z-Connect blog', 
          'List of charges' ,
          'Downloads & resources', 
          'Videos',
          'Market overview' ,
          'How to file a complaint?', 
          'Status of your complaints',
]

const accountLinks = [
          'Open an account',
          'Fund transfer', 
]

function Footer() {
  return (
    <footer style={{backgroundColor:"#fbfbfb"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo2.jpeg" style={{ width: "45%" }} />
          <p style={{ fontSize: "85%" }}>
            &copy;2010 - 2025, InvestIQ Broking Ltd. <br />
            All rights reserved.
          </p>
        </div>
        <div className="col" style={{ display: 'flex', flexDirection: 'column', width: '85%', justifyContent: 'space-between', paddingBottom: '2em', fontSize: 'medium'}}>
          <p className="fs-5">Company</p>
          {
            companyLinks.map((link, index) => <a className='text-muted' style={ {textDecoration: "none"} } href="" key={index}>{link}</a>)
          }
        </div>
        <div className="col" style={{ display: 'flex', flexDirection: 'column', width: '85%', justifyContent: 'space-between', paddingBottom: '2em', fontSize: 'medium'}}>
          <p className="fs-5">Support</p>
          {
            supportLinks.map((link, index) => <a className='text-muted' style={ {textDecoration: "none"} } href="" key={index}>{link}</a>)
          }
        </div>
        <div className="col" style={{ display: 'flex', flexDirection: 'column', width: '85%', justifyContent: 'space-between', paddingBottom: '13em', fontSize: 'medium'}}>
          <p className="fs-5">Account</p>
          {
            accountLinks.map((link, index) => <a className='text-muted' style={ {textDecoration: "none"} } href="" key={index}>{link}</a>)
          }
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize: "75%"}}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE &amp; MCX &#8208; SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd.&#8208; SEBI Registration no.: IN&#8208;DP&#8208;431&#8208;2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 &#8208; SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru &#8208; 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF{" "}
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
      <div className='container' style={{ display: 'flex', flexDirection: 'row', width: '85%', justifyContent: 'space-between', paddingBottom: '1em', fontSize: 'small'}} >
        {
            footerLinks.map((link, index) => <a className='text-muted' style={ {textDecoration: "none"} } href="" key={index}>{link}</a>)
        }
      </div>
    </div>
    </footer>
  );
}

export default Footer;
