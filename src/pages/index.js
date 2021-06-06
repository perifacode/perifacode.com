import React from "react";
import Container from "../components/container";
// import HeroPost from "../components/hero-post";
// import Intro from "../components/intro";
import { Button, Text, Title } from "../components"
// import MoreStories from "../components/more-stories";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({ data: { allPosts, site, blog } }) {
  // const heroPost = allPosts.nodes[0];
  // const morePosts = allPosts.nodes.slice(1);
  
  return (
    <Container>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Title hasBG bgColor="yellow">Título para renderizar na tela</Title>
      <Title level={2}>Título para renderizar na tela</Title>
      <Title level={3}>Título para renderizar na tela</Title>
      <Title level={4}>Título para renderizar na tela</Title>
      <Title level={5}>Título para renderizar na tela</Title>
      <Text>Texto para aparecer na tela</Text>
      <Button onClick={() => null}>Inscreva-se</Button>
      <Button btnFormat='inverse' onClick={() => null}>Inscreva-se</Button>
      <Button btnFormat='alt' onClick={() => null}>Inscreva-se</Button>
      <Button btnFormat='icon' icon='coffee' onClick={() => null}>Inscreva-se</Button>
      {/* <Intro /> */}
      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </Container>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 1500px) 100vw, 1500px") {
            ...GatsbyDatoCmsFluid
          }
          small: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px") {
            ...GatsbyDatoCmsFluid
          }
        }
        author {
          name
          picture {
            fixed(
              width: 48
              height: 48
              imgixParams: { fm: "jpg", fit: "crop", sat: -100 }
            ) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;
