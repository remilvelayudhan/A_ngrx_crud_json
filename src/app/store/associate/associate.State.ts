import { AssociateModel } from "src/app/model/associate";

export const associateState:AssociateModel ={
    list: [],
    errorMessage: '',
    associateObj: {
        id: 0,
        name: "",
        email: "",
        phone: "",
        type: "CUSTOMER",
        address: "",
        associategroup: "level1",
        status: true
    }
}