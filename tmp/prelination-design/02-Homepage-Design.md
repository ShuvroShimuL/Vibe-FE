# Prelination Homepage Design
## Complete Section-by-Section Layout

---

## Page Structure Overview

```
┌─────────────────────────────────────────────────────────────┐
│  1. ANNOUNCEMENT BAR                                        │
├─────────────────────────────────────────────────────────────┤
│  2. HEADER (Navigation)                                     │
├─────────────────────────────────────────────────────────────┤
│  3. HERO SECTION                                            │
├─────────────────────────────────────────────────────────────┤
│  4. EXAM CATEGORIES                                         │
├─────────────────────────────────────────────────────────────┤
│  5. HOW IT WORKS                                            │
├─────────────────────────────────────────────────────────────┤
│  6. LIVE DEMO QUIZ                                          │
├─────────────────────────────────────────────────────────────┤
│  7. KEY FEATURES                                            │
├─────────────────────────────────────────────────────────────┤
│  8. STATISTICS COUNTER                                      │
├─────────────────────────────────────────────────────────────┤
│  9. PRICING PLANS                                           │
├─────────────────────────────────────────────────────────────┤
│  10. TESTIMONIALS                                           │
├─────────────────────────────────────────────────────────────┤
│  11. LATEST BLOG POSTS                                      │
├─────────────────────────────────────────────────────────────┤
│  12. NEWSLETTER / CTA                                       │
├─────────────────────────────────────────────────────────────┤
│  13. FOOTER                                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 1: Announcement Bar

### Layout
- Full width, fixed height
- Background: Gradient from #0F172A to #1E40AF
- Text: White, centered
- Close button on right

### Content
```
📢 BCS 46th Preliminary Result Published! Check Your Preparation Level →
```

### Design Specs
```
Height: 44px
Background: linear-gradient(90deg, #0F172A 0%, #1E40AF 100%)
Text: #FFFFFF, 14px, 500 weight
Link: Underline on hover
Close button: Right side, X icon
Mobile: Text scrolls/marquee if too long
```

---

## Section 2: Header/Navigation

### Layout
- Fixed position on scroll
- White background with shadow on scroll
- Logo left, menu center, CTA buttons right

### Structure
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [LOGO]        Home  Exams  Blog  About  Contact        [Login] [Start]│
└─────────────────────────────────────────────────────────────────────────┘
```

### Logo
- Prelination wordmark with icon
- Icon: Graduation cap or checkmark in circle
- Height: 40px

### Navigation Menu
| Item | Dropdown | Link |
|------|----------|------|
| Home | No | / |
| Exams | Yes | # |
| - PTA Exams | No | /exams/pt |
| - BCS Exams | No | /exams/bcs |
| - NTRCA | No | /exams/ntrca |
| - Bank Jobs | No | /exams/bank |
| Blog | No | /blog |
| About | No | /about |
| Contact | No | /contact |

### CTA Buttons
| Button | Style | Link |
|--------|-------|------|
| Login | Secondary outline | /login |
| Start Free | Primary filled | /register |

### Scroll Behavior
```
Default: Background transparent
On Scroll: Background #FFFFFF, shadow 0 2px 20px rgba(0,0,0,0.1)
Transition: all 0.3s ease
```

### Mobile Menu
- Hamburger icon (3 lines)
- Full-screen overlay
- Slide from right
- Close button top right

---

## Section 3: Hero Section

### Layout
- Full width
- Two-column layout (desktop): Content left, Illustration right
- Single column (mobile): Content stacked
- Background: Subtle gradient or pattern

### Background
```
Primary: #FFFFFF
Accent: Radial gradient circle at top-right, #3B82F6 at 5% opacity
Pattern: Subtle dot grid pattern, 5% opacity
```

### Left Column - Content

#### Badge
```
Text: "#1 Exam Prep Platform in Bangladesh"
Background: #EFF6FF (blue-50)
Text Color: #1E40AF
Border Radius: 20px
Padding: 8px 16px
Font Size: 14px
Icon: Star or trophy
```

#### Headline
```
Text: "Master Bangladesh Government Job Exams with Confidence"
Font Size: 48px (desktop), 32px (mobile)
Font Weight: 700
Color: #0F172A
Line Height: 1.2
Max Width: 600px
```

#### Subheadline
```
Text: "Practice with 20,000+ previous year questions from BCS, PTA, NTRCA, and Bank exams. Our unique algorithm ensures you never see the same question set twice."
Font Size: 18px
Color: #64748B
Line Height: 1.7
Max Width: 540px
Margin Top: 24px
```

#### CTA Buttons
```
Primary: "Start Free Practice" → /register
Secondary: "View Demo Exam" → /demo
Button Group Margin Top: 32px
Gap between buttons: 16px
```

#### Trust Indicators
```
⭐⭐⭐⭐⭐ 4.9/5 from 10,000+ students
Icons: 5 star icons
Text: "Trusted by 50,000+ aspirants"
Margin Top: 32px
```

### Right Column - Hero Illustration

#### Illustration
- Modern flat illustration
- Student studying with laptop
- Exam-related elements (books, clock, checkmarks)
- Color scheme matches brand colors
- Size: 500px width (desktop)

#### Stats Cards (Floating)
```
Card 1: "20,000+ Questions" - Position: top-right
Card 2: "90% Success Rate" - Position: bottom-left
Card 3: "4 Exam Types" - Position: center-right

Style:
- Background: #FFFFFF
- Shadow: 0 8px 30px rgba(0,0,0,0.12)
- Border Radius: 12px
- Padding: 16px 20px
- Icon + Text layout
```

### Section Spacing
```
Padding Top: 140px (accounts for fixed header)
Padding Bottom: 100px
```

---

## Section 4: Exam Categories

### Layout
- Container width: 1200px
- Section heading centered
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)

