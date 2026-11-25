// Stripe payment links and the customer portal login.
window.PTP = {
  stripeMonthly: "https://buy.stripe.com/dRmaEY4ja7M2fSs7b10Ba00",   // Stripe payment link for $79/month
  stripeYearly: "https://buy.stripe.com/28EcN64jac2icGgfHx0Ba01",    // Stripe payment link for $790/year
  stripePortal: "https://billing.stripe.com/p/login/dRmaEY4ja7M2fSs7b10Ba00",    // Stripe customer portal login link
};

document.addEventListener("DOMContentLoaded", function () {
  var map = { monthly: "stripeMonthly", yearly: "stripeYearly", portal: "stripePortal" };
  document.querySelectorAll("[data-stripe]").forEach(function (a) {
    var url = window.PTP[map[a.getAttribute("data-stripe")]];
    if (url) { a.href = url; }
    else if (a.getAttribute("data-stripe") === "portal") {
      a.href = "mailto:joelspulpittopost@gmail.com?subject=Manage%20my%20subscription";
    } else { a.href = "setup.html"; }
  });
});
