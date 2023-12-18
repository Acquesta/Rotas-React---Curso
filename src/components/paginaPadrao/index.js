import Banner from "components/banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return(
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}