### Section Header
```
Eyebrow: "EXAM CATEGORIES"
Heading: "Choose Your Exam Type"
Subheading: "Comprehensive question banks for all major Bangladesh government job exams"
Text Align: Center
```

### Category Cards

#### Card Structure
```
┌─────────────────────────┐
│  [ICON]                 │
│  Exam Name              │
│  Question Count         │
│  Description            │
│  [View Questions →]     │
└─────────────────────────┘
```

#### Card 1: PTA (Primary Teachers Assistant)
```
Icon: ChalkboardTeacher (graduation cap)
Icon Background: Gradient #8B5CF6 to #7C3AED
Title: "PTA Exams"
Count: "2,700+ Questions"
Description: "Primary Teachers Assistant exam preparation with questions from 2018-2023"
Link: /exams/pt
Badge: "Most Popular" - Red
```

#### Card 2: BCS (Bangladesh Civil Service)
```
Icon: Building2 (government building)
Icon Background: Gradient #0EA5E9 to #0284C7
Title: "BCS Exams"
Count: "1,400+ Questions"
Description: "Complete BCS preliminary preparation from 40th to 50th BCS examinations"
Link: /exams/bcs
Badge: "Updated" - Blue
```

#### Card 3: NTRCA
```
Icon: Users (teachers)
Icon Background: Gradient #F97316 to #EA580C
Title: "NTRCA Exams"
Count: "Coming Soon"
Description: "Non-Government Teachers' Registration & Certification Authority exam prep"
Link: /exams/ntrca
Badge: "New" - Orange
```

#### Card 4: Bank Jobs
```
Icon: Landmark (bank building)
Icon Background: Gradient #10B981 to #059669
Title: "Bank Jobs"
Count: "1,200+ Questions"
Description: "Bank recruitment exam preparation for all major Bangladesh banks"
Link: /exams/bank
Badge: "Trending" - Green
```

### Card Design Specs
```
Background: #FFFFFF
Border Radius: 16px
Padding: 32px
Shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
Border: 1px solid #E2E8F0
Hover Shadow: 0 12px 40px rgba(0, 0, 0, 0.15)
Hover Transform: translateY(-8px)
Transition: all 0.3s ease

Icon Container:
- Size: 64px
- Border Radius: 16px
- Gradient background

Title:
- Font Size: 24px
- Font Weight: 700
- Color: #0F172A
- Margin Top: 20px

Count:
- Font Size: 16px
- Font Weight: 600
- Color: #1E40AF
- Margin Top: 8px

Description:
- Font Size: 15px
- Color: #64748B
- Line Height: 1.6
- Margin Top: 12px

Link:
- Font Size: 15px
- Font Weight: 600
- Color: #1E40AF
- Margin Top: 20px
- Arrow icon on right
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #F8FAFC
```

