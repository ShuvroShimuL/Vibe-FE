# Prelination WordPress Implementation Guide
## Complete Technical Setup Instructions

---

## 1. Recommended WordPress Theme

### Primary Recommendation: Astra Pro

**Why Astra Pro:**
- Lightweight (less than 50KB)
- Highly customizable
- Excellent performance
- Built-in header/footer builder
- WooCommerce ready (for future monetization)
- Starter templates available

**Alternative Options:**

| Theme | Best For | Price |
|-------|----------|-------|
| GeneratePress | Speed & simplicity | $59/year |
| Kadence | Advanced customization | $79/year |
| Blocksy | Modern block editor | $69/year |
| Divi | Visual building | $89/year |

### Astra Pro Setup

```
1. Install Astra theme (free from WordPress.org)
2. Install Astra Pro plugin
3. Activate license
4. Import starter template (optional)
5. Customize via Customizer
```

---

## 2. Required Plugins

### Essential Plugins

| Plugin | Purpose | Cost | Priority |
|--------|---------|------|----------|
| Elementor Pro | Page builder | $59/year | Required |
| Astra Pro | Theme features | $59/year | Required |
| RankMath SEO | SEO optimization | Free/Paid | Required |
| WP Rocket | Performance | $59/year | Recommended |
| Wordfence | Security | Free/Paid | Required |
| UpdraftPlus | Backups | Free/Paid | Required |

### Form & Communication

| Plugin | Purpose | Cost |
|--------|---------|------|
| Fluent Forms | Contact forms | Free/Paid |
| WP Mail SMTP | Email delivery | Free |
| OneSignal | Push notifications | Free/Paid |

### Content Enhancement

| Plugin | Purpose | Cost |
|--------|---------|------|
| Ultimate Blocks | Gutenberg blocks | Free |
| Table of Contents Plus | Auto TOC | Free |
| Social Warfare | Social sharing | Free/Paid |

### Analytics

| Plugin | Purpose | Cost |
|--------|---------|------|
| MonsterInsights | Google Analytics | Free/Paid |
| Hotjar | Heatmaps | Free/Paid |

---

## 3. Page Builder: Elementor Pro Setup

### Why Elementor Pro

- Visual drag-and-drop editing
- Theme builder for headers/footers
- Dynamic content capabilities
- Form builder
- Popup builder
- 90+ widgets

### Elementor Pro Installation

```php
1. Purchase Elementor Pro
2. Download plugin ZIP
3. Plugins → Add New → Upload
4. Activate and enter license
5. Enable experiments in settings
```

### Elementor Settings Configuration

```
Settings → General:
☑ Post Types: Pages, Posts
☑ Disable Default Colors
☑ Disable Default Fonts

Settings → Style:
- Default Generic Fonts: Inter
- Content Width: 1200px
- Widget Space: 24px

Settings → Advanced:
- CSS Print Method: External File
- Load Font Awesome 4 Support: No
```

---

## 4. Theme Customization

### Astra Customizer Settings

#### Global Settings
```
Global → Colors:
- Theme Color: #1E40AF
- Link Color: #1E40AF
- Link Hover: #1E3A8A
- Text Color: #334155
- Heading Color: #0F172A

Global → Typography:
- Body Font: Inter
- Heading Font: Inter
- Base Font Size: 16px
```

#### Header Builder
```
Header Builder Structure:
[Logo] -------- [Menu] -------- [Buttons]

Above Header: Announcement bar (optional)
Primary Header:
- Logo: Left
- Primary Menu: Center
- Button Group: Right

Sticky Header:
☑ Enable sticky header
- Enable on: Desktop + Mobile
- Sticky Logo: Same
```

#### Footer Builder
```
Footer Builder Structure:
[Column 1] [Column 2] [Column 3] [Column 4]
[Copyright Bar]

Footer Widgets:
- Column 1: Logo + About text + Social
- Column 2: Quick Links menu
- Column 3: Exams menu
- Column 4: Contact info

Copyright:
- Text: © 2026 Prelination. All rights reserved.
- Links: Privacy | Terms | Refund
```

---

## 5. Page Templates Setup

### Create Pages

