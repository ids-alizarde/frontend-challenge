import { Provider } from "react-redux";
import { store } from "./store/store";
import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = () => {
    return [];
};

export default function App() {
    return (
        <Provider store={store}>
            <DirectoryList />
        </Provider>
    );
}
