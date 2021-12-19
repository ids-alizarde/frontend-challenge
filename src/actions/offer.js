import { Constants } from "../constants/constants";
import { getOfferData } from "../services/offerService";

export const displayOffer = data => ({
    type: Constants.offerDisplay,
    payload: data,
});

/* Creamos la accion para consumir el API y regresar la data */
export const displayingOffer = () => {
    return async dispatch => {
        const res = await getOfferData();
        const body = await res.json();
        dispatch(displayOffer(body.data));
        return body.data;
    };
};
