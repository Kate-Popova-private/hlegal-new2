import React, {Component} from "react";
import Slider from "react-slick";
import achieve0 from '../../assets/img/Achievment-1.webp';
import achieve1 from '../../assets/img/Achievment-2.webp';
import achieve2 from '../../assets/img/Achievment-3.webp';
import achieve3 from '../../assets/img/Achievment-4.webp';
import achieve4 from '../../assets/img/Achievment-1.webp';
import achieve5 from '../../assets/img/Achievment-2.webp';
import achieve6 from '../../assets/img/Achievment-3.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './achievements.scss';

export default class Achievements extends Component {
    constructor(props) {
        super(props);
        this.state = {achievements: [achieve0, achieve1, achieve2, achieve3, achieve4, achieve5, achieve6]};
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slides,
            slidesToScroll: this.props.slides,
            arrows: false,
        };
        return (
            <div className="achievements">
                <h2 className="achievements__title"> achievements</h2>
                <Slider {...settings}>
                    {this.state.achievements.map(item => {
                        return <div className="achievements__container">
                            <div className="achievements__content">
                                <img className="achievements__img" src={item} alt=""/>
                            </div>
                        </div>
                    })}
                </Slider>
            </div>
        );
    }
}