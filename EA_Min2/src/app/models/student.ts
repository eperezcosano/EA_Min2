export class Student {
    _id: string;
    name: string;
    address: string;
    phone: Array<Object>;
    studies: Array<string>;

    constructor(_id= '', name= '', address='', phone= [], studies = []) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.studies = studies;
    }
}