---

## Section 5: How It Works

### Layout
- Container width: 1200px
- Section heading centered
- 4-step horizontal timeline (desktop)
- Vertical stack (mobile)

### Section Header
```
Eyebrow: "HOW IT WORKS"
Heading: "Start Practicing in 4 Simple Steps"
Subheading: "Our intelligent system creates unique question sets tailored to your needs"
Text Align: Center
```

### Steps

#### Step 1: Select Exam
```
Number: "01"
Icon: MousePointerClick
Title: "Select Your Exam"
Description: "Choose from PTA, BCS, NTRCA, or Bank job exams"
```

#### Step 2: Choose Years
```
Number: "02"
Icon: CalendarDays
Title: "Pick Year Range"
Description: "Select which years' questions you want to practice from"
```

#### Step 3: Generate Set
```
Number: "03"
Icon: Sparkles
Title: "Generate Unique Set"
Description: "Our algorithm creates a fresh 90-question set instantly"
```

#### Step 4: Practice & Improve
```
Number: "04"
Icon: TrendingUp
Title: "Practice & Track Progress"
Description: "Take the exam, get detailed analytics, and improve"
```

### Step Design Specs
```
Number:
- Font Size: 72px
- Font Weight: 800
- Color: #E2E8F0 (light gray)
- Position: Behind content

Icon Container:
- Size: 80px
- Background: #FFFFFF
- Border: 3px solid #E2E8F0
- Border Radius: 50%
- Centered above content

Connector Line (desktop only):
- Height: 3px
- Background: #E2E8F0
- Position: Between steps
- Active segment: #1E40AF

Title:
- Font Size: 20px
- Font Weight: 700
- Color: #0F172A
- Margin Top: 20px

Description:
- Font Size: 15px
- Color: #64748B
- Line Height: 1.6
- Margin Top: 8px
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #FFFFFF
```

---

## Section 6: Live Demo Quiz

### Layout
- Full width with container
- Two-column: Quiz card left, Info right
- Interactive quiz with 5 sample questions

### Left Column - Quiz Card

#### Card Header
```
Title: "Try a Sample Quiz"
Subtitle: "5 questions from BCS exams"
Timer: "⏱️ 2:30"
Progress Bar: Shows question progress
```

#### Question Area
```
Question Number: "Question 1 of 5"
Question Text: "Which country won the FIFA World Cup 2022?"
Options:
○ Argentina
○ Brazil
○ France
○ Germany

Button: "Next Question →"
```

#### Quiz Card Design
```
Background: #FFFFFF
Border Radius: 20px
Padding: 40px
Shadow: 0 8px 40px rgba(0, 0, 0, 0.1)
Border: 2px solid #E2E8F0

Progress Bar:
- Height: 8px
- Background: #E2E8F0
- Fill: #1E40AF
- Border Radius: 4px

Option Style:
- Padding: 16px 20px
- Border: 2px solid #E2E8F0
- Border Radius: 10px
- Hover Border: #3B82F6
- Selected: Border #1E40AF, Background #EFF6FF
```

### Right Column - Information

#### Heading
```
"Experience Our Exam Interface"
```

#### Feature List
```
✓ 90 questions per exam set
✓ Timer-based practice
✓ Instant result with explanations
✓ Category-wise performance breakdown
✓ PDF report via email
✓ Retake option for weak areas
```

#### CTA
```
Button: "Create Free Account"
Link: /register
Style: Primary Large
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)
Text: White
```

---

## Section 7: Key Features

### Layout
- Container width: 1200px
- Section heading centered
- 3x2 grid of feature cards (desktop)
- 2x3 (tablet), 1x6 (mobile)

### Section Header
```
Eyebrow: "WHY CHOOSE PRELINATION"
Heading: "Features That Set Us Apart"
Subheading: "Everything you need to ace your government job exams"
Text Align: Center
```

### Feature Cards

#### Feature 1: Unique Question Sets
```
Icon: Shuffle
Title: "Unique Question Sets"
Description: "Never see the same question combination twice. Our algorithm generates fresh sets every time."
```

