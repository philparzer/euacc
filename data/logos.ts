import { z } from 'zod';

export const logos = [
    {
        name: "stars-exponential-bw",
        creatorName: "Julian ₿",
        creatorLink: "https://twitter.com/_julianbp",
        imgSrc: "/logos/stars-exponential-bw.svg",
    },
    {
        name: "euacc-text",
        creatorName: "Philipp Parzer",
        creatorLink: "https://philippparzer.com",
        imgSrc: "/logos/eu-acc-white.svg",
    }, 
    {
        name: "european-flag-exponential",
        creatorName: "levelsio",
        creatorLink: "https://twitter.com/levelsio",
        imgSrc: "/logos/eu-flag-exponential.png",
    },
    {
        name: "europa-bull",
        creatorName: "Philipp Parzer",
        creatorLink: "https://philippparzer.com",
        imgSrc: "/logos/europa-bull.svg",
    }
] as const;

export const logoNameSchema = z.enum([...logos.map(logo => logo.name)] as [string, string, string, string]);