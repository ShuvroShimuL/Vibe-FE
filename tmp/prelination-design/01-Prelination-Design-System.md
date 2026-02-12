# Prelination Design System
## Complete WordPress Theme Design Documentation

---

## 1. Brand Identity

### Brand Overview
**Prelination** - Bangladesh's premier government job exam preparation platform
- **Tagline**: "Master Your Government Job Exams with Confidence"
- **Mission**: Empowering Bangladeshi job aspirants with intelligent, adaptive MCQ practice

### Brand Personality
- Professional yet approachable
- Trustworthy and authoritative
- Modern and tech-savvy
- Student-focused and supportive

---

## 2. Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Navy Blue | `#0F172A` | Header, Footer, Primary buttons, Headings |
| Royal Blue | `#1E40AF` | Links, Active states, Accent elements |
| Bright Blue | `#3B82F6` | Hover states, Secondary buttons, Icons |

### Secondary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Success Green | `#10B981` | Success messages, Progress indicators, Correct answers |
| Warning Orange | `#F59E0B` | Alerts, Important notices, CTA highlights |
| Error Red | `#EF4444` | Error messages, Incorrect answers |
| Info Cyan | `#06B6D4` | Information badges, Tips |

### Neutral Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| White | `#FFFFFF` | Backgrounds, Cards |
| Light Gray | `#F8FAFC` | Section backgrounds, Alternating rows |
| Border Gray | `#E2E8F0` | Borders, Dividers |
| Text Gray | `#64748B` | Secondary text, Descriptions |
| Dark Gray | `#334155` | Body text |
| Black | `#0F172A` | Headings, Primary text |

### Exam Category Colors
| Category | Color Code |
|----------|------------|
| PTA (Primary Teachers Assistant) | `#8B5CF6` (Purple) |
| BCS (Bangladesh Civil Service) | `#0EA5E9` (Sky Blue) |
| NTRCA | `#F97316` (Orange) |
| Bank Jobs | `#10B981` (Green) |

---

## 3. Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Bangla Font**: Noto Sans Bengali (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Type Scale
| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 | 48px | 32px | 700 | 1.2 |
| H2 | 36px | 28px | 700 | 1.3 |
| H3 | 28px | 24px | 600 | 1.4 |
| H4 | 24px | 20px | 600 | 1.4 |
| H5 | 20px | 18px | 600 | 1.5 |
| H6 | 18px | 16px | 600 | 1.5 |
| Body Large | 18px | 16px | 400 | 1.7 |
| Body | 16px | 15px | 400 | 1.7 |
| Body Small | 14px | 13px | 400 | 1.6 |
| Caption | 12px | 12px | 500 | 1.5 |

---

## 4. Spacing System

### Section Spacing
| Class | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| Section XL | 120px | 80px | 60px |
| Section LG | 80px | 60px | 48px |
| Section MD | 60px | 48px | 40px |
| Section SM | 40px | 32px | 24px |

### Content Spacing
| Size | Value |
|------|-------|
| XXL | 64px |
| XL | 48px |
| LG | 32px |
| MD | 24px |
| SM | 16px |
| XS | 8px |

### Container Widths
| Container | Max Width | Padding |
|-----------|-----------|---------|
| Full | 100% | 0 |
| XXL | 1400px | 24px |
| XL | 1200px | 24px |
| LG | 992px | 24px |
| MD | 768px | 24px |
| SM | 576px | 24px |

---

## 5. Component Library

### Buttons

#### Primary Button
```
Background: #1E40AF
Text: #FFFFFF
Padding: 14px 32px
Border Radius: 8px
Font Weight: 600
Font Size: 16px
Hover: Background #1E3A8A, transform translateY(-2px)
Shadow: 0 4px 14px rgba(30, 64, 175, 0.3)
```

#### Secondary Button
```
Background: transparent
Border: 2px solid #1E40AF
Text: #1E40AF
Padding: 12px 30px
Border Radius: 8px
Font Weight: 600
Hover: Background #1E40AF, Text #FFFFFF
```

#### Accent Button (CTA)
```
Background: #F59E0B
Text: #0F172A
Padding: 16px 40px
Border Radius: 8px
Font Weight: 700
Font Size: 18px
Hover: Background #D97706
Shadow: 0 4px 20px rgba(245, 158, 11, 0.4)
```

