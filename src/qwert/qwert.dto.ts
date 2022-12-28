export interface QwertBody{
  id?: number;
  title: string;
  body: string;
  comment_count?: number;
  view_count?: number;
  createdAt?: Date;
  updatedAt?: Date;
  user?: object;
}

export interface QwertQueryParams {
  orderBy?: string;
  limit?: number;
  offset?: number;
  orderType?: string;
}