// Links filled in once Stripe is set up. Empty means "not live yet":
// subscribe buttons then send people to the free sample form instead.
window.PTP = {
  stripeMonthly: "",   // Stripe payment link for $79/month
  stripeYearly: "",    // Stripe payment link for $790/year
  stripePortal: "",    // Stripe customer portal login link
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