#### Feature 2: Smart Analytics
```
Icon: BarChart3
Title: "Detailed Analytics"
Description: "Track your performance by category, identify weak areas, and focus your study efforts."
```

#### Feature 3: PDF Reports
```
Icon: FileText
Title: "PDF Result Reports"
Description: "Get comprehensive exam results delivered straight to your email inbox."
```

#### Feature 4: Previous Year Questions
```
Icon: History
Title: "Previous Year Questions"
Description: "Practice with authentic questions from past BCS, PTA, NTRCA, and Bank exams."
```

#### Feature 5: Retake System
```
Icon: RotateCcw
Title: "Smart Retake System"
Description: "Retake full exams or focus on specific categories where you need improvement."
```

#### Feature 6: Mobile Friendly
```
Icon: Smartphone
Title: "Practice Anywhere"
Description: "Access your exams on any device - desktop, tablet, or mobile phone."
```

### Feature Card Design
```
Background: #FFFFFF
Border Radius: 12px
Padding: 32px
Border: 1px solid #E2E8F0
Hover Shadow: 0 8px 24px rgba(0, 0, 0, 0.1)
Hover Border: #3B82F6
Transition: all 0.3s ease

Icon:
- Size: 48px
- Color: #1E40AF
- Stroke Width: 2

Title:
- Font Size: 18px
- Font Weight: 600
- Color: #0F172A
- Margin Top: 20px

Description:
- Font Size: 15px
- Color: #64748B
- Line Height: 1.6
- Margin Top: 10px
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #F8FAFC
```

---

## Section 8: Statistics Counter

### Layout
- Full width
- 4-column stats (desktop)
- Background with gradient or pattern

### Stats

| Stat | Number | Label |
|------|--------|-------|
| 1 | 20,000+ | Total Questions |
| 2 | 50,000+ | Active Students |
| 3 | 4 | Exam Categories |
| 4 | 95% | Success Rate |

### Design Specs
```
Background: #0F172A
Padding: 80px 0

Number:
- Font Size: 56px
- Font Weight: 800
- Color: #FFFFFF
- Gradient text optional: #3B82F6 to #10B981

Label:
- Font Size: 16px
- Font Weight: 500
- Color: #94A3B8
- Margin Top: 8px

Divider (desktop):
- Width: 1px
- Height: 60px
- Background: #334155
- Between stats
```

### Animation
```
Counter animation on scroll into view
Duration: 2 seconds
Easing: ease-out
```

---

## Section 9: Pricing Plans

### Layout
- Container width: 1200px
- Section heading centered
- 3-column pricing cards (desktop)
- Featured/middle card highlighted

### Section Header
```
Eyebrow: "PRICING PLANS"
Heading: "Choose Your Plan"
Subheading: "Start free and upgrade when you're ready"
Text Align: Center
```

### Pricing Cards

#### Free Plan
```
Name: "Free"
Price: "৳0"
Period: "/month"
Description: "Perfect for getting started"
Features:
✓ 5 practice exams per month
✓ Basic analytics
✓ Email support
✓ Access to PTA questions
✗ BCS & Bank questions
✗ PDF reports
✗ Retake system

Button: "Get Started Free"
Style: Secondary outline
```

#### Premium Plan (Featured)
```
Name: "Premium"
Price: "৳299"
Period: "/month"
Badge: "MOST POPULAR"
Description: "Best for serious aspirants"
Features:
✓ Unlimited practice exams
✓ Advanced analytics
✓ Priority support
✓ All exam categories
✓ PDF reports via email
✓ Full retake system
✓ Category-wise practice
✓ Progress tracking

Button: "Start Premium"
Style: Primary filled
```

#### Pro Plan
```
Name: "Pro"
Price: "৳799"
Period: "/3 months"
Badge: "SAVE 30%"
Description: "Maximum value for dedicated students"
Features:
✓ Everything in Premium
✓ 3 months access
✓ Personal study plan
✓ Expert guidance
✓ Mock interview prep
✓ Downloadable materials

Button: "Get Pro Access"
Style: Secondary outline
```

