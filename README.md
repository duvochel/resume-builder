## Résumé builder
This Next.js application can generate an aesthetically pleasing résumé using Tailwind CSS. 
It's written in Typescript and it leverages the AppRouter to present the résumé in multiple languages. 
Additionally, a dark mode option is available.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Create a `Data` directory, place `profileTemplate.json` in it and rename it according to its language.
You can start build the résumé by filling `profileTemplate.json`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
