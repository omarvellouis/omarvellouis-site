# omarvellouis.com - Complete Website Structure

## ✅ All Pages Created

### **Main Pages:**
1. **Homepage** → `/` 
2. **Consultation** → `/konsultasi` (Rp750K offer)

### **Course Pages:**
3. **GMV Max Course** → `/gmvmax`
   - Redirect to: https://omarvellouis.com/gmvmax
   - E-course landing page with teaser

### **Free Tools:**
4. **GMV Simulator** → `/gmv-simulator`
   - Redirect to: https://omarvellouis.com/gmv-simulator
   - Free calculator tool

### **Partnership:**
5. **Brand Partnership** → `/brandpartnership`
   - Redirect to: https://omarvellouis.com/brandpartnership
   - Full-service partnership program

### **Mentoring Programs:**
6. **CPAS Shopee Mentoring** → `/private-mentoring-cpas-shopee`
   - Redirect to: https://omarvellouis.com/private-mentoring-cpas-shopee
   - 12-week intensive CPAS program

7. **Shopee Ads Mentoring** → `/private-mentoring-shopee-ads`
   - Redirect to: https://omarvellouis.com/private-mentoring-shopee-ads
   - 16-week complete mastery program

### **Consultation (Alternative URL):**
8. **1-on-1 Consultation** → `/1-on-1-consultation`
   - Redirect to: https://omarvellouis.com/1-on-1-consultation
   - Same as /konsultasi but alternative URL

### **Framework Documentation:**
9. **GMV Max Framework** → `/fwgmvmax`
   - Redirect to: https://omarvellouis.com/fwgmvmax
   - Complete framework documentation

---

## 📋 File Structure

```
omarvellouis-site/
├── src/
│   ├── pages/
│   │   ├── index.astro                              ✅ Homepage
│   │   ├── konsultasi.astro                         ✅ Consultation Rp750K
│   │   ├── gmvmax.astro                             ✅ GMV Max Course
│   │   ├── gmv-simulator.astro                      ✅ Free GMV Simulator
│   │   ├── brandpartnership.astro                   ✅ Brand Partnership
│   │   ├── private-mentoring-cpas-shopee.astro      ✅ CPAS Mentoring
│   │   ├── private-mentoring-shopee-ads.astro       ✅ Shopee Ads Mentoring
│   │   ├── 1-on-1-consultation.astro                ✅ Consultation (alt URL)
│   │   └── fwgmvmax.astro                           ✅ GMV Max Framework
│   ├── components/
│   │   ├── Header.astro                             ✅ Navigation (lowercase logo)
│   │   └── Footer.astro                             ✅ Footer (lowercase branding)
│   └── layouts/
│       └── BaseLayout.astro                         ✅ Base template
├── public/                                          (add images here)
├── package.json                                     ✅
├── astro.config.mjs                                 ✅
└── README.md                                        ✅

```

---

## 🚀 Deployment Instructions

### **Step 1: Push to GitHub**

```bash
cd omarvellouis-site
git add .
git commit -m "Add all service pages and update branding to lowercase"
git push origin main
```

### **Step 2: Vercel Auto-Deploy**

Vercel will automatically detect changes and deploy in ~2 minutes.

After deployment, all these URLs will work:
- `omarvellouis-4124.vercel.app/gmvmax`
- `omarvellouis-4124.vercel.app/gmv-simulator`
- `omarvellouis-4124.vercel.app/brandpartnership`
- etc.

### **Step 3: Update Scalev.id Links**

For each page that redirects to Scalev.id, update the actual Scalev URL:

**Example: `src/pages/gmvmax.astro`**
```astro
const courseURL = "https://omarvellouis.com/gmvmax"; // ← Update this
```

Replace with actual Scalev.id course URL.

Do this for:
- `/gmvmax` → line 6
- `/gmv-simulator` → line 6
- `/brandpartnership` → line 6
- `/private-mentoring-cpas-shopee` → line 6
- `/private-mentoring-shopee-ads` → line 6
- `/1-on-1-consultation` → line 6
- `/fwgmvmax` → line 6

---

## ⚙️ Configuration Checklist