```
1. Home
2. About Us
3. Exams (Parent)
   - PTA Exams
   - BCS Exams
   - NTRCA Exams
   - Bank Jobs
4. Blog
5. Pricing
6. Contact
7. Success Stories
8. FAQ
9. Login (custom template)
10. Register (custom template)
```

### Page Template Assignment

| Page | Template | Builder |
|------|----------|---------|
| Home | Elementor Full Width | Elementor |
| About | Default | Elementor |
| Exams | Elementor Full Width | Elementor |
| Single Exam | Default | Elementor |
| Blog | Default | Theme |
| Single Post | Default | Theme/Gutenberg |
| Pricing | Elementor Full Width | Elementor |
| Contact | Default | Elementor |
| Success Stories | Default | Elementor |
| FAQ | Elementor Full Width | Elementor |

---

## 6. Menu Structure

### Primary Menu
```
Home
Exams (Dropdown)
├── PTA Exams
├── BCS Exams
├── NTRCA Exams
└── Bank Jobs
Blog
About
Contact
```

### Footer Menu 1: Quick Links
```
About Us
Pricing
Success Stories
FAQ
Contact
```

### Footer Menu 2: Exams
```
PTA Exams
BCS Exams
NTRCA Exams
Bank Jobs
```

---

## 7. Elementor Template Creation

### Global Templates

#### Header Template
```
1. Templates → Theme Builder → Header
2. Add New → Header
3. Design header layout
4. Set display conditions: Entire Site
```

#### Footer Template
```
1. Templates → Theme Builder → Footer
2. Add New → Footer
3. Design footer layout
4. Set display conditions: Entire Site
```

#### Single Post Template
```
1. Templates → Theme Builder → Single Post
2. Add New → Single Post
3. Design layout with dynamic widgets
4. Set display conditions: All Posts
```

### Reusable Sections

Create these as Elementor templates for reuse:

1. **Hero Section** - For inner pages
2. **CTA Section** - Newsletter signup
3. **Stats Counter** - Animated numbers
4. **Testimonial Slider** - Customer reviews
5. **Pricing Cards** - Pricing table
6. **FAQ Accordion** - Common questions

---

## 8. Custom CSS

### Add to Astra Customizer

```css
/* Custom CSS for Prelination */

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #1E40AF;
    border-radius: 5px;
}

/* Selection color */
::selection {
    background: #1E40AF;
    color: white;
}

/* Button hover lift effect */
.btn-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(30, 64, 175, 0.3);
}

/* Card hover effect */
.card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Gradient text */
.gradient-text {
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Section spacing */
.section-padding {
    padding: 100px 0;
}

@media (max-width: 768px) {
    .section-padding {
        padding: 60px 0;
    }
}

/* Animation classes */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Counter animation */
@keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Exam category colors */
.exam-pta { --exam-color: #8B5CF6; }
.exam-bcs { --exam-color: #0EA5E9; }
.exam-ntrca { --exam-color: #F97316; }
.exam-bank { --exam-color: #10B981; }
```

---

## 9. Performance Optimization

### WP Rocket Configuration

```
Cache:
☑ Enable caching for mobile devices
☑ Separate cache files for mobile
☑ Enable caching for logged-in users

File Optimization:
☑ Minify CSS files
☑ Minify JavaScript files
☑ Combine CSS files
☑ Combine JavaScript files
☑ Optimize CSS delivery
☑ Load JavaScript deferred

Media:
☑ LazyLoad for images
☑ LazyLoad for iframes/videos
☑ Disable WordPress embeds

Preload:
☑ Enable link preloading
☑ Prefetch DNS requests
```

### Image Optimization

```
1. Use WebP format where possible
2. Compress images before upload
3. Recommended sizes:
   - Hero images: 1920x800px
   - Blog featured: 1200x600px
   - Thumbnails: 600x400px
   - Icons: SVG format
```

### CDN Setup (Optional)

```
Recommended: Cloudflare (Free plan)
1. Sign up at cloudflare.com
2. Add your domain
3. Update nameservers
4. Enable auto-minify
5. Enable Brotli compression
```

---

## 10. SEO Configuration

### RankMath Setup

```
1. Install RankMath SEO plugin
2. Run setup wizard
3. Connect Google account
4. Configure:
   - Site type: Educational
   - Logo: Upload site logo
   - Default social image: Upload OG image
```

### SEO Settings per Page

