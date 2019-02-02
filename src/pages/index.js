import React from 'react'
import Layout from '../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import SEO from '../components/seo'
import Post from '../components/Post'
import {Row} from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home Page</h1>
    
     
        <StaticQuery query={indexQuery} render={data => {
        return (
          <Row> 
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}/>
            ))}
            
          </Row>
      )
    }}/>
      
  

  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          
          title
          date(formatString: "MMM Do YYYY")
          author
          path
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        
      }
    }
  }
}`

export default IndexPage
