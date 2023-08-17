export interface ImageDetails {
  height: number;
  width: number;
  size: number;
  url: string;
}

export interface ImageField {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: {
        large: ImageDetails;
        medium: ImageDetails;
        small: ImageDetails;
        thumbnail: ImageDetails;
      };
    };
  };
}

export interface DocumentField {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
}

export interface MultiImageField {
  data: {
    id: number;
    attributes: {
      url: string;
      formats: {
        large: ImageDetails;
        medium: ImageDetails;
        small: ImageDetails;
        thumbnail: ImageDetails;
      };
      name: string;
    };
  }[];
}

export interface GetDataListResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