### Pricing Card Design
```
Background: #FFFFFF
Border Radius: 20px
Padding: 40px
Border: 2px solid #E2E8F0
Shadow: 0 4px 20px rgba(0, 0, 0, 0.08)

Featured Card:
- Border: 2px solid #1E40AF
- Shadow: 0 8px 40px rgba(30, 64, 175, 0.2)
- Transform: scale(1.05)

Badge:
- Background: #1E40AF
- Text: White
- Padding: 6px 16px
- Border Radius: 20px
- Font Size: 12px
- Font Weight: 700

Price:
- Font Size: 48px
- Font Weight: 800
- Color: #0F172A

Feature List:
- Checkmark icon: #10B981
- X icon: #EF4444
- Font Size: 15px
- Color: #334155
- Spacing: 12px between items
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #FFFFFF
```

---

## Section 10: Testimonials

### Layout
- Container width: 1200px
- Section heading centered
- 3-column testimonial cards
- Carousel on mobile

### Section Header
```
Eyebrow: "STUDENT SUCCESS STORIES"
Heading: "What Our Students Say"
Subheading: "Join thousands of successful candidates who achieved their dream jobs"
Text Align: Center
```

### Testimonial Cards

#### Testimonial 1
```
Quote: "Prelination helped me crack BCS 45th. The unique question sets ensured I practiced every possible variation. Got my dream posting!"
Name: "Rahim Ahmed"
Role: "BCS 45th Batch, Administration"
Avatar: Male, professional
Rating: 5 stars
```

#### Testimonial 2
```
Quote: "The analytics feature is a game-changer. I could see exactly which subjects needed more attention. Cleared PTA in my first attempt!"
Name: "Fatima Rahman"
Role: "Primary Teacher, Dhaka"
Avatar: Female, professional
Rating: 5 stars
```

#### Testimonial 3
```
Quote: "PDF reports in my email helped me track progress over time. The retake system for weak areas was incredibly useful."
Name: "Kamal Hossain"
Role: "Senior Officer, Sonali Bank"
Avatar: Male, professional
Rating: 5 stars
```

### Testimonial Card Design
```
Background: #FFFFFF
Border Radius: 16px
Padding: 32px
Border: 1px solid #E2E8F0
Shadow: 0 4px 16px rgba(0, 0, 0, 0.06)

Quote Icon:
- Size: 40px
- Color: #3B82F6 at 20% opacity
- Position: Top left

Quote Text:
- Font Size: 16px
- Color: #334155
- Line Height: 1.7
- Font Style: Italic

Author Section:
- Avatar: 56px circle
- Name: 16px, 600 weight, #0F172A
- Role: 14px, #64748B

Rating:
- Star icon: #F59E0B
- Size: 16px
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #F8FAFC
```

---

## Section 11: Latest Blog Posts

### Layout
- Container width: 1200px
- Section heading with "View All" link
- 3-column blog cards (desktop)

### Section Header
```
Eyebrow: "STUDY MATERIALS & TIPS"
Heading: "Latest from Our Blog"
Link: "View All Articles →" (right side)
Text Align: Left with link right
```

### Blog Cards

#### Post 1
```
Image: BCS exam tips
Category: "BCS Preparation"
Title: "10 Tips to Crack BCS Preliminary in First Attempt"
Excerpt: "Expert strategies and time management techniques..."
Date: "Jan 15, 2026"
Read Time: "5 min read"
```

#### Post 2
```
Image: Study schedule
Category: "Study Guide"
Title: "How to Create an Effective Study Schedule for Government Jobs"
Excerpt: "A step-by-step guide to planning your preparation..."
Date: "Jan 12, 2026"
Read Time: "7 min read"
```

#### Post 3
```
Image: Previous year papers
Category: "Exam Strategy"
Title: "Why Previous Year Questions are Your Best Resource"
Excerpt: "Understanding the importance of practicing past papers..."
Date: "Jan 10, 2026"
Read Time: "4 min read"
```

### Blog Card Design
```
Background: #FFFFFF
Border Radius: 12px
Overflow: hidden
Shadow: 0 4px 16px rgba(0, 0, 0, 0.08)

Image:
- Height: 200px
- Object Fit: cover
- Hover: scale(1.05)

Content Padding: 24px

Category:
- Font Size: 12px
- Font Weight: 600
- Color: #1E40AF
- Text Transform: uppercase

Title:
- Font Size: 18px
- Font Weight: 600
- Color: #0F172A
- Line Height: 1.4
- Margin Top: 8px

Excerpt:
- Font Size: 14px
- Color: #64748B
- Line Height: 1.6
- Margin Top: 10px

Meta:
- Font Size: 13px
- Color: #94A3B8
- Margin Top: 16px
```

