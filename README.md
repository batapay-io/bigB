# Next.js Blog Application & Custom CMS (Studio)

A full-stack, feature-rich blog application built with Next.js (App Router), React 19, and MongoDB. This project includes a public-facing blog and a custom-built Content Management System (CMS) called **Studio** for managing posts, media, and settings.

## What It Can Do

### For Readers (Public Blog)
- **Read & Discover:** Readers can browse and read blog posts with a clean, responsive interface powered by Tailwind CSS and animated with Anime.js.
- **Newsletter Subscriptions:** Visitors can sign up to receive newsletters, with subscriber information securely stored in MongoDB.
- **Fast Loading:** Built on Next.js 16 App Router, ensuring extremely fast load times through server-side rendering and static generation.
- **SEO & Discoverability:** The application automatically generates sitemaps (`sitemap.js`) and RSS feeds (`rss.xml`), helping search engines index content faster and allowing users to subscribe via RSS readers.

### For Admins (Studio CMS)
The application includes a fully custom, secure back-office dashboard (`/studio`) designed for content creators:
- **Secure Access:** The admin area is locked down using NextAuth. Only authorized users can log in and make changes.
- **Notion-Style Rich Text Editor:** Write posts using a powerful editor built with Tiptap. It supports formatting, custom blocks, and a pop-up bubble menu for highlighting and styling text.
- **Drag & Drop Content:** Easily re-order sections of your posts or move media around using the built-in drag-and-drop system (`@dnd-kit`).
- **Media Library & Image Optimization:** 
  - Upload images directly in the dashboard.
  - Images are automatically compressed and optimized on the fly using Sharp.
  - Media is seamlessly uploaded and stored in the cloud via AWS S3.
- **AI Content Assistant:** By integrating Google's Generative AI, the studio is equipped to assist with drafting content, generating summaries, or brainstorming ideas directly while you edit.
- **Templates & Settings:** Save layout templates for future posts and manage global blog settings without modifying the codebase.
- **Newsletter Management:** Manage subscriber lists gathered from the public site directly via the backend API.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org) (v16, App Router)
- **UI Library:** React 19
- **Database & ORM:** MongoDB & Mongoose
- **Authentication:** NextAuth (v5 beta) with JWT (`jose`)
- **Styling:** Tailwind CSS (v4)
- **State Management:** Zustand
- **Validation:** Zod
- **Editor:** Tiptap (with React and various extensions)
- **Animations:** Anime.js & built-in CSS transitions
- **Icons:** Lucide React
- **Cloud Storage:** AWS SDK for S3
- **Image Processing:** Sharp

## Project Structure

```text
blog-app/
├── src/
│   ├── app/
│   │   ├── api/          # API Routes (AI, Auth, Posts, Newsletter, etc.)
│   │   ├── blog/         # Public-facing blog pages
│   │   ├── studio/       # Admin CMS (Dashboard, Post Editor, Media Library)
│   │   └── layout.js     # Root layout
│   ├── blocks/           # Custom editor blocks for Tiptap
│   ├── components/       # Shared React components
│   ├── lib/              # Core utilities (DB connection, AWS S3 utils)
│   │   └── models/       # Mongoose Schemas (Post, Admin, Subscriber)
│   ├── ui/               # Reusable UI elements
│   └── middleware.js     # Edge middleware for auth and routing
```
