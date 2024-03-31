export interface Address {
    address: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    postalCode: string;
    state: string;
}