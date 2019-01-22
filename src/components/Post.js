import React from 'react'
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'


const Post = ({ title, author, slug, date, body, }) => (
  <Card>
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
)

export default Post