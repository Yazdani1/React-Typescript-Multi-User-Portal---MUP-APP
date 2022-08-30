/****************************************/
/*********     Category     *************/
/****************************************/


export interface IBase{
  slug?: string;
  _id: number;
  date: string;
}


export interface CategoryListProps extends IBase {
  categoryName: string;

}

/****************************************/
/*********     Posts     *************/
/****************************************/

export interface UserDetailsProps extends IBase{
    name: string;
  
}


// export interface CategoryDetailsProps {
//     categoryName: string;
//     _id: string;
//     slug: string;
// }

export interface PostListProps extends IBase{
  title: string;
  des: string;
  image: any;
  categoryBy: CategoryListProps;
  postedBy: UserDetailsProps;
}
