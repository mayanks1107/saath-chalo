import React from 'react'
import coins from "../assets/dollar.png";
import leftquote from "../assets/left-quote.png";
import block from "../assets/block.png";


function Security() {
    return (
        <div className='container'>
            <div>
                <h1>What you can do to avoid scam</h1>
                <div>
                    <div>
                        <img src={block} alt="block" />
                        <h4>Never visit links sent by drivers</h4>
                        <p>Some fake drivers could try to make you pay outside our app by sending a link, a phone number or an email address.</p>
                    </div>
                    <div>
                        <img src={coins} alt="coins" />
                        <h4>For cash-only rides, always pay in the car</h4>
                        <p>Scammers are getting increasingly sophisticated in their attempts to get your money or payment details. Always pay in cash, in the car, upon departure.</p>
                    </div>
                    <div>
                        <img src={leftquote} alt="quote" />
                        <h4>Only pay the service fee on our app</h4>
                        <p>Even if the website sent by fake drivers looks like BlaBlaCar’s, do not transfer money outside our app.</p>
                    </div>

                </div>
            </div>
            <div>
                <div>
                    <h1>How scammers try to get your money or payment details</h1>
                </div>
                <div>
                    <div>
                        <img src="" alt="fault alert" />
                        <h5>By building a fake website that looks like BlaBlaCar’s</h5>
                        <p>Scams succeed because they look like the real thing. Scammers are getting smarter: they will try to make you visit another website, very similar to ours, that will convince you to give them your money or payment details.</p>
                        <p>Make sure you’re always paying on BlaBlaCar’s app or website.</p>
                    </div>
                    <div>
                        <img src="" alt="profile alert" />
                        <h5>By creating fake user profiles</h5>
                        <p>Fake profiles are usually created just a few days or hours ago and don’t have any ratings from other members. They also often charge less than ‌other similar rides. Before or after booking the ride, they could try to contact you outside of our platform (through your phone or WhatsApp).</p>
                        <p>If you think you interacted with a fake profile, you can report it.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>What to do if you think someone is trying to scam you</h1>
                <div>
                    <h5>If the driver sends you a link to pay for your ride</h5>
                    <p>You can respond: “I’m uncomfortable using the link you sent, I will follow BlaBlaCar’s recommendation and pay you in cash, in the car.”</p>
                </div>
                <div>
                    <h5>If the driver insists on getting paid in advance</h5>
                    <p>You can respond: “Don't worry, I will pay on the day of departure, in the car. I do not want to pay online.”</p>
                </div>
                <div>
                    <h5>If the driver asks you for additional charges</h5>
                    <p>You can respond: “I have already paid the service fee on BlaBlaCar's app, I will pay in cash upon departure.”</p>
                </div>
            </div>
            <div>
                <h1>Noticed something suspicious? Report it</h1>
                <p>Help us protect you from scams by reporting if you notice a suspicious message, if you have been scammed or if you think someone is trying to scam you.</p>
                <p>Report a scam</p>

            </div>
            <div>
                <h1>Online security tips</h1>
                <div>
                    <h5>Password quality</h5>
                    <p>Your password should be at least 8 characters with a mix of at least 1 letter, 1 number, and 1 special character (e.g. #, @, &). Having complex and unique passwords on all your accounts, not just your BlaBlaCar account, will greatly reduce the chances of having security issues.</p>
                </div>
                <div>
                    <h5>Online safety</h5>
                    <p>A few tips to help keep you safe online:
• Check for “https://” and “🔒” at the beginning of a website: This means your connection is secure.
• Check if the URL matches the BlaBlaCar website: A link in a message could look right, but if the URL doesn’t match the official website (https://www.blablacar.co.uk) — it’s a scam. Always check the page's entire url before entering your login or payment info.
• Use only your device: Don’t create accounts or enter passwords on a device that’s not yours — like a friend’s phone or internet cafe.
• Update your software and devices: These updates often address security risks and introduce new security protections.</p>
                </div>
                <div>
                    <h5>Off-site payments and messages</h5>
                    <p>Tips to keep you safe while exchanging messages with other members: • Only exchange on BlaBlaCar: Do not exchange on other platforms (WhatsApp, Messenger) before booking. • Keep your personal info secure: Never share your personal information like phone number, email and payment details before booking a ride. • Don’t follow links in messages: Never click on or open a link in suspicious or unsolicited messages on the BlaBlaCar platform or third party messaging apps.</p>
                </div>
            </div>
        </div>
    )
}

export default Security