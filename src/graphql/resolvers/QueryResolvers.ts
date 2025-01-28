import { IPropertyRepository } from "../../infrastructure/repositories/interfaces/IPropertyRepository";


export const QueryResolvers = (propertyRepository: IPropertyRepository) => ({

    getAllProperties: async (_: any, args: {
        city?: string; 
        zipCode?: number; 
        state?: string; 
        sortBy?: string;
        order?: string}) => {

        return propertyRepository.getAllProperties(args);
    },

    getPropertyById: async (_: any, { id }: {id: number}) => {

        return propertyRepository.getPropertyById(id)
    }
})