#### Button Sizes
| Size | Padding | Font Size |
|------|---------|-----------|
| Small | 10px 20px | 14px |
| Medium | 14px 32px | 16px |
| Large | 18px 48px | 18px |

### Cards

#### Exam Category Card
```
Background: #FFFFFF
Border Radius: 16px
Padding: 32px
Shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
Border: 1px solid #E2E8F0
Hover Shadow: 0 8px 30px rgba(0, 0, 0, 0.12)
Hover Transform: translateY(-4px)
Transition: all 0.3s ease
```

#### Feature Card
```
Background: #FFFFFF
Border Radius: 12px
Padding: 24px
Shadow: 0 2px 12px rgba(0, 0, 0, 0.06)
Icon Container: 56px circle, gradient background
```

#### Blog Card
```
Background: #FFFFFF
Border Radius: 12px
Overflow: hidden
Image Height: 200px
Content Padding: 20px
Shadow: 0 4px 16px rgba(0, 0, 0, 0.08)
```

### Forms

#### Input Fields
```
Background: #FFFFFF
Border: 2px solid #E2E8F0
Border Radius: 8px
Padding: 14px 16px
Font Size: 16px
Focus Border: #3B82F6
Focus Shadow: 0 0 0 3px rgba(59, 130, 246, 0.2)
```

#### Labels
```
Font Size: 14px
Font Weight: 500
Color: #334155
Margin Bottom: 6px
```

### Badges

#### Category Badge
```
Padding: 6px 14px
Border Radius: 20px
Font Size: 12px
Font Weight: 600
Text Transform: uppercase
```

#### Status Badges
| Status | Background | Text |
|--------|------------|------|
| Active | #10B981 | #FFFFFF |
| Pending | #F59E0B | #FFFFFF |
| New | #3B82F6 | #FFFFFF |
| Popular | #EF4444 | #FFFFFF |

---

## 6. Icons

### Icon Library
- **Primary**: Lucide Icons (via CDN or npm)
- **Alternative**: Font Awesome 6
- **Size Scale**: 16px, 20px, 24px, 32px, 48px

### Icon Usage
| Context | Size | Color |
|---------|------|-------|
| Inline text | 16px | inherit |
| Buttons | 20px | inherit |
| Feature icons | 24px | #1E40AF |
| Large decorative | 48px | gradient |

---

## 7. Shadows

| Level | Shadow |
|-------|--------|
| SM | 0 2px 8px rgba(0, 0, 0, 0.06) |
| MD | 0 4px 16px rgba(0, 0, 0, 0.08) |
| LG | 0 8px 24px rgba(0, 0, 0, 0.1) |
| XL | 0 12px 40px rgba(0, 0, 0, 0.12) |

---

## 8. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| SM | 6px | Small buttons, inputs |
| MD | 8px | Buttons, cards |
| LG | 12px | Large cards, modals |
| XL | 16px | Feature cards, images |
| Full | 9999px | Pills, avatars, badges |

---

## 9. Animations & Transitions

### Standard Transitions
```css
/* Default transition */
transition: all 0.3s ease;

/* Button hover */
transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

/* Card hover */
transition: transform 0.3s ease, box-shadow 0.3s ease;
```

### Scroll Animations
- Fade In Up: opacity 0 → 1, translateY 30px → 0
- Duration: 0.6s
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Stagger delay: 0.1s between elements

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 576px | Phones |
| Tablet | 576px - 991px | Tablets |
| Desktop | 992px - 1199px | Small laptops |
| Large Desktop | 1200px - 1399px | Desktops |
| XXL | ≥ 1400px | Large screens |

---

## 11. Grid System

### 12-Column Grid
```
Container: max-width 1200px, centered
Gutter: 24px (desktop), 16px (mobile)
Columns: 12 equal columns
```

### Common Layouts
| Layout | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| 2-column | 6 + 6 | 6 + 6 | 12 + 12 |
| 3-column | 4 + 4 + 4 | 6 + 6 | 12 + 12 + 12 |
| 4-column | 3 + 3 + 3 + 3 | 6 + 6 | 12 + 12 |
| Sidebar | 8 + 4 | 12 + 12 | 12 + 12 |

---

*This design system ensures consistency across all Prelination website pages.*
