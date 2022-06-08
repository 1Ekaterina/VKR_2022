import style from "./cards.module.scss";
import Card from "./card/Card";

const Cards = (props) => {

    return (
        <div className={style.cards}>
            <Card props={props} />
            <Card props={props} />
            <Card props={props} />

        </div>
    );
};

export default Cards;
