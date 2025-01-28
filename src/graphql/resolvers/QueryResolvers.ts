import { Op, Order } from "sequelize";
import PropertyDbModel from "../../models/property.db.model"
import { IPropertyRepository } from "../../infrastructure/repositories/interfaces/property.repository.interface";


export const QueryResolvers = (propertyRepository: IPropertyRepository) => ({

    getAllProperties: async (_: any, args: {
        city?: string; 
        zipCode?: number; 
        state?: string; 
        sortBy?: string;
        order?: string}) => {
        // try {
        //     const whereClause: any = {};
        //     const orderClause = args.sortBy 
        //         ? [[args.sortBy, args?.order?.toLocaleUpperCase() === 'A' ? 'ASC' : 'DESC']] as Order 
        //         : undefined;

        //     if (args.city) whereClause.city = args.city;
        //     if (args.zipCode) {whereClause.zipCode = { [Op.like]: `%${args.zipCode}%` }}
        //     if (args.state) whereClause.state = args.state;

        //     return await PropertyDbModel.findAll({where: whereClause, order: orderClause});

        // } catch(error) {
        //     throw new Error(`Failed to fetch Properties. ${error}`);
        // }
        return propertyRepository.getAllProperties(args);
    },

    getPropertyById: async (_: any, { id }: {id: number}) => {
        // try {
        //     const property = await PropertyDbModel.findByPk(id);

        //     if (!property) {
        //         throw new Error(`Property with ID ${id} not found`);
        //     } 

        //     return property;
            
        // } catch(error) {
        //     throw new Error(`Failed to fetch Property. ${error}`);
        // }
        return propertyRepository.getPropertyById(id)
    }
})