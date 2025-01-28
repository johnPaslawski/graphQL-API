import { Op, Order } from "sequelize";
import PropertyDbModel from "../../../models/PropertyDbModel";
import { IPropertyRepository } from "../interfaces/IPropertyRepository";
import { Property } from "../../../models/PropertyModelTypes";

export class SQLitePropertyRepository implements IPropertyRepository
{
    async getAllProperties( args: {
        city?: string; 
        zipCode?: number; 
        state?: string; 
        sortBy?: string;
        order?: string}): Promise<Property[]> {
        try {
            const whereClause: any = {};
            const orderClause = args.sortBy 
                ? [[args.sortBy, args?.order?.toLocaleUpperCase() === 'A' ? 'ASC' : 'DESC']] as Order 
                : undefined;

            if (args.city) whereClause.city = args.city;
            if (args.zipCode) {whereClause.zipCode = { [Op.like]: `%${args.zipCode}%` }}
            if (args.state) whereClause.state = args.state;

            const results = await PropertyDbModel.findAll({where: whereClause, order: orderClause});

            return results.map(result => result.toJSON() as Property);

        } catch(error) {
            throw new Error(`Failed to fetch Properties. ${error}`);
        }
    }

    async getPropertyById (id: number): Promise<Property> {
        try {
            const property = await PropertyDbModel.findByPk(id);

            if (!property) {
                throw new Error(`Property with ID ${id} not found`);
            } 

            return property.toJSON() as Property
            
        } catch(error) {
            throw new Error(`Failed to fetch Property. ${error}`);
        }
    }
}
