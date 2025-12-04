# 🌐 NovaStack Technologies – React Website

A fully responsive 3-page website built using **React + Vite** for the fictional tech brand **NovaStack Technologies**.  
This project includes Home, About, and Contact pages with reusable components, modern routing, clean UI, and proper Vercel deployment configuration.

**Live Demo:** https://novastack-eta.vercel.app/
**Repository:** https://github.com/HaiderAliHosen/novastack

---

## 🚀 Tech Stack

- **React (Vite)**
- **React Router**
- **CSS (Custom)**
- **Vercel** (Deployment)

---

## 📄 Pages Included

### ✅ Home Page
- Hero section (headline, subtext, CTA)
- Services/Features (minimum 3)
- Testimonials (minimum 2)
- CTA buttons (“Get Started”, “Learn More”)

### ✅ About Page
- Company introduction
- Mission & Vision
- Team section (cards with placeholders)
- CTA button (“Contact Us”)

### ✅ Contact Page
- Contact form (Name, Email, Message)
- Basic validation
- Success message after submit
- Social/contact links (email, phone, X/Twitter)
- CTA button (“Send Message”)

---

## 📁 Folder Structure
<img width="308" height="672" alt="image" src="https://github.com/user-attachments/assets/34ff0ff7-fbc9-4e61-8e38-3f800fb54a49" />


---

## 🔧 Local Development

### Install dependencies
```bash
npm install

## Start dev server
```bash
npm run dev

## Build for production
```bash
npm run build

🌍 Deployment (Vercel)

To ensure React Router works correctly after deployment, this project uses:

vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

🧩 Features

* Fully responsive (mobile, tablet, and desktop)

* Reusable UI components

* Client-side routing with React Router

* Active link highlighting in the navigation bar

* Fixed internal navigation issue on Vercel by replacing <a> with <Link>

* Clean and consistent layout across all pages

🎨 Design Rationale

NovaStack’s design focuses on clarity and speed: a clean layout, prominent calls-to-action, and simple type hierarchy to guide users quickly to contact or services.
I used reusable components (Hero, Services, Team, ContactForm) to ensure consistent spacing and easy maintenance.
The responsive grid and breakpoints provide readable layouts on mobile and desktop without extra frameworks.
The contact form includes basic client-side validation and a clear success state to demonstrate UX flows for a production-ready prototype.