/****************************************/
/*********     Category     *************/
/****************************************/

export interface CategoryListProps {
  categoryName: string;
  slug?: string;
  _id: number;
  date: string;
}

/****************************************/
/*********     Posts     *************/
/****************************************/

export interface UserDetailsProps {
    name: string;
    _id: string;
}


export interface CategoryDetailsProps {
    categoryName: string;
    _id: string;
    slug: string;
}

export interface PostListProps extends UserDetailsProps,CategoryDetailsProps{
  title: string;
  des: string;
  image: any;
  categoryBy: CategoryDetailsProps;
  slug: string;
  postedBy: UserDetailsProps;
  date: string;

}
