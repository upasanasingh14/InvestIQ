import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row p-5 mt-5 '>
                <div className='col-8'>
                        <a href='' style={{textDecoration:"none"}}><h4 className='text-center'>Brokerage calculator</h4></a>
                        <ul className='text-muted mt-4' style={{lineHeight:"2.5", fontSize:"12px"}}>
                            <li>Call & Trade RMS auto-squareoff: Additional charges of Rs50 + GST per order.</li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged Rs20 per contract note. Courier charges apply.</li>
                            <li>For NRI account (non-PIS),0.5% or Rs100 per executed order for equity (whichever is lower).</li>
                            <li>For NRI account (PIS), 0.5% or Rs200 per executed order for equity (whichever is lower).</li>
                            <li>If the account is in debit balance, any order placed will be charged Rs.40 per executed order instead of Rs.20 per executed order.</li>
                        </ul>
                </div>
                <div className='col-4'>
                    
                </div>
            </div>
        </div>
     );
}

export default Brokerage;