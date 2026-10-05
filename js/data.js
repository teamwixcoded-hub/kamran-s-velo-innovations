/* Editable site content. Replace every TODO value with real, current data before launch. */
window.VELO = {
  email: 'team@velocoded.com',
  phone: '+92 329 4495833',
  phoneHref: '+923294495833',
  social: {
    // TODO: replace with the real profile URLs
    LinkedIn: '#',
    'Wix Marketplace': '#',
    GitHub: '#'
  },
  // Client logos shown on the home page. bg matches the logo's own background so it stays readable.
  clients: [
    { name: 'Aspireon', logo: 'assets/clients/aspireon.png', bg: '#ffffff' },
    { name: 'EnergyPlex', logo: 'assets/clients/energyplex.png', bg: '#1a1a26' },
    { name: 'Diama Security', logo: 'assets/clients/diama.png', bg: '#14264a' },
    { name: 'Faerie Tale Alpacas', logo: 'assets/clients/faerie-tale-alpacas.png', bg: '#eeeeef' },
    { name: "YUAN's Art Studio", logo: 'assets/clients/yuans-art-studio.png', bg: '#ffffff', multiply: true }
  ],
  // categories: any of 'Wix Studio' | 'Velo' | 'Integrations'. featured: true shows it on the home page.
  // image: path to a real screenshot, e.g. 'assets/work/project-1.webp'. Leave '' to show a placeholder.
  projects: [
    { name: 'Aspireon Board Assessment Platform', categories: ['Velo', 'Integrations'], featured: true, result: 'The whole system: assessments, report generation, Brevo email automations, and admin, board member and commissioner dashboards.', image: 'assets/work/aspireon-dashboard.jpg' },
    { name: 'Faerie Tale Alpacas Website', categories: ['Wix Studio'], featured: true, result: 'A Wix Studio site for a family alpaca farm: experience bookings, an online shop, alpacas for sale and a blog.', image: 'assets/work/faerie-tale-alpacas.jpg' },
    { name: 'Diama Security Website', categories: ['Wix Studio'], result: 'A Wix Studio site for a UK security firm covering executive protection, training and consultancy, threat advice and news.', image: 'assets/work/diama-security.jpg' },
    { name: 'YUAN\'s Art Studio: Bulk Session Booking', categories: ['Velo', 'Integrations'], featured: true, result: 'Extended Wix Bookings through its API so students pick a class, choose several sessions and pay in one checkout.', image: 'assets/work/yuans-bulk-booking.jpg' },
    { name: 'Customer, Orders & Files Dashboard', categories: ['Velo'], result: 'One admin dashboard to track customers, prospects, active files, orders, payments and follow-ups, with live pipeline stats.', image: 'assets/work/orders-dashboard.jpg' },
    { name: 'IPSA Membership Platform', categories: ['Velo'], result: 'Replaced hours of manual certificate work with a portal serving 9,000+ members across five membership types.', image: 'assets/work/ipsa-admin-overview.png' },
    { name: 'EnergyPlex Camp Booking System', categories: ['Velo'], result: 'Custom multi-child camp checkout with per-day capacity limits, waivers, Wix Pay and an admin dashboard.', image: 'assets/work/energyplex-camp-registration.jpg' },
    { name: 'Find Your Pilot Marketplace', categories: ['Integrations'], result: 'Rescued a stalled build for an agency client: subscriptions, team dashboards and admin moderation, delivered live.', image: '' },
  ],

  // Client reviews. Use only wording the client has approved.
  reviews: [
    // DRAFT WORDING: each quote needs the client's approval (draft: true) before the site goes live.
    // Edit the wording to match what they actually said, then delete the draft flag. The browser console warns while any draft remains.
    { quote: 'They built the whole assessment system for us: the questionnaires, the reports, the emails and all three dashboards. It works the way we described it, and it has been reliable.', name: 'Aspireon', company: '', project: 'Board assessment platform', draft: true },
    { quote: 'Our students can now book several sessions in one go instead of one at a time. It sits right inside our Wix Bookings setup and saves us a lot of back and forth.', name: "YUAN's Art Studio", company: '', project: 'Bulk session booking', draft: true },
    { quote: 'Our site looks the way we hoped, and it is easy to run. Booking, the shop and the blog all work well together.', name: 'Faerie Tale Alpacas', company: '', project: 'Website design', draft: true },
    { quote: 'A clean, professional site that fits how we want to present the business. Communication was clear throughout.', name: 'Diama Security', company: '', project: 'Website design', draft: true },
    { quote: 'Parents can register every child in one checkout, and we can see capacity and attendance in one place. It has taken a lot of manual work off our plate.', name: 'EnergyPlex', company: '', project: 'Camp booking system', draft: true },
    { quote: 'Certificates, applications and member records used to eat hours every week. Now it runs through one portal, and the team can focus on members instead of paperwork.', name: 'IPSA', company: '', project: 'Membership platform', draft: true }
  ]
};
