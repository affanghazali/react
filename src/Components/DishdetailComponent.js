import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null)
            return(
                <React.Fragment>
                <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments = {dish.comments} />
                    </div>
                </React.Fragment>
            )
        else
            return(
                <div>
                    <h1>Empty Dish</h1>
                </div>
            );
    }

    function RenderComments({comments}){
        if(comments != null){
            const com = comments.map((co) => {
                return(
                    <React.Fragment>
                    <li>{co.comment}</li><br/>
                    <li>-- {co.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(co.date)))}</li><br/>
                    </React.Fragment>
                )
            });
            return(
                <ul className='list-unstyled'>
                    {com}
                </ul>
            )
        }
        else{
            return(
                <div>
                    <h1>Empty Comment</h1>
                </div>
            )
        }
    }

    const Dishdetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish = {props.selectedDish} />
                </div>
            </div>
       );
    }
export default Dishdetail;