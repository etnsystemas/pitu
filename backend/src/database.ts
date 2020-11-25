import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://cdpre:cdpre@localhost:3306/pitu');

export default sequelize;