import { AddressModel } from "./address-model";

export class EmployeeModel {
    constructor(eno: number, ename: string, age: number, address?: AddressModel) {
        this.eno = eno;
        this.ename = ename;
        this.age = age;
        this.address = address;
    }
    eno: number;
    ename: string;
    age: number;
    address: AddressModel
}
