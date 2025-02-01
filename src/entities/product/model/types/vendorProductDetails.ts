import { FilesType } from "@entities/product/model/types/vendorProductsList";

export interface FileModel {
  id: number;
  name: string;
  fileId: number;
  filePath: string;
}

export interface VendorProductDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: FileModel;
  operatingSystems: Array<FileModel>;
  files: Array<FilesType>;
}