### Section Spacing
```
Padding Top: 100px
Padding Bottom: 100px
Background: #FFFFFF
```

---

## Section 12: Newsletter / CTA Section

### Layout
- Full width
- Centered content
- Background gradient or image

### Content
```
Heading: "Ready to Start Your Preparation?"
Subheading: "Join 50,000+ successful candidates. Create your free account today and take your first practice exam."

Form:
- Email input field
- Button: "Get Started Free"

Trust Text: "No credit card required. Cancel anytime."
```

### Design Specs
```
Background: linear-gradient(135deg, #1E40AF 0%, #0F172A 100%)
Padding: 100px 0
Text Align: Center
Text Color: #FFFFFF

Heading:
- Font Size: 36px
- Font Weight: 700

Subheading:
- Font Size: 18px
- Color: #CBD5E1
- Max Width: 600px
- Margin: 0 auto

Form:
- Max Width: 500px
- Margin: 40px auto 0
- Display: flex
- Gap: 12px

Input:
- Flex: 1
- Padding: 16px 20px
- Border Radius: 8px
- Border: none
- Font Size: 16px

Button:
- Padding: 16px 32px
- Background: #F59E0B
- Color: #0F172A
- Font Weight: 700
```

---

## Section 13: Footer

### Layout
- Full width
- Dark background
- 4-column grid (desktop)
- Logo and description left, links center, contact right

### Structure
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [LOGO + Description]  [Quick Links]  [Exams]  [Contact Info]          │
├─────────────────────────────────────────────────────────────────────────┤
│  Social Icons                                    [App Store] [Play Store]│
├─────────────────────────────────────────────────────────────────────────┤
│  © 2026 Prelination. All rights reserved.  [Privacy] [Terms] [Refund]  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Column 1: Brand
```
Logo: Prelination (white version)
Description: "Bangladesh's most trusted platform for government job exam preparation. Practice with 20,000+ questions and achieve your dream career."

Social Icons:
- Facebook
- YouTube
- LinkedIn
- Telegram
```

### Column 2: Quick Links
```
Heading: "Quick Links"
- About Us
- Blog
- Success Stories
- Pricing
- FAQ
- Contact
```

### Column 3: Exams
```
Heading: "Exams"
- PTA Exams
- BCS Exams
- NTRCA Exams
- Bank Jobs
- All Question Banks
```

### Column 4: Contact
```
Heading: "Contact Us"
- Email: support@prelination.com
- Phone: +880 1XXX-XXXXXX
- Address: Dhaka, Bangladesh

App Download:
- App Store button
- Play Store button
```

### Footer Design Specs
```
Background: #0F172A
Padding: 80px 0 40px
Text Color: #CBD5E1

Column Heading:
- Font Size: 16px
- Font Weight: 600
- Color: #FFFFFF
- Margin Bottom: 20px

Links:
- Font Size: 15px
- Color: #94A3B8
- Hover: #FFFFFF
- Line Height: 2.2

Bottom Bar:
- Border Top: 1px solid #334155
- Margin Top: 60px
- Padding Top: 30px
- Font Size: 14px
- Color: #64748B
```

---

## Responsive Behavior Summary

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | 2 columns | 2 columns | 1 column stacked |
| Exam Categories | 4 columns | 2 columns | 1 column |
| How It Works | Horizontal | Horizontal | Vertical |
| Demo Quiz | 2 columns | 1 column | 1 column |
| Features | 3x2 grid | 2x3 grid | 1 column |
| Stats | 4 columns | 2x2 grid | 1 column |
| Pricing | 3 columns | 1 column | 1 column |
| Testimonials | 3 columns | 1 column carousel | 1 column carousel |
| Blog | 3 columns | 2 columns | 1 column |
| Footer | 4 columns | 2x2 grid | 1 column |

---

*This homepage design provides a complete, conversion-focused landing page for Prelination.*
