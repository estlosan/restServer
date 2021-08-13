
const Role = require('./../models/Role');
const User = require('./../models/User');

const isRoleValid =  async (role = '') => {
    const existRole = await Role.findOne({ role })
    if (!existRole) {
        throw new Error(`Role: ${role} not regitered`);
    }
};

const existsEmail = async (email) => {
    const existEmail = await User.findOne({ email })

    if (existEmail) {
        throw new Error(`Email duplicated`);
    }
}

module.exports = {
    isRoleValid,
    existsEmail
}