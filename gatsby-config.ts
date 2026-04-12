import type { GatsbyConfig } from "gatsby";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// src/data 디렉토리의 모든 YAML 파일들을 읽어와 siteMetadata를 구성합니다.
const dataDir = "./src/data";
const siteMetadata = fs.readdirSync(dataDir)
  .filter(file => file.endsWith(".yaml") || file.endsWith(".yml"))
  .reduce((acc, file) => {
    const filePath = path.join(dataDir, file);
    const content = yaml.load(fs.readFileSync(filePath, "utf8")) as Record<string, any>;
    return { ...acc, ...content };
  }, {});

const config: GatsbyConfig = {
  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        process.env.GATSBY_GA_MEASUREMENT_ID,
      ].filter(Boolean) as string[],
      pluginConfig: {
        head: true,
      },
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
