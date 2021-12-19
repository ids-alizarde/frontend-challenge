import React from "react";

export const Card = ({
    media,
    dv_name,
    dv_category,
    rating,
    dv_address,
    dv_cashback,
}) => {
    /* Aqui se renderiza las CARDS */
    return (
        <div className="container__cards">
            <div className="card" style="width: 18rem;">
                <img src={media} className="card-img-top" alt={dv_category} />
                <div className="card-body">
                    <h5 className="card-title">{dv_name}</h5>
                    <h6 className="card__text">{dv_category}</h6>
                    <span class="badge bg-secondary">{rating}</span>
                    <h4 className="card-title">CaskBack: {dv_cashback}</h4>
                    <p className="card-text card__paragraph">{dv_address}</p>
                    <a href="#" className="btn btn-primary">
                        Go Up
                    </a>
                </div>
            </div>
        </div>
    );
};
