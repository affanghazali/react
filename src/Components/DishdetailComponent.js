import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import {Media} from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish) {
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
                        {this.renderComments(dish.comments)}
                    </div>
                </React.Fragment>
            )
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
        if(comments != null){
            const com = comments.map((co) => {
                return(
                    <React.Fragment>
                    <li>{co.comment}</li><br/>
                    <li>-- {co.author}, {co.date}</li><br/>
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
                <div></div>
            )
        }
    }

    render(){
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>
       );
    }
}
export default Dishdetail;