export interface PostDataModel {
    id: number;
    pictures: string;
    creator?: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    tags: string;
    title: string;
    likes: number;
}

export interface PostListDataModel {
    data: Array<PostDataModel>;
    // meta: {
    //   pagination: PaginationInfo;
    // };
  }