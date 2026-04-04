import type { GatsbyConfig } from "gatsby";
import fs from "fs";
import yaml from "js-yaml";

// data.yaml 파일을 동기적으로 읽어와 파싱합니다.
const siteMetadata = yaml.load(fs.readFileSync("./data.yaml", "utf8")) as Record<string, any>;

const config: GatsbyConfig = {
  siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
