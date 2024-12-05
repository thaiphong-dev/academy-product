import type { GetProp, UploadProps } from "antd/lib";
export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
export const GetBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
