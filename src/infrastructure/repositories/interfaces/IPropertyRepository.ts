import { Property } from "../../../models/PropertyModelTypes";

export interface IPropertyRepository {
    getAllProperties(args: {
        city?: string;
        zipCode?: number;
        state?: string;
        sortBy?: string;
        order?: string;
    }): Promise<Property[]>;

    getPropertyById(id: number): Promise<Property>;
}