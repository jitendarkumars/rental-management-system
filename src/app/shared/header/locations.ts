
export class Location {
    dealers_id:string;
    opco:string;
    name:string;
    branches:Branch[];
}
 class Branch {
    branch_id:string;
    name:string;
    categories:Category[];
}

class Category {
    name:string;
    image:string;
    subcategories:SubCategory[];
}

class SubCategory {
    name:string;
    image?:string;
}
