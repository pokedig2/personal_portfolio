# Google Analytics & Search Console Setup Guide

## Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account for your portfolio
4. Set up a property for `destinbyrd.com`

### Step 2: Get Your Measurement ID
1. In Google Analytics, go to Admin → Data Streams
2. Click "Add stream" → Web
3. Enter your website URL: `https://destinbyrd.com`
4. Copy your Measurement ID (starts with "G-")

### Step 3: Update Your Website
1. Open `public/index.html`
2. Find the line: `gtag('config', 'GA_MEASUREMENT_ID', {`
3. Replace `GA_MEASUREMENT_ID` with your actual ID (e.g., `G-XXXXXXXXXX`)
4. Also update the script src: `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`

### Step 4: Verify Installation
1. Deploy your website
2. Visit your site
3. Check Google Analytics Real-Time reports
4. You should see your visit in real-time

## Google Search Console Setup

### Step 1: Add Your Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter your domain: `destinbyrd.com`
4. Choose "Domain" property type (recommended)

### Step 2: Verify Ownership
Choose one of these verification methods:

#### Option A: DNS Record (Recommended)
1. Copy the TXT record provided by Google
2. Add it to your domain's DNS settings
3. Wait for verification (can take up to 72 hours)

#### Option B: HTML File
1. Download the HTML verification file
2. Upload it to your website root
3. Verify in Search Console

### Step 3: Submit Your Sitemap
1. In Search Console, go to Sitemaps
2. Add your sitemap URL: `https://destinbyrd.com/sitemap.xml`
3. Submit for indexing

### Step 4: Request Indexing
1. Go to URL Inspection
2. Enter your homepage URL: `https://destinbyrd.com`
3. Click "Request Indexing"

## Enhanced Analytics Features

### What's Already Implemented:
✅ **Page Views**: Automatic tracking of all page visits
✅ **Scroll Depth**: Tracks how far users scroll (25%, 50%, 75%, 100%)
✅ **Section Engagement**: Tracks which sections users view
✅ **Contact Clicks**: Tracks email, GitHub, LinkedIn, Twitter clicks
✅ **User Behavior**: Session duration, bounce rate, etc.

### Custom Events Tracked:
- `scroll_depth`: When users scroll to 25%, 50%, 75%, 100%
- `section_view`: When users view each section (about, education, etc.)
- `contact_click`: When users click contact links

## Monitoring & Optimization

### Google Analytics Reports to Monitor:
1. **Audience Overview**: Visitors, sessions, page views
2. **Acquisition**: How people find your site
3. **Behavior**: Most viewed pages, bounce rate
4. **Conversions**: Contact link clicks
5. **Real-Time**: Live visitor activity

### Search Console Reports to Monitor:
1. **Performance**: Search queries, clicks, impressions
2. **Index Coverage**: Pages indexed by Google
3. **Enhancements**: Rich results, mobile usability
4. **Core Web Vitals**: Page speed metrics

## Privacy Compliance

### GDPR Considerations:
- Google Analytics respects user privacy settings
- Users can opt-out via browser settings
- No personally identifiable information is collected
- Analytics data is anonymized

### Cookie Notice (Optional):
Consider adding a cookie consent banner if targeting EU users.

## Troubleshooting

### Common Issues:
1. **Analytics not tracking**: Check Measurement ID is correct
2. **Search Console not verifying**: Wait 24-72 hours for DNS propagation
3. **Sitemap errors**: Ensure sitemap.xml is accessible at `/sitemap.xml`

### Testing Tools:
- [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
- [Google Search Console URL Inspection](https://search.google.com/search-console/inspect)
- [PageSpeed Insights](https://pagespeed.web.dev/)

## Next Steps

1. **Set up Goals**: Create conversion goals for contact form submissions
2. **Custom Dimensions**: Track user types (recruiters, developers, etc.)
3. **A/B Testing**: Test different layouts or content
4. **Performance Monitoring**: Set up alerts for site issues
5. **SEO Monitoring**: Track keyword rankings and search performance

## Contact Information

For technical support:
- Email: destin.byrd@outlook.com
- GitHub: https://github.com/pokedig2
- LinkedIn: https://www.linkedin.com/in/destin-byrd/
