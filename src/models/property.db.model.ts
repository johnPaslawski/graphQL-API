import { DataTypes, Model } from 'sequelize';
import sequelize from '../infrastructure/config/database';

class PropertyDbModel extends Model {}

PropertyDbModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weatherData: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        location: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE
        }
    },
    { sequelize, modelName: 'Property' }
);

export default PropertyDbModel;