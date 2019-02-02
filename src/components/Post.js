import React from 'react'
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Col  

} from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


const Post = ({ title, author, slug, date, body, fluid }) => (
  <Col md="4">
    <Card>
        <Img className="card-image-top" fluid={fluid} />
       <CardBody>
      <CardTitle>
        <Link to={slug}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> by{' '}
        <span className="text-info">{author}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      
      <Link
        to={slug}
        className="btn btn-outline-primary float-right text-uppercase"
      >
        Read more
      </Link>
    </CardBody>
    </Card>
    </Col>
)

export default Post