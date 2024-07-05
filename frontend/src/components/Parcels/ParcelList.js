import React, {useEffect, useContext} from "react";
import { getParcelsByUser } from "../../api/parcels";
import { AuthContext } from "../../contexts/AuthContext";

const ParcelList = () => {
    const [parcels, setParcels] = useContext([]);
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        const fetchParcels = async () => {
            try {
                const data = await getParcelsByUser(auth.user_id, auth.access_token);
                setParcels(data);
            }catch (error){
                console.error('Failed to fetch parcels:', error);
            }
        };

        fetchParcels();
    }, [auth, setParcels]);

    return (
        <div>
            <h1>My Parcels</h1>
            <ul>
                {parcels.map((parcel) =>(
                    <li key={parcel.id}>{parcel.recipient_name} - {parcel.recipient_address}</li>
                ))}
            </ul>
        </div>
    );
};

export default ParcelList;