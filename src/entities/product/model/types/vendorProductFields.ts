type VendorProductFieldModel = {
  id: number;
  name: string;
};

type VendorProductValueModel = {
  id: number;
  value: string;
};

export interface VendorProductFieldRowsModel {
  field: VendorProductFieldModel;
  value: VendorProductValueModel;
}

export interface VendorProductFieldsItemModel {
  id: number;
  name: string;
  main: boolean;
  fields: Array<VendorProductFieldRowsModel>;
}
