# Turbo Search

Turbo Search is a high-performance search engine built with **Next.js**, **TypeScript**, **Hono**, and **Cloudflare**. It leverages **Redis** for efficient indexing and fast lookups, ensuring seamless search experiences.

## 🚀 Live Demo
🔗 [Turbo Search Deployed](https://turbo-search-efcprrkly-arnav-agarwals-projects-abdc176f.vercel.app/)

## 📂 Project Structure
```
Turbo-Search/
│── src/
│   ├── app/                # Next.js pages and API routes
│   ├── components/         # UI components
│   ├── lib/                # Redis setup and utilities
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global styles
│── public/                 # Static assets
│── .env                    # Environment variables
│── vercel.json             # Vercel deployment config
│── package.json            # Dependencies and scripts
```

## 🛠️ Tech Stack
- **Frontend**: Next.js (TypeScript)
- **Backend**: Hono (Cloudflare Workers)
- **Database**: Redis (Upstash)
- **Deployment**: Vercel + Cloudflare

## 🔧 Setup and Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/arnav-343-agarwal/Turbo-Search.git
cd Turbo-Search
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file and add:
```sh
REDIS_URL=your_upstash_redis_url
REDIS_TOKEN=your_upstash_redis_token
```

### 4️⃣ Start Development Server
```sh
yarn dev  # or npm run dev
```

## 🚀 Deployment
### Deploy to Vercel
```sh
vercel deploy
```

## 🔗 Links
- **GitHub Repository**: [Turbo Search](https://github.com/arnav-343-agarwal/Turbo-Search.git)
- **Live Demo**: [Turbo Search](https://turbo-search-efcprrkly-arnav-agarwals-projects-abdc176f.vercel.app/)

---
💡 **Contributions & Issues**: Feel free to open issues or submit PRs to improve Turbo Search! 

