

export interface IBase{
  slug: string;
  _id: number;
  date: string;
}

/****************************************/
/*********     Category     *************/
/****************************************/


export interface CategoryListProps extends IBase {
  categoryName: string;

}


/****************************************/
/*********     Users     *************/
/****************************************/

export interface UserDetailsProps extends IBase{
  name: string;
  profession: string;

}


/****************************************/
/*********     Posts        *************/
/****************************************/




export interface PostListProps extends IBase{
  title: string;
  des: string;
  image: any;
  categoryBy: CategoryListProps;
  postedBy: UserDetailsProps;
}