### **Priority Updates:**

1. **Facebook Pixel ID**
   - File: `src/layouts/BaseLayout.astro`
   - Line 36: Replace `YOUR_PIXEL_ID`

2. **WhatsApp Number**
   - File: `src/pages/konsultasi.astro`
   - Line 252: Replace `6281234567890`

3. **Social Media Links**
   - File: `src/components/Footer.astro`
   - Lines 48-51: Update Instagram, Threads, LinkedIn URLs

4. **Scalev.id URLs**
   - Update all course/service pages with actual Scalev.id links
   - Files listed above

---

## 🎨 Branding Updates Applied

✅ Logo: "omarvellouis" (lowercase)
✅ Footer: "omarvellouis" (lowercase)
✅ Page titles: "omarvellouis" (lowercase)
✅ All branding consistent with lowercase style

---

## 📊 Facebook Pixel Tracking Events

Each page fires specific Facebook Pixel events:

| Page | Event | Content Name |
|------|-------|--------------|
| /gmvmax | InitiateCheckout | GMV Max Course |
| /gmv-simulator | Lead | GMV Simulator |
| /brandpartnership | Lead | Brand Partnership |
| /private-mentoring-cpas-shopee | Lead | CPAS Mentoring |
| /private-mentoring-shopee-ads | Lead | Shopee Ads Mentoring |
| /1-on-1-consultation | InitiateCheckout | 1-on-1 Consultation |
| /fwgmvmax | ViewContent | GMV Max Framework |
| /konsultasi | ViewContent | Konsultasi Page |

---

## 🔗 Navigation Structure

**Current Header Menu:**
- Home → `/`
- Konsultasi → `/konsultasi`
- Tools → `/tools` (create this page later)
- Case Studies → `/case-studies` (create this page later)
- Frameworks → `/frameworks` (create this page later)
- Blog → `/blog` (create this page later)

**Recommended Menu Update:**

```astro
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', dropdown: [
      { label: 'Consultation', href: '/konsultasi' },
      { label: 'CPAS Mentoring', href: '/private-mentoring-cpas-shopee' },
      { label: 'Shopee Ads Mentoring', href: '/private-mentoring-shopee-ads' },
      { label: 'Brand Partnership', href: '/brandpartnership' },
    ]
  },
  { label: 'Courses', href: '#', dropdown: [
      { label: 'GMV Max Framework', href: '/gmvmax' },
    ]
  },
  { label: 'Free Tools', href: '/gmv-simulator' },
  { label: 'Frameworks', href: '/fwgmvmax' },
];
```

---

## 🎯 Next Steps

### **Immediate (Today):**
1. ✅ Commit and push to GitHub
2. ✅ Wait for Vercel auto-deploy (~2 min)
3. ✅ Update Scalev.id URLs in each page
4. ✅ Update Facebook Pixel ID
5. ✅ Update WhatsApp number

### **This Week:**
1. 🔲 Add custom domain (omarvellouis.com → Vercel)
2. 🔲 Add images (favicon, OG image, logos)
3. 🔲 Test all redirect links to Scalev.id
4. 🔲 Test Facebook Pixel tracking events
5. 🔲 Create missing pages (Tools index, Case Studies, Blog)

### **Next Week:**
1. 🔲 Drive traffic to website
2. 🔲 Monitor conversion tracking
3. 🔲 A/B test CTAs and pricing
4. 🔲 Collect feedback and iterate

---

## 📝 Notes

- All pages are **teaser landing pages** that redirect to Scalev.id
- This gives you **brand control** + **tracking** before redirect
- Update `const URL = "..."` in each page with actual Scalev.id links
- Facebook Pixel fires on page load BEFORE redirect (good for retargeting)

---

## 🆘 Support

Need help? Check:
- README.md for full setup guide
- Astro docs: https://docs.astro.build
- Vercel docs: https://vercel.com/docs

---

**Website Status:** ✅ Ready to Deploy
**Total Pages:** 9 pages
**Branding:** ✅ Lowercase "omarvellouis"
**Facebook Pixel:** ✅ Integrated (update ID needed)
**Responsive:** ✅ Mobile-optimized
