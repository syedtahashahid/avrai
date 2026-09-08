# Avari Gold Card Membership Visuals Asset Pack

This folder contains high-resolution luxury visuals created specifically for the **Avari Gold Card VIP Membership** program. All images are optimized for web usage in Next.js, standard React, or static HTML.

---

## Asset Directory Structure

```
public/
  images/
    gold-card/
      ├── avari-gold-hero-banner.jpg       (16:9 Widescreen Hero / Promo Banner)
      ├── avari-gold-card-3d.jpg          (16:9 3D Floating Metallic Gold Card Mockup)
      ├── avari-gold-welcome-kit.jpg      (16:9 Luxury Box & Unboxing Presentation)
      ├── avari-gold-black-tiers.jpg      (16:9 Gold Card & Black Elite Tier Cards)
      ├── avari-gold-dining.jpg           (16:9 Candlelit Fine Dining Privilege)
      ├── avari-gold-suite.jpg            (16:9 Luxury Suite Upgrade & Champagne Perk)
      ├── avari-gold-wellness.jpg         (16:9 Illuminated Pool, Spa & Health Club)
      ├── avari-gold-vip-reception.jpg    (16:9 VIP Check-in & Concierge Desk)
      ├── manifest.json                   (Machine-readable catalog for components)
      └── README.md                       (Usage guide & code snippets)
```

---

## Visual Catalog & Suggested Website Usage

| Filename | Web Path | Resolution / Aspect | Recommended Website Section |
| :--- | :--- | :--- | :--- |
| **`avari-gold-hero-banner.jpg`** | `/images/gold-card/avari-gold-hero-banner.jpg` | 16:9 Widescreen | Main hero section banner, membership landing page top fold, or promotional modal banner. |
| **`avari-gold-card-3d.jpg`** | `/images/gold-card/avari-gold-card-3d.jpg` | 16:9 Widescreen | Primary showcase visual, 3D tilt interactive card, pricing/tier card. |
| **`avari-gold-welcome-kit.jpg`** | `/images/gold-card/avari-gold-welcome-kit.jpg` | 16:9 Widescreen | "What's in the Box" package presentation, onboarding journey, member gift kit preview. |
| **`avari-gold-black-tiers.jpg`** | `/images/gold-card/avari-gold-black-tiers.jpg` | 16:9 Widescreen | Tier comparison section (Gold Tier vs. Black Elite Tier), loyalty tier selector. |
| **`avari-gold-dining.jpg`** | `/images/gold-card/avari-gold-dining.jpg` | 16:9 Widescreen | Culinary privileges card: complimentary Sunday brunch, dining discounts at Dynasty & buffets. |
| **`avari-gold-suite.jpg`** | `/images/gold-card/avari-gold-suite.jpg` | 16:9 Widescreen | Accommodation perks: complimentary room vouchers, suite upgrades, guaranteed late check-out. |
| **`avari-gold-wellness.jpg`** | `/images/gold-card/avari-gold-wellness.jpg` | 16:9 Widescreen | Leisure & wellness perks: health club access, swimming pool, sauna, steam, and jacuzzi. |
| **`avari-gold-vip-reception.jpg`** | `/images/gold-card/avari-gold-vip-reception.jpg` | 16:9 Widescreen | Personalized VIP services: dedicated check-in desk, concierge assistance, priority booking. |

---

## Code Examples

### 1. Next.js (`next/image`) Example
```jsx
import Image from 'next/image';

export function GoldCardHero() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
      <Image
        src="/images/gold-card/avari-gold-card-3d.jpg"
        alt="Avari Gold Card VIP Membership"
        fill
        sizes="(max-width: 1200px) 100vw, 1200px"
        className="object-cover"
        priority
      />
    </div>
  );
}
```

### 2. Standard HTML & CSS Example
```html
<section class="gold-card-banner" style="background-image: url('/images/gold-card/avari-gold-hero-banner.jpg');">
  <div class="banner-overlay">
    <h2>Unlock A World of Distinction</h2>
    <p>Join the Avari Gold Card membership for exclusive stays, dining, and wellness privileges.</p>
    <a href="/membership/apply" class="btn-gold">Apply for Gold Card</a>
  </div>
</section>
```

### 3. Dynamic JSON Import Example
```javascript
import manifest from '@/public/images/gold-card/manifest.json';

console.log(manifest.assets); // Array of all 8 visual assets ready to map over in React
```