```
Home Page:
- Title: Prelination | #1 Bangladesh Government Job Exam Preparation
- Description: Practice with 20,000+ BCS, PTA, NTRCA & Bank exam questions. Unique question sets, detailed analytics, PDF reports.

About Page:
- Title: About Us | Prelination
- Description: Learn about Prelination's mission to help Bangladeshi job aspirants achieve their dream careers.

Exams Page:
- Title: Government Job Exams | BCS, PTA, NTRCA, Bank | Prelination
- Description: Comprehensive exam preparation for BCS, PTA, NTRCA, and Bank jobs with 20,000+ practice questions.
```

### Schema Markup

```
Enable in RankMath:
☑ Organization schema
☑ Website schema
☑ Breadcrumb schema
☑ Article schema (for blog)
☑ FAQ schema (for FAQ page)
```

---

## 11. Security Setup

### Wordfence Configuration

```
Firewall:
☑ Enable Web Application Firewall
- Mode: Learning (first week), then Enabled

Scan:
☑ Schedule weekly scans
☑ Enable automatic threat resolution

Login Security:
☑ Enable 2FA for admin accounts
☑ Limit login attempts: 3
☑ Lockout duration: 4 hours
```

### Additional Security

```
1. Change default admin username
2. Use strong passwords
3. Keep WordPress updated
4. Keep plugins updated
5. Regular backups with UpdraftPlus
```

---

## 12. Backup Strategy

### UpdraftPlus Configuration

```
Settings:
- Files backup schedule: Weekly
- Database backup schedule: Daily
- Remote storage: Google Drive or Dropbox
- Retain: 4 backups

Manual Backup:
- Before major updates
- Before theme changes
- Before plugin installations
```

---

## 13. Analytics Setup

### Google Analytics 4

```
1. Create GA4 property
2. Install MonsterInsights
3. Connect GA4 account
4. Enable enhanced tracking:
   ☑ File downloads
   ☑ Form submissions
   ☑ Outbound links
   ☑ Scroll tracking
```

### Google Search Console

```
1. Add property in GSC
2. Verify via RankMath
3. Submit sitemap
4. Monitor performance
```

---

## 14. Integration with Exam Dashboard

### Single Sign-On (SSO)

Since your exam dashboard is already built, implement SSO:

```php
// WordPress functions.php
// Add custom code for SSO integration

function prelination_sso_integration() {
    // Verify user from exam dashboard
    // Auto-login to WordPress
    // Sync user sessions
}
```

### Header Integration

```
When user is logged into exam dashboard:
- Show user avatar in WordPress header
- Display "Dashboard" link
- Hide "Login" button
- Show "My Account" dropdown
```

### Link Structure

```
WordPress Site: prelination.com
Exam Dashboard: app.prelination.com or prelination.com/app

Navigation Links:
- "Start Practice" → app.prelination.com
- "Login" → app.prelination.com/login
- "Register" → app.prelination.com/register
- "My Dashboard" → app.prelination.com/dashboard
```

---

## 15. Launch Checklist

### Pre-Launch

```
☑ All pages created and designed
☑ Content proofread
☑ Images optimized
☑ SEO configured
☑ Analytics connected
☑ Forms tested
☑ Mobile responsive checked
☑ Cross-browser tested
☑ Performance optimized
☑ Security configured
☑ Backups scheduled
```

### Launch Day

```
☑ Remove "Coming Soon" mode
☑ Enable search engine indexing
☑ Submit sitemap to Google
☑ Test all links
☑ Test contact forms
☑ Verify SSL certificate
☑ Check page speed
☑ Monitor for errors
```

### Post-Launch

```
☑ Monitor analytics weekly
☑ Check search rankings
☑ Collect user feedback
☑ Plan content updates
☑ Schedule regular backups
☑ Update plugins monthly
```

---

## 16. Maintenance Schedule

### Weekly
- Check for plugin updates
- Review analytics
- Check contact form submissions
- Monitor site speed

### Monthly
- Update WordPress core
- Update themes and plugins
- Review and optimize content
- Check broken links
- Review security logs

### Quarterly
- Full site backup test
- SEO audit
- Performance audit
- Content strategy review
- User feedback analysis

---

*This implementation guide ensures a professional, high-performing WordPress website for Prelination.*
