import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
export default function Disclaimer() {
  return (
    <>
     <Header />
      <div className="text-white lg:mx-[7%] mx-[5%]  mb-[5%] pt-5 lg:pt-0">
        <h1 className="lg:text-3xl text-2xl  font-bold text-center text-[#FFAC2F] pb-[3%]">Disclaimer for True AdBlocker</h1>


<p className="lg:text-lg text-base">All the information on this website - https://TrueAdBlocker.com/ - is published in good faith and for general information purpose only. True AdBlocker does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (True AdBlocker), is strictly at your own risk. True AdBlocker will not be liable for any losses and/or damages in connection with the use of our website.</p>

<p className="lg:text-lg text-base">From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

<p className="lg:text-lg text-base">Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information. </p>

<h2 className="lg:text-lg text-base font-semibold pt-5 text-[#FFAC2F]">Consent</h2>

<p className="lg:text-lg text-base">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

<h2 className="lg:text-lg text-base font-semibold pt-5 text-[#FFAC2F]">Update</h2>

<p className="lg:text-lg text-base">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
      </div>
      <Footer />
    </>
  )
}
