import React from 'react'
import Layout from '../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import SEO from '../components/seo'
import Post from '../components/Post'
import me from '../images/me.jpeg'
import {Row, Card, CardBody, CardTitle,  Button, CardText, CardImg, Col} from 'reactstrap'


const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home Page</h1>
    <Card>
      
      <Row>
        <Col  sm="9">
        <CardBody>
          <CardTitle style={{"fontWeight": "bold"}}>Hi, i'm <span style={{"color": "#765898"}}>Jhonattan Benitez</span> and i'm a <span style={{"color": "#765898"}}>Frontend Developer</span></CardTitle>
            <CardText>I am a Front-End Developer from Cali, Colombia. I currently work on a eSport project and i am looking to take more work and increase my Skills as a Web Developer.</CardText>
            <Button href="https://resume.io/r/tjrOoBFpv" target="_blank">Resume</Button> {' '}
            <Button href="https://resume.io/r/tjrOoBFpv" target="_blank">Resume</Button>
        </CardBody>
        </Col>
        <Col xs="12" sm="3">
           <CardImg top src={me} alt="Card image cap" style={{'maxWidth': '400', 'minHeight': '400'}}/>
        </Col>
        
      </Row>
     
        </Card>
        
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
