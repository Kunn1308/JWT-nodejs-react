import userApiService from "../services/userApiService";
const showFunc = async (req, res) => {
    try {
        if (req.query.page && req.query.limit) {
            let { page, limit } = req.query;
            let data = await userApiService.getUsersWithPaginate(+page, +limit);

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        } else {
            let data = await userApiService.getAllUsers();

            return res.status(200).json({
                EM: data.EM,
                EC: data.EC,
                DT: data.DT,
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            EM: "error from server",
            EC: -1,
            DT: "",
        });
    }
};

const createFunc = async (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        res.status(500).json({
            EM: "error from server",
            EC: -1,
            DT: "",
        });
    }
};

const updateFunc = async (req, res) => {
    try {
    } catch (e) {
        console.log(e);
        res.status(500).json({
            EM: "error from server",
            EC: -1,
            DT: "",
        });
    }
};

const deleteFunc = async (req, res) => {
    try {
        let data = await userApiService.deleteUser(req.body.id);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            EM: "error from server",
            EC: -1,
            DT: "",
        });
    }
};
export default {
    showFunc,
    createFunc,
    updateFunc,
    deleteFunc,
};
