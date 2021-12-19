import { useDispatch } from "react-redux";
import { displayingOffer } from "../../actions/offer";
import { CardList } from "./Cards/CardList";

export default function DirectoryList() {
    const dispatch = useDispatch();
    const [offer, setOffer] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let offerList;
        const data = async () => {
            offerList = await dispatch(displayingOffer());
            /*  
                TODO
                Como el API no regresa diferentes imagenes obte por setear directamente 
            **  en el array para darle una mejor presentacion
            */
            offerList[0].media =
                "https://static.wixstatic.com/media/f31913_8d4ee438f6c64ddab97233369e005e65~mv2.jpg/v1/crop/x_0,y_332,w_2000,h_2336/fill/w_672,h_785,al_c,q_85,usm_0.66_1.00_0.01/small-business-owner-RMZD3CY%20(1)_edited_.webp";
            offerList[1].media =
                "https://static.wixstatic.com/media/f31913_2523e9d9432f4f67bd879bcb780bf03d~mv2.jpg/v1/fill/w_411,h_270,al_c,q_80,usm_0.66_1.00_0.01/Registro-paso1.webp";
            offerList[2].media =
                "https://static.wixstatic.com/media/f31913_4a4618398f6b446ea93ba576c11b1e7b~mv2.jpg/v1/crop/x_798,y_10,w_4727,h_4150/fill/w_785,h_687,al_c,q_85,usm_0.66_1.00_0.01/dueno_de_negocio_dashboard.webp";
            offerList[3].media =
                "https://static.wixstatic.com/media/6eb82b_fd06e2c4e40c4b8ca7f4fc7012a62da4~mv2.png/v1/fill/w_900,h_503,al_c,q_90,usm_0.66_1.00_0.01/Documentaci%C3%B3n.webp";
            offerList[4].media =
                "https://static.wixstatic.com/media/081701_431489bfba1f4510af7a153c1bc230d7~mv2.jpg/v1/fill/w_681,h_512,fp_0.50_0.50,q_90/081701_431489bfba1f4510af7a153c1bc230d7~mv2.webp";
            offerList[5].media =
                "https://static.wixstatic.com/media/081701_cbee97918ff744b7bf47b386c33d3c32~mv2.jpg/v1/fill/w_681,h_512,fp_0.50_0.50,q_90/081701_cbee97918ff744b7bf47b386c33d3c32~mv2.webp";
            offerList[6].media =
                "https://static.wixstatic.com/media/081701_94a600e100ff4176b97594b3feada662~mv2.png/v1/fill/w_681,h_512,fp_0.50_0.50,q_95/081701_94a600e100ff4176b97594b3feada662~mv2.webp";
            offerList[7].media =
                "https://static.wixstatic.com/media/081701_de5d9b6cc7974e4d9626528aa0cf8923~mv2.png/v1/fill/w_681,h_512,fp_0.50_0.50,q_95/081701_de5d9b6cc7974e4d9626528aa0cf8923~mv2.webp";
            offerList[8].media =
                "https://static.wixstatic.com/media/081701_7e43f26862714e41a7bcc4362ae05528~mv2.jpg/v1/fill/w_681,h_512,fp_0.50_0.50,q_90/081701_7e43f26862714e41a7bcc4362ae05528~mv2.webp";
            offerList[9].media =
                "https://static.wixstatic.com/media/081701_54f7e1c063964e8a9bcc34e68eb583f7~mv2.jpg/v1/fill/w_681,h_512,fp_0.50_0.50,q_90/081701_54f7e1c063964e8a9bcc34e68eb583f7~mv2.webp";
            setOffer(offerList);
            setIsLoading(false);
        };
        data();
    }, []);

    if (isLoading) {
        return (
            <div className="App">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <CardList offerList={offer} />
        </>
    );
}
