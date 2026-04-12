import type { GatsbyConfig } from "gatsby";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";
import * as dotenv from "dotenv";

// 환경 변수 로드 (.env.development, .env.production 등)
// 파일이 없더라도 에러가 나지 않도록 처리합니다.
dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// src/data 디렉토리의 모든 YAML 파일들을 읽어와 siteMetadata를 구성합니다.
const dataDir = path.resolve("./src/data");
const siteMetadata = fs.existsSync(dataDir)
  ? fs.readdirSync(dataDir)
      .filter(file => file.endsWith(".yaml") || file.endsWith(".yml"))
      .reduce((acc, file) => {
        const filePath = path.join(dataDir, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const content = yaml.load(fileContent) as Record<string, any>;
        return { ...acc, ...content };
      }, {})
  : {};

const config: GatsbyConfig = {
  siteMetadata: {
    ...siteMetadata,
    siteUrl: "https://pkch93.github.io",
  },
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
