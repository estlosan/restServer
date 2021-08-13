
const Role = require('./../models/Role');

const isRoleValid =  async (role = '') => {
    const existRole = await Role.findOne({ role })
    if (!existRole) {
        throw new Error(`Role: ${role} not regitered`);
    }
};

module.exports = {
    isRoleValid
}