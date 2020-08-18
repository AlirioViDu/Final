export class Students {

    constructor(_id = '', name = '', surname = '') {
        this._id = _id;
        this.name = name;
        this.surname = surname;
    }

    _id: string;
    name: string;
    surname: string;
}

